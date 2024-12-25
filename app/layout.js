import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Online Image Converter | PNG, JPG, GIF, WebP - Best Quality & Free",
  description:
    "Convert images between PNG, JPG, GIF, and WebP formats with unlimited downloads and conversions. Get the best quality output for free, with no downloads required.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Basic Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Facebook Meta Tags */}
        <meta
          property="og:url"
          content="https://19-20-file-converter.vercel.app"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/images/433ae6a4-3ec4-475a-a779-bdbab90f2e34.png?token=i4-o1yfV5iwR_uk9X3pKwDAVax7vKdrXyXvViY5CQHY&height=630&width=1200&expires=33271123949"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="file-convert-azure.vercel.app"
        />
        <meta
          property="twitter:url"
          content="https://19-20-file-converter.vercel.app"
        />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta
          name="twitter:image"
          content="https://opengraph.b-cdn.net/production/images/433ae6a4-3ec4-475a-a779-bdbab90f2e34.png?token=i4-o1yfV5iwR_uk9X3pKwDAVax7vKdrXyXvViY5CQHY&height=630&width=1200&expires=33271123949"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
