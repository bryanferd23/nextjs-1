import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import SkipToContent from "../components/SkipToContent";
import { ThemeProvider } from "../contexts/ThemeContext";
import Analytics from "../components/Analytics";
import AccessibilityHelper from "../components/AccessibilityHelper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ferdz Portfolio",
    template: "%s | Ferdz Portfolio"
  },
  description: "Ferdz (Bryan Perante) - Full-Stack Developer at Cloudesk Pty Ltd. Specializing in PHP, Laravel, JavaScript, React Native, and modern web technologies. Explore my projects and get in touch for collaboration opportunities.",
  keywords: ["Full-Stack Developer", "PHP", "Laravel", "JavaScript", "React Native", "Web Development", "Portfolio", "Ferdz", "Bryan Perante"],
  authors: [{ name: "Ferdz (Bryan Perante)" }],
  creator: "Ferdz (Bryan Perante)",
  metadataBase: new URL("https://fjperante1.pages.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fjperante1.pages.dev",
    title: "Ferdz Portfolio",
    description: "Full-Stack Developer specializing in PHP, Laravel, JavaScript, and modern web technologies. Explore my projects and blog posts.",
    siteName: "Ferdz Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ferdz Portfolio",
    description: "Full-Stack Developer specializing in PHP, Laravel, JavaScript, and modern web technologies.",
    creator: "@fjperante",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <SkipToContent />
          <Navigation />
          <div id="main-content" tabIndex={-1}>
            {children}
          </div>
          <Analytics />
          <AccessibilityHelper />
        </ThemeProvider>
      </body>
    </html>
  );
}
