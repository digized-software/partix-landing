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
  title: "Partix - Interactive Party Management Software",
  description:
    "Make your party more interactive with Partix. Guests take photos that appear animated on screen, with AI content filtering and custom backgrounds.",
  keywords:
    "party management, interactive party, photo sharing, event management, party software",
  openGraph: {
    title: "Partix - Interactive Party Management",
    description:
      "Transform your parties with interactive photo sharing and AI-powered content filtering.",
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
      <head>
        {/* Telemetry and Analytics */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Basic telemetry tracking
              window.partixTelemetry = {
                track: function(event, properties = {}) {
                  console.log('Partix Telemetry:', event, properties);
                  // Add your analytics service here (e.g., Google Analytics, Mixpanel, etc.)
                },
                identify: function(userId, traits = {}) {
                  console.log('Partix Identify:', userId, traits);
                }
              };
              
              // Track page views
              window.partixTelemetry.track('page_view', {
                page: window.location.pathname,
                timestamp: new Date().toISOString()
              });
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
