import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Unpromptable Assets — Custom AI Systems for Your Business",
  description:
    "We build custom AI-powered systems for business owners who want an irreplaceable edge in marketing, operations, and sales.",
  openGraph: {
    title: "Unpromptable Assets — Custom AI Systems for Your Business",
    description:
      "We build custom AI-powered systems for business owners who want an irreplaceable edge in marketing, operations, and sales.",
    url: "https://unpromptableassets.com",
    siteName: "Unpromptable Assets",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unpromptable Assets — Custom AI Systems for Your Business",
    description:
      "We build custom AI-powered systems for business owners who want an irreplaceable edge in marketing, operations, and sales.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
