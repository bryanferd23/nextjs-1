import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with me for collaboration opportunities, project discussions, or just to say hello. I'm always interested in hearing about new opportunities and interesting projects.",
  openGraph: {
    title: "Contact - Let's Work Together",
    description: "Get in touch with me for collaboration opportunities, project discussions, or just to say hello.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}