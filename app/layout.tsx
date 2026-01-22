import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SocialFloatMenu from "@/components/ui/social-float-menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CelAssistPro - Votre Co-pilote Administrative & Digitale",
  description: "Bras droit stratégique pour dirigeants et entrepreneurs",
  metadataBase: new URL("https://celassistpro.fr"),
  openGraph: {
    title: "CelAssistPro - Votre Co-pilote Administrative & Digitale",
    description: "Bras droit stratégique pour dirigeants et entrepreneurs",
    url: "https://celassistpro.fr",
    siteName: "CelAssistPro",
    images: [
      {
        url: "https://res.cloudinary.com/dgjsq5fnl/image/upload/v1769108874/logo_cellassistpro_lqxix4.jpg",
        width: 1200,
        height: 630,
        alt: "CelAssistPro Logo",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CelAssistPro - Votre Co-pilote Administrative & Digitale",
    description: "Bras droit stratégique pour dirigeants et entrepreneurs",
    images: ["https://res.cloudinary.com/dgjsq5fnl/image/upload/v1769108874/logo_cellassistpro_lqxix4.jpg"],
  },
  other: {
    "og:image:type": "image/jpeg",
    "og:image:secure_url": "https://res.cloudinary.com/dgjsq5fnl/image/upload/v1769108874/logo_cellassistpro_lqxix4.jpg",
  },
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
