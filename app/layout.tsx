import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SocialFloatMenu from "@/components/ui/social-float-menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CelAssistPro - Votre Co-pilote Administrative & Digitale",
  description: "Bras droit stratégique pour dirigeants et entrepreneurs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
        <SocialFloatMenu />
      </body>
    </html>
  );
}
