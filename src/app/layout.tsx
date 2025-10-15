import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const montserratFont = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const openSansFont = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guillermo Soto Marquez",
  description: "I'm a Frontend Developer. Dive into my portfolio featuring modern web apps, innovative UI design, and user-centric solutions",
  openGraph: {
    title: "Guillermo Soto Marquez",
    description: "I'm a Frontend Developer. Dive into my portfolio featuring modern web apps, innovative UI design, and user-centric solutions",
    images: ['https://res.cloudinary.com/dq5pco3vr/image/upload/v1760488266/gsm_dev_ukucp9.jpg']
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${montserratFont.variable} ${openSansFont.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
