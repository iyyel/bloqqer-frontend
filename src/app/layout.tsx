import { Metadata } from "next";
import "./globals.css";
import { DrawerNav } from "./drawer-nav";

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
        <DrawerNav />
        {children}
      </body>
    </html>
  );
}
