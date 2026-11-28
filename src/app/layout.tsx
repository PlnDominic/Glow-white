import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://glowhitedental.com"),
  title: "GloWhite | Glowhite Dental Clinic",
  description: "Experience dental care reimagined as a restorative journey. We offer a full range of services including preventive care, restorative treatments, cosmetic dentistry, and orthodontics—tailored to meet the unique needs of each patient.",
  // Inlined so the icon costs no CDN request. Regenerate from public/logo.jpeg if the logo changes.
  icons: {
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAMFBMVEVOOr////9KNr5pWcljUcZ2Z81TP8FbSMSTiNm1sOeHfNWjmt+rpONAKbnEwe3QzvKCC23oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5ElEQVR4nGMQxAEYRiUGV5AQAglYRZUUkkwYGJiYGJiYmNSUkCRcjS43FzCwpOeqsbHXljHBpdRmn1izM4FhTaSrx5rVk1dsCVGASqjPzWi+WaT+9FznnvM/Xs/48RNmofok3ks6oWxz5p3c9frXrl+zX8Mk1LZbWUTWrLVyKXYwcQ4xNzGHGcW0oub37Bu9ocEmIcGlUc6mZjDLmXxyJp/0KQjevXTH1uCI1hVtMB0Mqq/sVkxWMCkuMDZPNnEocYD7gymJjSmJgUGBQQmEkH2owMQA104QCA5k1AqOSqABnEECAF8md22Z+PxwAAAAAElFTkSuQmCC",
    apple: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAMFBMVEVOOr////9KNr5pWcljUcZ2Z81TP8FbSMSTiNm1sOeHfNWjmt+rpONAKbnEwe3QzvKCC23oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5ElEQVR4nGMQxAEYRiUGV5AQAglYRZUUkkwYGJiYGJiYmNSUkCRcjS43FzCwpOeqsbHXljHBpdRmn1izM4FhTaSrx5rVk1dsCVGASqjPzWi+WaT+9FznnvM/Xs/48RNmofok3ks6oWxz5p3c9frXrl+zX8Mk1LZbWUTWrLVyKXYwcQ4xNzGHGcW0oub37Bu9ocEmIcGlUc6mZjDLmXxyJp/0KQjevXTH1uCI1hVtMB0Mqq/sVkxWMCkuMDZPNnEocYD7gymJjSmJgUGBQQmEkH2owMQA104QCA5k1AqOSqABnEECAF8md22Z+PxwAAAAAElFTkSuQmCC",
  },
  openGraph: {
    title: "GloWhite | Glowhite Dental Clinic",
    description: "Experience dental care reimagined as a restorative journey. We offer a full range of services including preventive care, restorative treatments, cosmetic dentistry, and orthodontics—tailored to meet the unique needs of each patient.",
    url: "https://glowhitedental.com",
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
