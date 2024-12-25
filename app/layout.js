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
        <title>
          Online Image Converter | PNG, JPG, GIF, WebP - Best Quality & Free
        </title>
        <meta
          name="description"
          content="Convert images between PNG, JPG, GIF, and WebP formats with unlimited downloads and conversions. Get the best quality output for free, with no downloads required."
        />

        {/* Facebook Meta Tags */}
        <meta
          property="og:url"
          content="https://19-20-file-converter.vercel.app"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Online Image Converter | PNG, JPG, GIF, WebP - Best Quality & Free"
        />
        <meta
          property="og:description"
          content="Convert images between PNG, JPG, GIF, and WebP formats with unlimited downloads and conversions. Get the best quality output for free, with no downloads required."
        />
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/images/433ae6a4-3ec4-475a-a779-bdbab90f2e34.png?token=tFj0g840yMVqOQHg798CNRaDeEcZU17jWP_jDjwlx20&height=630&width=1200&expires=33271125229"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="19-20-file-converter.vercel.app"
        />
        <meta
          property="twitter:url"
          content="https://19-20-file-converter.vercel.app"
        />
        <meta
          name="twitter:title"
          content="Online Image Converter | PNG, JPG, GIF, WebP - Best Quality & Free"
        />
        <meta
          name="twitter:description"
          content="Convert images between PNG, JPG, GIF, and WebP formats with unlimited downloads and conversions. Get the best quality output for free, with no downloads required."
        />
        <meta
          name="twitter:image"
          content="https://opengraph.b-cdn.net/production/images/433ae6a4-3ec4-475a-a779-bdbab90f2e34.png?token=tFj0g840yMVqOQHg798CNRaDeEcZU17jWP_jDjwlx20&height=630&width=1200&expires=33271125229"
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
