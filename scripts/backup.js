#!/usr/bin/env node

/**
 * Backup script for 2B Global Enerji website
 * Creates backups of important files and data
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const BACKUP_DIR = path.join(__dirname, '..', 'backups');
const DATE_FORMAT = new Date().toISOString().replace(/[:.]/g, '-').split('T')[0];
const BACKUP_NAME = `2b-website-backup-${DATE_FORMAT}`;

// Files and directories to backup
const BACKUP_ITEMS = [
    {
        name: 'source-code',
        path: path.join(__dirname, '..'),
        exclude: [
            'node_modules',
            '.next',
            'backups',
            '.git',
            'coverage',
            '*.log',
            '.env.local',
            '.env.production'
        ]
    },
    {
        name: 'environment',
        path: path.join(__dirname, '..', '.env.local'),
        isFile: true
    },
    {
        name: 'package-files',
        path: path.join(__dirname, '..', 'package.json'),
        isFile: true
    },
    {
        name: 'package-lock',
        path: path.join(__dirname, '..', 'package-lock.json'),
        isFile: true
    }
];

// Create backup directory if it doesn't exist
function ensureBackupDir() {
    if (!fs.existsSync(BACKUP_DIR)) {
        fs.mkdirSync(BACKUP_DIR, { recursive: true });
        console.log('✅ Backup directory created:', BACKUP_DIR);
    }
}

// Create tar backup
function createTarBackup() {
    try {
        const backupPath = path.join(BACKUP_DIR, `${BACKUP_NAME}.tar.gz`);
        const sourcePath = path.join(__dirname, '..');

        // Create tar command with exclusions
        const excludeArgs = BACKUP_ITEMS[0].exclude
            .map(item => `--exclude=${item}`)
            .join(' ');

        const command = `tar -czf "${backupPath}" ${excludeArgs} -C "${sourcePath}" .`;

        console.log('📦 Creating tar backup...');
        execSync(command, { stdio: 'inherit' });

        const stats = fs.statSync(backupPath);
        const sizeInMB = (stats.size / (1024 * 1024)).toFixed(2);

        console.log(`✅ Tar backup created: ${backupPath} (${sizeInMB} MB)`);
        return backupPath;
    } catch (error) {
        console.error('❌ Error creating tar backup:', error.message);
        return null;
    }
}

// Create individual file backups
function createFileBackups() {
    const fileBackups = [];

    BACKUP_ITEMS.forEach(item => {
        if (item.isFile && fs.existsSync(item.path)) {
            try {
                const fileName = path.basename(item.path);
                const backupPath = path.join(BACKUP_DIR, `${BACKUP_NAME}-${item.name}-${fileName}`);

                fs.copyFileSync(item.path, backupPath);
                fileBackups.push(backupPath);

                console.log(`✅ File backup created: ${fileName}`);
            } catch (error) {
                console.error(`❌ Error backing up ${item.name}:`, error.message);
            }
        }
    });

    return fileBackups;
}

// Create backup manifest
function createManifest(backupFiles) {
    const manifest = {
        timestamp: new Date().toISOString(),
        backupName: BACKUP_NAME,
        files: backupFiles.map(file => ({
            name: path.basename(file),
            path: file,
            size: fs.statSync(file).size,
            created: new Date().toISOString()
        })),
        totalSize: backupFiles.reduce((total, file) => total + fs.statSync(file).size, 0),
        version: require('../package.json').version,
        nodeVersion: process.version,
        platform: process.platform
    };

    const manifestPath = path.join(BACKUP_DIR, `${BACKUP_NAME}-manifest.json`);
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

    console.log('✅ Backup manifest created:', manifestPath);
    return manifest;
}

// Clean old backups (keep last 7 days)
function cleanOldBackups() {
    try {
        const files = fs.readdirSync(BACKUP_DIR);
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

        let cleanedCount = 0;

        files.forEach(file => {
            const filePath = path.join(BACKUP_DIR, file);
            const stats = fs.statSync(filePath);

            if (stats.mtime < sevenDaysAgo) {
                fs.unlinkSync(filePath);
                cleanedCount++;
                console.log(`🗑️  Removed old backup: ${file}`);
            }
        });

        if (cleanedCount > 0) {
            console.log(`✅ Cleaned ${cleanedCount} old backup files`);
        } else {
            console.log('✅ No old backups to clean');
        }
    } catch (error) {
        console.error('❌ Error cleaning old backups:', error.message);
    }
}

// Main backup function
function main() {
    console.log('🚀 Starting 2B Global Enerji website backup...');
    console.log(`📅 Backup date: ${new Date().toLocaleString()}`);
    console.log(`📁 Backup name: ${BACKUP_NAME}`);

    try {
        // Ensure backup directory exists
        ensureBackupDir();

        // Create backups
        const tarBackup = createTarBackup();
        const fileBackups = createFileBackups();

        // Combine all backup files
        const allBackups = tarBackup ? [tarBackup, ...fileBackups] : fileBackups;

        if (allBackups.length === 0) {
            console.error('❌ No backups were created');
            process.exit(1);
        }

        // Create manifest
        const manifest = createManifest(allBackups);

        // Clean old backups
        cleanOldBackups();

        // Summary
        const totalSizeMB = (manifest.totalSize / (1024 * 1024)).toFixed(2);
        console.log('\n📊 Backup Summary:');
        console.log(`   Files created: ${manifest.files.length}`);
        console.log(`   Total size: ${totalSizeMB} MB`);
        console.log(`   Backup location: ${BACKUP_DIR}`);

        console.log('\n✅ Backup completed successfully!');

    } catch (error) {
        console.error('❌ Backup failed:', error.message);
        process.exit(1);
    }
}

// Run if called directly
if (require.main === module) {
    main();
}

module.exports = { main, createTarBackup, createFileBackups, cleanOldBackups };
