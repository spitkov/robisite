import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Robisoft",
  description: "Welcome to Robisoft",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
  openGraph: {
    title: 'Robisoft',
    description: "Welcome to Robisoft",
    url: 'https://robisoft.spitkov.hu',
    siteName: 'Robisoft',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Robisoft',
    description: "Welcome to Robisoft",
  },
  metadataBase: new URL('https://robisoft.spitkov.hu')
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.className} min-h-screen antialiased bg-black`} suppressHydrationWarning>
        <main className="relative overflow-hidden bg-black">
          {children}
        </main>
      </body>
    </html>
  );
}
