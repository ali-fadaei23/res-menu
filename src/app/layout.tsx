import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const AkiraFont = localFont({ src: "../assets/fonts/Gotham Pro Black.ttf" });

export const metadata: Metadata = {
  title: "Res Menu",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`min-h-screen w-screen flex items-center justify-center ${AkiraFont.className}`}
      >
        <div className='size-full sm:w-[640px] border-x-2'>{children}</div>
      </body>
    </html>
  );
}
