import type { Metadata } from "next";
import { AnimationProvider } from "@/components/AnimationProvider";
import { cloudinaryConfig } from "@/lib/cloudinary";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://corebuild-landing.vercel.app"),
  title: "CoreBuild | Premium Materials from China",
  description:
    "Premium construction materials sourced from Guangzhou's manufacturing network. Single partner from factory floor to finished site.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "CoreBuild | Premium Materials from China",
    description:
      "Premium construction materials sourced from Guangzhou's manufacturing network. Single partner from factory floor to finished site.",
    url: "/",
    siteName: "CoreBuild",
    type: "website",
    locale: "en_US"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href={cloudinaryConfig.baseUrl} />
        <link rel="dns-prefetch" href={cloudinaryConfig.baseUrl} />
        <link
          rel="preload"
          href="/fonts/dm-sans-latin-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/poppins-latin-400.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <AnimationProvider />
        {children}
      </body>
    </html>
  );
}
