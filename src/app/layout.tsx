import type { Metadata } from "next";
import Head from "next/head";
import { MuseoModerno } from "next/font/google";
import "./globals.css";

const museoModerno = MuseoModerno({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WaterDay",
  description: "Calculadora de ingestão de água",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Head>
        <link rel="icon" href="/solta.png" />
      </Head>
      <body className={museoModerno.className}>{children}</body>
    </html>
  );
}
