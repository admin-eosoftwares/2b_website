# 2B Website - cPanel Deployment Rehberi

## 🚀 cPanel'e Yayınlama Adımları

### Ön Hazırlık

1. **Projeyi Build Edin**

   ```bash
   npm run build
   ```

   Bu komut `out` klasörü oluşturacak.

2. **Gerekli Dosyaları Hazırlayın**
   - `out` klasörünün tüm içeriği
   - `.htaccess` dosyası (proje kök dizinindeki)
   - `favicon.ico` (eğer varsa)

### cPanel'e Yükleme

#### Yöntem 1: Dosya Yöneticisi ile (Önerilen)

1. **cPanel'e Giriş Yapın**
   - Hosting sağlayıcınızın cPanel paneline giriş yapın

2. **Dosya Yöneticisi'ni Açın**
   - "Dosya Yöneticisi" veya "File Manager" seçeneğini bulun
   - `public_html` klasörüne gidin

3. **Mevcut Dosyaları Yedekleyin** (Eğer varsa)
   - Mevcut website dosyalarınızı yedekleyin
   - `public_html` klasörünü boşaltın

4. **Yeni Dosyaları Yükleyin**
   - `out` klasörünün tüm içeriğini `public_html` klasörüne yükleyin
   - `.htaccess` dosyasını `public_html` klasörüne kopyalayın
   - `favicon.ico` dosyasını `public_html` klasörüne kopyalayın

5. **Dosya İzinlerini Kontrol Edin**
   - `.htaccess` dosyasının izinlerini 644 yapın
   - Klasörlerin izinlerini 755 yapın
   - Diğer dosyaların izinlerini 644 yapın

#### Yöntem 2: ZIP Upload ile

1. **ZIP Dosyası Oluşturun**

   ```bash
   # out klasörünün içeriğini ve .htaccess dosyasını ZIP'e paketleyin
   ```

2. **cPanel'de ZIP'i Yükleyin**
   - Dosya Yöneticisi'nde `public_html` klasörüne ZIP'i yükleyin
   - ZIP'i extract edin
   - ZIP dosyasını silin

### Önemli Kontroller

#### 1. .htaccess Dosyası Kontrolü

- `.htaccess` dosyasının `public_html` klasöründe olduğundan emin olun
- Dosya izinlerinin 644 olduğunu kontrol edin

#### 2. Ana Sayfa Kontrolü

- `index.html` dosyasının `public_html` klasöründe olduğundan emin olun

#### 3. HTTPS Yönlendirmesi

- Site HTTP üzerinden erişilebilir olmalı
- HTTPS yönlendirmesi `.htaccess` ile otomatik çalışacak

### Test Etme

1. **Ana Sayfa Testi**

   ```
   https://yourdomain.com
   ```

2. **Alt Sayfa Testleri**

   ```
   https://yourdomain.com/hakkimizda/
   https://yourdomain.com/projelerimiz/
   https://yourdomain.com/iletisim/
   ```

3. **404 Sayfası Testi**

   ```
   https://yourdomain.com/olmayan-sayfa
   ```

### Sorun Giderme

#### Problem: Sayfa Bulunamadı Hatası

**Çözüm:**

- `.htaccess` dosyasının doğru yerde olduğunu kontrol edin
- Apache mod_rewrite modülünün aktif olduğunu hosting sağlayıcınızdan öğrenin

#### Problem: CSS/JS Dosyaları Yüklenmiyor

**Çözüm:**

- `_next` klasörünün `public_html` klasöründe olduğunu kontrol edin
- Dosya izinlerini kontrol edin

#### Problem: HTTPS Yönlendirmesi Çalışmıyor

**Çözüm:**

- Hosting sağlayıcınızdan SSL sertifikasının aktif olduğunu kontrol edin
- `.htaccess` dosyasının doğru yüklendiğini kontrol edin

#### Problem: Resimler Yüklenmiyor

**Çözüm:**

- `public` klasörünün içeriğinin doğru yerde olduğunu kontrol edin
- Resim dosyalarının izinlerini kontrol edin

### Performans Optimizasyonu

1. **Gzip Compression**
   - `.htaccess` dosyasında compression ayarları mevcut
   - Apache mod_deflate modülünün aktif olduğunu kontrol edin

2. **Browser Caching**
   - `.htaccess` dosyasında cache ayarları mevcut
   - Apache mod_expires modülünün aktif olduğunu kontrol edin

### Güvenlik

1. **Dosya Erişim Kısıtlamaları**
   - `.htaccess` dosyasında güvenlik ayarları mevcut
   - Hassas dosyalara erişim engellenmiştir

2. **Güvenlik Başlıkları**
   - XSS, CSRF koruması aktif
   - Clickjacking koruması aktif

### Hosting Sağlayıcısına Sorulacak Sorular

1. Apache mod_rewrite modülü aktif mi?
2. Apache mod_headers modülü aktif mi?
3. Apache mod_deflate modülü aktif mi?
4. Apache mod_expires modülü aktif mi?
5. SSL sertifikası aktif mi?
6. PHP sürümü nedir? (Gerekirse)

### Son Kontroller

- [ ] Ana sayfa açılıyor
- [ ] Alt sayfalar çalışıyor
- [ ] HTTPS yönlendirmesi çalışıyor
- [ ] CSS/JS dosyaları yükleniyor
- [ ] Resimler görüntüleniyor
- [ ] Form çalışıyor (iletişim sayfası)
- [ ] 404 sayfası çalışıyor
- [ ] Mobile responsive çalışıyor

### Destek

Sorun yaşarsanız:

1. Hosting sağlayıcınızın teknik desteğine başvurun
2. Apache modüllerinin aktif olduğunu kontrol ettirin
3. Dosya izinlerini kontrol edin
4. `.htaccess` dosyasının doğru yerde olduğunu kontrol edin

---

**Not:** Bu rehber cPanel uyumlu olarak optimize edilmiştir. Eski Apache sürümleri için uyumluluk sorunları minimize edilmiştir.
