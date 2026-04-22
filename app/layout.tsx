import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LoopHub — AI Voice Agents That Call Leads in 8 Seconds",
  description:
    "Your leads go cold in 5 minutes. LoopHub calls them in 8 seconds. AI voice agents that sound human, respond instantly, and never miss a hot lead.",
  keywords: "AI voice agent, speed to lead, lead response, sales automation, Tommy AI",
  openGraph: {
    title: "LoopHub — We Call Your Leads in 8 Seconds",
    description:
      "AI voice agents that sound human, respond instantly, and never miss a hot lead.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "LoopHub — AI Voice Agents That Call Leads in 8 Seconds",
    description: "78% of buyers choose the first responder. Be first with LoopHub.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
