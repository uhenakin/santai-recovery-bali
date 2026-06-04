import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

// 1. Impor Navbar dan SmoothScrolling di sini
import Navbar from "../components/Navbar";
import SmoothScrolling from "../components/SmoothScrolling";

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const manrope = Manrope({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
});

// 2. Konfigurasi SEO Global (Metadata API)
export const metadata: Metadata = {
  metadataBase: new URL("https://santairecoveryspa.com"),
  title: {
    default: "Santai Recovery Spa | Uluwatu, Bali", 
    template: "%s | Santai Recovery Spa", // Otomatis menambahkan nama web di belakang judul halaman spesifik
  },
  description: "Premium recovery spa in Uluwatu, Bali offering Sauna, Ice Bath, Hot Pool, and Swimming Pool facilities. Relax, Refresh, Recover.",
  keywords: ["Spa Bali", "Ice Bath Uluwatu", "Sauna Bali", "Recovery Center", "Hot Pool", "Santai Spa"],
  openGraph: {
    title: "Santai Recovery Spa Bali",
    description: "Premium recovery spa in Uluwatu, Bali.",
    url: "https://www.domain-santai-spa-anda.com", // TODO: Ganti dengan nama domain asli Anda saat sudah rilis
    siteName: "Santai Recovery Spa",
    images: [
      {
        url: "/images/bg/sauna4.jpg", // Gambar ini akan muncul saat link web di-share ke WhatsApp atau IG DM
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased bg-[#0a0f1e] text-white" suppressHydrationWarning>
        {/* 3. Komponen Utama */}
        <SmoothScrolling>
          <Navbar />
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}