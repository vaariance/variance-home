import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/Site/Header";

export const metadata: Metadata = {
  title: "Vaariance",
  description:
    "Open source account abstraction SDK written in dart that empowers developers to create mobile-native Web3 applications with ease.",
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Vaariance",
    description:
      "Open source account abstraction SDK written in dart that empowers developers to create mobile-native Web3 applications with ease.",
    url: "https://variance-home.vercel.app",
    siteName: "Vaariance",
  },
  metadataBase: new URL("https://variance-home.vercel.app"), // Fix the assignment here
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
