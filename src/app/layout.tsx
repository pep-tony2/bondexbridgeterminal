import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/landing-page/Navbar";
import { Footer } from "@/components/landing-page/Footer";
import { Analytics } from "@vercel/analytics/next"

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: {
    template: "%s || Bondex Bridge Multinational Terminal", // %s is used as a placeholder
    default: "Bondex Bridge Multinational Terminal",
  },
  description: "Bondex Bridge Terminal",
  // Favicon
  icons: {
    icon: [
      { url: '/logo-cropped.jpeg' },
      { url: '/logo-cropped.jpeg', sizes: '32x32', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png' },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
