import { Inter } from "next/font/google";
import "./globals.css";
import Loading from "../components/Loading";
import TopContactBar from "../components/TopContactBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MobileMenuProvider } from "../contexts/MobileMenuContext";
import PageWrapper from "@/components/PageWrapper";
import MobileMenu from "@/components/MobileMenu";
import ScrollHandler from "../components/ScrollHandler";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <MobileMenuProvider>
          <PageWrapper>
            <Loading />
            <TopContactBar />
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </PageWrapper>
          <MobileMenu />
          <ScrollHandler />
        </MobileMenuProvider>
      </body>
    </html>
  );
}
