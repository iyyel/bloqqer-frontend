import { Metadata } from "next";
import "./globals.css";
import MainHeader from "./main-header";

export const metadata: Metadata = {
  title: "Bloqqer",
  description: "Bloqqer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
