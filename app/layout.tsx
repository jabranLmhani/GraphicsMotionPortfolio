import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jabran Lmhani - Motion Graphics Designer • Visual Storytelling • Animation",
  description: "I design visually striking motion graphics that bring ideas to life blending rhythm, typography, and cinematic movement to create memorable visual experiences.",
  keywords: ["Motion Graphics Designer", "Data Scientist", "VR Developer", "Full-Stack Developer", "Next.js", "React", "Unity", "Machine Learning", "VR/XR"],
  authors: [{ name: "Jabran Lmhani" }],
  openGraph: {
    title: "Jabran Lmhani - Motion Graphics Designer • Visual Storytelling • Animation",
    description: "I design visually striking motion graphics that bring ideas to life blending rhythm, typography, and cinematic movement to create memorable visual experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
