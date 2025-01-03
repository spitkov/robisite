import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Robisoft",
  description: "Welcome to Robisoft",
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
    <html lang="en">
      <body className={`${inter.className} min-h-screen antialiased`}>
        <main className="relative overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
