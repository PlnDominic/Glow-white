import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "GloWhite | Glowhite Dental Clinic",
  description: "Experience dental care reimagined as a restorative journey. We offer a full range of services including preventive care, restorative treatments, cosmetic dentistry, and orthodontics—tailored to meet the unique needs of each patient.",
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
  openGraph: {
    title: "GloWhite | Glowhite Dental Clinic",
    description: "Experience dental care reimagined as a restorative journey. We offer a full range of services including preventive care, restorative treatments, cosmetic dentistry, and orthodontics—tailored to meet the unique needs of each patient.",
    url: "https://glowhite.com",
    siteName: "GloWhite Dental Clinic",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "GloWhite Dental Clinic",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GloWhite | Glowhite Dental Clinic",
    description: "Experience dental care reimagined as a restorative journey. We offer a full range of services including preventive care, restorative treatments, cosmetic dentistry, and orthodontics—tailored to meet the unique needs of each patient.",
    images: ["/opengraph-image"],
    creator: "@GloWhite",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Manrope:wght@200..800&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block" />
      </head>
      <body className="min-h-full flex flex-col pt-20">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
