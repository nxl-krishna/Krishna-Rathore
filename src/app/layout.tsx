import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Krishna Rathore | Software Engineer & AI/ML Developer",
  description: "Krishna Rathore is a Computer Science student at IIIT Vadodara, working as a Software Development Engineer and building full-stack, generative AI, and machine learning systems.",
  keywords: [
    "Krishna Rathore",
    "IIIT Vadodara",
    "Software Development Engineer",
    "Machine Learning",
    "Deep Reinforcement Learning",
    "UAV-assisted IoT",
    "Generative AI",
    "Next.js Developer",
    "FastAPI",
    "Computer Science",
    "Flowathon",
  ],
  authors: [{ name: "Krishna Rathore" }],
  creator: "Krishna Rathore",
  openGraph: {
    title: "Krishna Rathore | Software Engineer & AI/ML Developer",
    description: "B.Tech Computer Science student at IIIT Vadodara building full-stack applications, generative AI systems, and machine learning projects.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
