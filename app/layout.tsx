import type { Metadata } from "next";
import { AnimationProvider } from "@/components/AnimationProvider";
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
      <body>
        <AnimationProvider />
        {children}
      </body>
    </html>
  );
}
