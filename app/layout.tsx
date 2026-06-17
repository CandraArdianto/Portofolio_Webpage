import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Candra Ardianto — Product Manager",
  description: "Product Manager with 5 years of experience across Gaming, Fintech, IoT, and Web3. MBA Candidate at UGM.",
  openGraph: {
    title: "Candra Ardianto — Product Manager",
    description: "5 years shipping digital products across Gaming, Fintech, IoT, and Web3.",
    url: "https://candraardianto.vercel.app",
    siteName: "Candra Ardianto",
    images: [
      {
        url: "https://candraardianto.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Candra Ardianto — Product Manager",
      },
    ],
    type: "website",
  },
  verification: {
    google: 'your-verification-code-here',
  },
  twitter: {
    card: "summary_large_image",
    title: "Candra Ardianto — Product Manager",
    description: "5 years shipping digital products across Gaming, Fintech, IoT, and Web3.",
    images: ["https://candraardianto.vercel.app/og-image.png",],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
