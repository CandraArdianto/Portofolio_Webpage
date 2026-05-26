import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Candra Ardianto — Product Manager",
  description: "Product Manager with 5 years of experience across Gaming, Fintech, IoT, and Web3. MBA Candidate at UGM.",
  openGraph: {
    title: "Candra Ardianto — Product Manager",
    description: "5 years shipping digital products across Gaming, Fintech, IoT, and Web3.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
