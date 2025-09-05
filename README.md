This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Proje Genel Bakışı

Bu proje, Next.js App Router'ı kullanarak modern ve performanslı bir web uygulaması oluşturmayı hedeflemektedir. Bileşen tabanlı bir mimariyle geliştirilmiş olup, Tailwind CSS ile stilize edilmiştir.

## Mimari ve Dosya Yapısı

Proje aşağıdaki temel dizin yapısına sahiptir:

- `app/`: Next.js sayfalarını, layout dosyalarını ve genel CSS dosyalarını içerir. Her bir sayfa (`hakkimizda`, `iletisim`, `projelerimiz`) kendi dizininde bulunur.
- `components/`: Uygulama genelinde yeniden kullanılabilir UI bileşenlerini (Header, Footer, Navigation, vb.) barındırır.
- `constants/`: Uygulama genelinde kullanılan sabit değerleri (navigasyon menüleri, stil sınıfları vb.) tanımlar.
- `contexts/`: React Context API ile global durum yönetimini sağlar (örn. MobileMenuContext).
- `hooks/`: Özel React hook'larını (örn. useNavigation) içerir.
- `public/`: Statik varlıkları (resimler, ikonlar) depolar.
- `types/`: TypeScript arayüzlerini ve tip tanımlamalarını içerir.

## Stil Yönetimi

Proje, hızlı ve esnek UI geliştirmesi için [Tailwind CSS](https://tailwindcss.com/) kullanmaktadır. Tailwind'in utility-first yaklaşımı sayesinde, özel CSS yazma ihtiyacı minimuma indirilmiştir. `tailwind.config.ts` dosyası, Tailwind'in yapılandırmasını ve kullanılmayan CSS'i temizleme (`purge`/`content`) ayarlarını içerir.

## Veri Çekme

Mevcut durumda proje içeriği tamamen statiktir ve harici bir API'den veya veritabanından dinamik olarak veri çekme işlemi bulunmamaktadır. Gelecekte dinamik içerik eklenmesi durumunda, Next.js'in [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components) veya [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions) gibi kendi mekanizmaları veya [SWR](https://swr.vercel.app/) / [React Query](https://tanstack.com/query/latest) gibi istemci tarafı veri çekme kütüphaneleri kullanılabilir.

## Performans İyileştirmeleri

Proje, aşağıdaki performans optimizasyonları ile geliştirilmiştir:

1. **Resim Optimizasyonu:** Tüm resimler, Next.js'in yerleşik [`next/image`](https://nextjs.org/docs/pages/api-reference/components/image) bileşeni kullanılarak otomatik olarak optimize edilmektedir. Bu, resimlerin doğru boyutlarda sunulmasını, modern formatlara dönüştürülmesini ve gecikmeli yüklenmesini (lazy loading) sağlar.
2. **Kod Bölme (Code Splitting):** Uygulamanın ilk yükleme boyutunu azaltmak amacıyla, her zaman ihtiyaç duyulmayan bileşenler [`next/dynamic`](https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading) kullanılarak dinamik olarak içe aktarılmaktadır (örneğin, `AboutDropdown` bileşeni).
3. **Kritik CSS Optimizasyonu:** Tailwind CSS, `content` yapılandırması sayesinde kullanılmayan CSS sınıflarını üretim derlemesinden otomatik olarak kaldırır, bu da CSS bundle boyutunu optimize eder.
4. **İskelet Yükleme Durumları (Skeleton Loading States):** Gelecekteki dinamik içerik yüklemeleri için kullanıcı deneyimini iyileştirmek amacıyla iskelet yükleme bileşenleri (örneğin, `SkeletonCard`) eklenmiştir. Bu, içeriğin yüklenmesini beklerken kullanıcıya görsel bir geri bildirim sunar.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
