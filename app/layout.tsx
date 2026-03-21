import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Aether | The New Standard for Infinite Scale",
  description: "Build, deploy, and scale globally without managing infrastructure. Aether is the distributed edge compute engine designed for the next generation of the internet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${outfit.variable} antialiased selection:bg-[#0070f3]/30`}
      >
        {children}
      </body>
    </html>
  );
}
