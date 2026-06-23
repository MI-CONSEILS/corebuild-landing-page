import type { Metadata } from "next";
import { AnimationProvider } from "@/components/AnimationProvider";
import { cloudinaryConfig } from "@/lib/cloudinary";
import "./globals.css";

export const metadata: Metadata = {
  title: "CoreBuild | Premium Materials from China",
  description:
    "Premium construction materials sourced from Guangzhou's manufacturing network. Single partner from factory floor to finished site."
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
      </head>
      <body>
        <AnimationProvider />
        {children}
      </body>
    </html>
  );
}
