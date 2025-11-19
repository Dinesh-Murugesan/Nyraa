
import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import { SlSocialInstagram, SlSocialFacebook, SlSocialTwitter, SlSocialLinkedin } from "react-icons/sl";
import Link from 'next/link';
import "./globals.css";
import { Social } from "@/components/Social/Social";

const arimoSans = Arimo({
  variable: "--font-arimo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nyraa Botique Business App",
  description: "This app is for managing the business of Nyraa Botique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${arimoSans.variable} antialiased`}
      >
        <Social />
        <hr className="border-red-500"></hr>
        {children}
      </body>
    </html>
  );
}
