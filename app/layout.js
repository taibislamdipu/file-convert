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
          Unlimited Online Image Converter | PNG, JPG, GIF, WebP - Best Quality
          & Free
        </title>
        <meta
          name="description"
          content="Convert images between PNG, JPG, GIF, and WebP formats with unlimited downloads and conversions. Get the best quality output for free, with no downloads required."
        />

        {/* Facebook Meta Tags */}
        <meta
          property="og:url"
          content="https://19-20-file-converter.vercel.app/"
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
          content="https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v4/19-20-file-converter.vercel.app/Online%20Image%20Converter%20%7C%20PNG%2C%20JPG%2C%20GIF%2C%20WebP%20-%20Best%20Quality%20%26%20Free/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2Fd86a4f9e-3802-4819-947a-1a4277381c28.png%3Ftoken%3DrTDWrar5A8bvFazl6aMOsMosmnZ_wpeWWT3WCBe0Fck%26height%3D630%26width%3D1200%26expires%3D33271126621/og.png"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="19-20-file-converter.vercel.app"
        />
        <meta
          property="twitter:url"
          content="https://19-20-file-converter.vercel.app/"
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
          content="https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v4/19-20-file-converter.vercel.app/Online%20Image%20Converter%20%7C%20PNG%2C%20JPG%2C%20GIF%2C%20WebP%20-%20Best%20Quality%20%26%20Free/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2Fd86a4f9e-3802-4819-947a-1a4277381c28.png%3Ftoken%3DrTDWrar5A8bvFazl6aMOsMosmnZ_wpeWWT3WCBe0Fck%26height%3D630%26width%3D1200%26expires%3D33271126621/og.png"
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
