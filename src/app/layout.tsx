import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Krishna Rathore | Research Intern & Full-Stack Developer",
  description: "Personal website of Krishna Rathore. B.Tech Computer Science student at IIIT Vadodara, Research Intern specializing in Machine Learning, Medical Imaging pipelines, and Full-Stack Development. Publisher of 2 IEEE conference papers.",
  keywords: [
    "Krishna Rathore",
    "IIIT Vadodara",
    "Research Intern",
    "IEEE Publications",
    "Machine Learning",
    "Medical Imaging ML",
    "Next.js Developer",
    "FastAPI",
    "Computer Science",
    "Flowathon",
  ],
  authors: [{ name: "Krishna Rathore" }],
  creator: "Krishna Rathore",
  openGraph: {
    title: "Krishna Rathore | Research Intern & Full-Stack Developer",
    description: "B.Tech Student at IIIT Vadodara & Machine Learning Researcher. Discover my published IEEE papers, machine learning projects, and full-stack applications.",
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
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body>
        <div className="bg-blobs">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>
        <div className="bg-grid"></div>
        {children}
      </body>
    </html>
  );
}
