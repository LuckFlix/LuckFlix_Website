import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // globals.css dosyasını içe aktardığınızdan emin olun

const inter = Inter({ subsets: ["latin"] });

// metadata nesnesini tanımlayın veya güncelleyin
export const metadata: Metadata = {
  title: "LuckFlix", // Mevcut başlığınız veya yeni bir başlık
  description: "Discover your next favorite show with LuckFlix.", // Mevcut açıklamanız veya yeni bir açıklama
  icons: {
    icon: "/icon-512.png", // public klasöründeki logo dosyanızın yolu
    // Farklı boyutlar veya türler için ek ikonlar da ekleyebilirsiniz:
    // apple: "/apple-icon.png",
    // shortcut: "/favicon-16x16.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
