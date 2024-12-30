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

// export const metadata = {
//   title:
//     "Unlimited Online Image Converter | PNG, JPG, GIF, WebP - Best Quality & Free",
//   description:
//     "Convert images between PNG, JPG, GIF, and WebP formats with unlimited downloads and conversions. Get the best quality output for free, with no downloads required.",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>
          Unlimited Online Image Converter | PNG, JPG, GIF, WebP - Best Quality
          & Free
        </title>
        <meta
          name="description"
          content="Convert images between PNG, JPG, GIF, and WebP formats with unlimited downloads and conversions. Get the best quality output for free, with no downloads required."
          key="desc"
        />
        <meta
          property="og:title"
          content="Unlimited Online Image Converter | PNG, JPG, GIF, WebP - Best Quality & Free"
        />
        <meta
          property="og:description"
          content="Convert images between PNG, JPG, GIF, and WebP formats with unlimited downloads and conversions. Get the best quality output for free, with no downloads required."
        />
        <meta
          property="og:image"
          content="https://i.ibb.co.com/bsHGPTm/Unlimited-Online-Image-Converter-PNG-JPG-GIF-Web-P-Best-Quality-Free-12-30-2024-12-51-PM-Copy.png"
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
