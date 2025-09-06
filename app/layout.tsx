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
import ErrorBoundary from "../components/ErrorBoundary";
import SafeComponent, { SafeComponentFallbacks } from "../components/SafeComponent";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ErrorBoundary>
          <MobileMenuProvider>
            <PageWrapper>
              <Loading />
              <SafeComponent
                componentName="TopContactBar"
                fallback={<div className="hidden md:block bg-[#f8f8ff]/80 backdrop-blur border-b border-gray-200 h-16"></div>}
              >
                <TopContactBar />
              </SafeComponent>

              <SafeComponent
                componentName="Header"
                fallback={SafeComponentFallbacks.Header}
              >
                <Header />
              </SafeComponent>

              <main className="flex-1">
                {children}
              </main>

              <SafeComponent
                componentName="Footer"
                fallback={SafeComponentFallbacks.Footer}
              >
                <Footer />
              </SafeComponent>
            </PageWrapper>

            <SafeComponent componentName="MobileMenu">
              <MobileMenu />
            </SafeComponent>

            <SafeComponent componentName="ScrollHandler">
              <ScrollHandler />
            </SafeComponent>
          </MobileMenuProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
