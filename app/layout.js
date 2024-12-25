import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head"; // Import Head for adding meta tags
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
  title:
    "Unlimited Online Image Converter | PNG, JPG, GIF, WebP - Best Quality & Free",
  description:
    "Convert images between PNG, JPG, GIF, and WebP formats with unlimited downloads and conversions. Get the best quality output for free, with no downloads required.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Head>
          {/* HTML Meta Tags */}
          <title>
            Unlimited Online Image Converter | PNG, JPG, GIF, WebP - Best
            Quality & Free
          </title>
          <meta
            name="description"
            content="Convert images between PNG, JPG, GIF, and WebP formats with unlimited downloads and conversions. Get the best quality output for free, with no downloads required."
          />

          {/* Facebook Meta Tags */}
          <meta
            property="og:url"
            content="https://fileconverterfree.vercel.app"
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
            content="https://ogcdn.net/2c2c6737-47d4-4459-9969-e711eb48394c/v1/fileconverterfree.vercel.app/Unlimited%20Online%20Image%20Converter%20%7C%20PNG%2C%20JPG%2C%20GIF%2C%20WebP%20-%20Best%20Quality%20%26%20Free/Convert%20images%20between%20PNG%2C%20JPG%2C%20GIF%2C%20and%20WebP%20formats%20with%20unlimited%20downloads%20and%20conversions.%20Get%20the%20best%20quality%20output%20for%20free%2C%20with%20no%20downloads%20required./https%3A%2F%2Fcdn.theopengraph.com%2Fproduction%2Fdocuments%2Fd564a463-1c51-4259-991d-0d17bf3e0391.jpg%3Ftoken%3D-hKrjcO4EFDmPh0lgxSanJdH2MZ9gYnfw4V87WUckbA%26height%3D800%26width%3D1200%26expires%3D33239188519/og.png"
          />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:domain"
            content="fileconverterfree.vercel.app"
          />
          <meta
            property="twitter:url"
            content="https://fileconverterfree.vercel.app"
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
            content="https://ogcdn.net/2c2c6737-47d4-4459-9969-e711eb48394c/v1/fileconverterfree.vercel.app/Unlimited%20Online%20Image%20Converter%20%7C%20PNG%2C%20JPG%2C%20GIF%2C%20WebP%20-%20Best%20Quality%20%26%20Free/Convert%20images%20between%20PNG%2C%20JPG%2C%20GIF%2C%20and%20WebP%20formats%20with%20unlimited%20downloads%20and%20conversions.%20Get%20the%20best%20quality%20output%20for%20free%2C%20with%20no%20downloads%20required./https%3A%2F%2Fcdn.theopengraph.com%2Fproduction%2Fdocuments%2Fd564a463-1c51-4259-991d-0d17bf3e0391.jpg%3Ftoken%3D-hKrjcO4EFDmPh0lgxSanJdH2MZ9gYnfw4V87WUckbA%26height%3D800%26width%3D1200%26expires%3D33239188519/og.png"
          />
        </Head>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
