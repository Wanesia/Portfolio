import { Sometype_Mono } from "next/font/google";
import "./globals.css";
import MainNav from "@/components/MainNav";

const sometypeMono = Sometype_Mono({
  variable: "--font-sometypeMono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
  description: "Software Developer Portfolio - Wanesa Wintmiller",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-[5rem]">
      <body className={`${sometypeMono.variable} antialiased`}>
        <div>
          <MainNav />
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
