import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Verified Lands | 1Acre",
  description: "A listing of all the lands that are verified by 1acre.in",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
