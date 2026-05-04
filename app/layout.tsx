import type { Metadata } from "next";
import { michroma, roboto } from "@/lib/fonts";
import "./globals.css";


export const metadata: Metadata = {
  title: "Zahavsoft",
  description: "Zahavsoft is an innovative software company that offers software solutions to businesses.",
  openGraph: {
    type: "website",
    url: "https://zahavsoft.com",
    title: "Zahavsoft",
    description: "Zahavsoft is an innovative software company that offers software solutions to businesses.",
    siteName: "Zahavsoft",
    // images: [{ url: "https://example.com/og.png" }]
},
  keywords: ["website", "software company"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${michroma.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
