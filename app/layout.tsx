import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Corebuild | Modern Construction Delivery",
  description:
    "A construction landing page for Corebuild, focused on planning, delivery, and premium build execution."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
