import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my portfolio of web development projects built with React, Next.js, TypeScript, and other modern technologies. View live demos and source code.",
  openGraph: {
    title: "Projects - Web Development Portfolio",
    description: "Explore my portfolio of web development projects built with React, Next.js, TypeScript, and other modern technologies.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}