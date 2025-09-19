import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { HeroUIProvider } from "@heroui/react";
import Header from "@/components/UI/layout/Header";
import { siteConfig } from "@/config/site.config";
import Footer from "@/components/UI/layout/Footer";
import { layoutConfig } from "@/config/layout.config";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth/auth";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider session={session}>
          <HeroUIProvider>
            <Header />
            <main
              className="flex flex-col w-full justify-start items-center"
              style={{
                height: `calc(100vh - ${layoutConfig.headerHeight}px - ${layoutConfig.footerHeight}px)`,
              }}
            >
              {children}
            </main>
            <Footer />
          </HeroUIProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
