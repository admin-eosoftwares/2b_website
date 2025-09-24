# CPanel Deployment Rehberi

## Gerekli Dosyalar

- Tüm proje dosyaları
- `.env.production` dosyası
- `package.json` ve `package-lock.json`
- `next.config.ts`
- `tsconfig.json`

## CPanel'de Yapılacaklar

### 1. Node.js Uygulaması Oluşturma

1. CPanel → "Node.js" bölümüne gidin
2. "Create Application" butonuna tıklayın
3. Ayarlar:
   - **Application Root**: `/public_html/2b-website` (veya istediğiniz klasör)
   - **Application URL**: `2bltd.com.tr` (veya subdomain)
   - **Node.js Version**: 18.x veya üzeri

### 2. Dosyaları Yükleme

1. File Manager ile proje dosyalarını yükleyin
2. `.env.production` dosyasını `.env` olarak yeniden adlandırın
3. `node_modules` klasörünü yüklemeyin (otomatik oluşturulacak)

### 3. Bağımlılıkları Yükleme

CPanel Terminal'de:

```bash
cd /home/username/public_html/2b-website
npm install --production
```

### 4. Uygulamayı Başlatma

CPanel Node.js bölümünde:

1. "Start App" butonuna tıklayın
2. Port: 3000 (varsayılan)
3. Application URL'i not edin

### 5. Domain Yönlendirme

1. CPanel → "Subdomains" veya "Addon Domains"
2. `2bltd.com.tr` domain'ini uygulama URL'ine yönlendirin
3. Veya Nginx/Apache yapılandırması yapın

### 6. SSL Sertifikası

1. CPanel → "SSL/TLS"
2. "Let's Encrypt" ile ücretsiz SSL alın
3. Domain'i HTTPS'e yönlendirin

## Environment Variables

CPanel'de Environment Variables bölümünde şunları ekleyin:

- `NODE_ENV=production`
- `SMTP_HOST=mail.2bltd.com.tr`
- `SMTP_PORT=465`
- `SMTP_USER=info@2bltd.com.tr`
- `SMTP_PASS=Bilgi-2024-2Btr`
- `CONTACT_EMAIL=info@2bltd.com.tr`
- `GOOGLE_VERIFICATION_CODE=-mu4kzAlaCY7w-bPQhnJIrSn4pNqxD0ZB4EaoyMI3Go`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-B17F61F3N3`

## Test

1. Site açıldıktan sonra Google Search Console'da doğrulayın
2. Contact formunu test edin
3. Tüm sayfaları kontrol edin

## Sorun Giderme

- Log dosyalarını kontrol edin
- Node.js versiyonunu kontrol edin
- Port çakışması olup olmadığını kontrol edin
- Environment variables'ların doğru yüklendiğini kontrol edin
