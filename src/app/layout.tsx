import type { Metadata } from "next";
import { Dosis } from "next/font/google";
import "./(site)/globals.css";

import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer/Footer";

const dosis = Dosis({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={dosis.className}>
        <div className='bg-primary text-dark'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
