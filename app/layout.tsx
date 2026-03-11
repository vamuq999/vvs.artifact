import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VVS Artifact",
  description: "Voltara Verification Standard Artifact Registry",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}