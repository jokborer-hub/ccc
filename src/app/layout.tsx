import type { Metadata } from "next";
import { Noto_Sans_SC, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ClientLayout from "@/components/ClientLayout";
import "@/styles/variables.css";
import "./globals.css";

const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-noto-sans-sc',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
  variable: '--font-playfair-display',
});

export const metadata: Metadata = {
  title: "CZQJ - 创造奇迹 | X链首个独创模式",
  description: "超越BTC的神币，必定会在X链上创造奇迹，掀起全新浪潮。",
  keywords: "CZQJ, 创造奇迹, X链, 加密货币, 区块链, DeFi",
  authors: [{ name: "CZQJ Team" }],
  robots: "index, follow",
  icons: {
    icon: '/czqj.ico',
    shortcut: '/czqj.ico',
    apple: '/czqj.png',
  },
  openGraph: {
    title: "CZQJ - 创造奇迹",
    description: "超越BTC的神币，必定会在X链上创造奇迹，掀起全新浪潮。",
    type: "website",
    locale: "zh_CN",
    images: [
      {
        url: '/banner.jpg',
        width: 1200,
        height: 630,
        alt: 'CZQJ - 创造奇迹',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CZQJ - 创造奇迹",
    description: "超越BTC的神币，必定会在X链上创造奇迹，掀起全新浪潮。",
    images: ['/banner.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`scroll-smooth ${notoSansSC.variable} ${playfairDisplay.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`antialiased ${notoSansSC.className}`}>
        <ThemeProvider>
          <div id="root">
            <ClientLayout>
              {children}
            </ClientLayout>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}