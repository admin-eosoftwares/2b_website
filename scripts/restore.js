#!/usr/bin/env node

/**
 * Restore script for 2B Global Enerji website
 * Restores website from backup files
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const BACKUP_DIR = path.join(__dirname, '..', 'backups');
const PROJECT_ROOT = path.join(__dirname, '..');

// List available backups
function listBackups() {
    try {
        const files = fs.readdirSync(BACKUP_DIR);
        const manifests = files.filter(file => file.endsWith('-manifest.json'));

        if (manifests.length === 0) {
            console.log('❌ No backup manifests found');
            return [];
        }

        console.log('📋 Available backups:');
        manifests.forEach((manifest, index) => {
            const manifestPath = path.join(BACKUP_DIR, manifest);
            const manifestData = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
            const totalSizeMB = (manifestData.totalSize / (1024 * 1024)).toFixed(2);

            console.log(`   ${index + 1}. ${manifestData.backupName}`);
            console.log(`      Date: ${new Date(manifestData.timestamp).toLocaleString()}`);
            console.log(`      Size: ${totalSizeMB} MB`);
            console.log(`      Files: ${manifestData.files.length}`);
            console.log('');
        });

        return manifests;
    } catch (error) {
        console.error('❌ Error listing backups:', error.message);
        return [];
    }
}

// Restore from tar backup
function restoreFromTar(backupPath) {
    try {
        console.log('📦 Restoring from tar backup...');

        // Create temporary directory for extraction
        const tempDir = path.join(BACKUP_DIR, 'temp-restore');
        if (fs.existsSync(tempDir)) {
            fs.rmSync(tempDir, { recursive: true });
        }
        fs.mkdirSync(tempDir, { recursive: true });

        // Extract tar file
        const command = `tar -xzf "${backupPath}" -C "${tempDir}"`;
        execSync(command, { stdio: 'inherit' });

        // Copy files to project root
        const extractedFiles = fs.readdirSync(tempDir);
        extractedFiles.forEach(file => {
            const sourcePath = path.join(tempDir, file);
            const destPath = path.join(PROJECT_ROOT, file);

            if (fs.statSync(sourcePath).isDirectory()) {
                if (fs.existsSync(destPath)) {
                    fs.rmSync(destPath, { recursive: true });
                }
                fs.cpSync(sourcePath, destPath, { recursive: true });
            } else {
                fs.copyFileSync(sourcePath, destPath);
            }
        });

        // Clean up temporary directory
        fs.rmSync(tempDir, { recursive: true });

        console.log('✅ Tar backup restored successfully');
        return true;
    } catch (error) {
        console.error('❌ Error restoring tar backup:', error.message);
        return false;
    }
}

// Restore individual files
function restoreFiles(manifest) {
    try {
        console.log('📄 Restoring individual files...');

        let restoredCount = 0;
        manifest.files.forEach(fileInfo => {
            if (fileInfo.name.includes('-manifest.json')) {
                return; // Skip manifest files
            }

            try {
                const sourcePath = fileInfo.path;
                const fileName = fileInfo.name;

                // Determine destination based on file type
                let destPath;
                if (fileName.includes('environment')) {
                    destPath = path.join(PROJECT_ROOT, '.env.local');
                } else if (fileName.includes('package-files')) {
                    destPath = path.join(PROJECT_ROOT, 'package.json');
                } else if (fileName.includes('package-lock')) {
                    destPath = path.join(PROJECT_ROOT, 'package-lock.json');
                } else {
                    destPath = path.join(PROJECT_ROOT, fileName);
                }

                // Create backup of existing file
                if (fs.existsSync(destPath)) {
                    const backupPath = `${destPath}.backup.${Date.now()}`;
                    fs.copyFileSync(destPath, backupPath);
                    console.log(`   💾 Backed up existing file: ${path.basename(backupPath)}`);
                }

                // Copy file
                fs.copyFileSync(sourcePath, destPath);
                console.log(`   ✅ Restored: ${path.basename(destPath)}`);
                restoredCount++;

            } catch (error) {
                console.error(`   ❌ Error restoring ${fileInfo.name}:`, error.message);
            }
        });

        console.log(`✅ Restored ${restoredCount} files`);
        return true;
    } catch (error) {
        console.error('❌ Error restoring files:', error.message);
        return false;
    }
}

// Install dependencies
function installDependencies() {
    try {
        console.log('📦 Installing dependencies...');
        execSync('npm install', {
            cwd: PROJECT_ROOT,
            stdio: 'inherit'
        });
        console.log('✅ Dependencies installed successfully');
        return true;
    } catch (error) {
        console.error('❌ Error installing dependencies:', error.message);
        return false;
    }
}

// Main restore function
function main() {
    const args = process.argv.slice(2);
    const backupIndex = args[0] ? parseInt(args[0]) - 1 : null;

    console.log('🔄 Starting 2B Global Enerji website restore...');

    try {
        // List available backups
        const manifests = listBackups();

        if (manifests.length === 0) {
            console.log('❌ No backups available to restore');
            process.exit(1);
        }

        // Select backup
        let selectedManifest;
        if (backupIndex !== null && backupIndex >= 0 && backupIndex < manifests.length) {
            selectedManifest = manifests[backupIndex];
        } else {
            // Use the latest backup
            selectedManifest = manifests[manifests.length - 1];
        }

        const manifestPath = path.join(BACKUP_DIR, selectedManifest);
        const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

        console.log(`\n🎯 Selected backup: ${manifest.backupName}`);
        console.log(`   Date: ${new Date(manifest.timestamp).toLocaleString()}`);
        console.log(`   Size: ${(manifest.totalSize / (1024 * 1024)).toFixed(2)} MB`);

        // Confirm restore
        if (!args.includes('--yes')) {
            const readline = require('readline');
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });

            const answer = await new Promise(resolve => {
                rl.question('\n⚠️  This will overwrite current files. Continue? (y/N): ', resolve);
            });
            rl.close();

            if (answer.toLowerCase() !== 'y' && answer.toLowerCase() !== 'yes') {
                console.log('❌ Restore cancelled');
                process.exit(0);
            }
        }

        // Restore tar backup if available
        const tarBackup = manifest.files.find(file => file.name.endsWith('.tar.gz'));
        if (tarBackup) {
            const success = restoreFromTar(tarBackup.path);
            if (!success) {
                console.log('❌ Tar restore failed, trying individual files...');
            }
        }

        // Restore individual files
        const success = restoreFiles(manifest);
        if (!success) {
            console.log('❌ File restore failed');
            process.exit(1);
        }

        // Install dependencies
        installDependencies();

        console.log('\n✅ Restore completed successfully!');
        console.log('🚀 You can now run: npm run dev');

    } catch (error) {
        console.error('❌ Restore failed:', error.message);
        process.exit(1);
    }
}

// Run if called directly
if (require.main === module) {
    main().catch(console.error);
}

module.exports = { main, listBackups, restoreFromTar, restoreFiles };
