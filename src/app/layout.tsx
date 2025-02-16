import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import { Toaster } from "../components/ui/toast";
import Head from "next/head";
import DevelopmentBanner from "@/components/DevelopmentBanner";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "ZenNotes AI",
  description: "Your clean seamless collaborative blocknote editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // ClerkProvider is a wrapper that provides Clerk's authentication and session management
    <ClerkProvider>
      <html lang="en">
        <body className="">
          <Head>
            <link rel="stylesheet" href="https://use.typekit.net/qyw4zbq.css" />
          </Head>
          <DevelopmentBanner />
          {children}
          <Toaster />
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
