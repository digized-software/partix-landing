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
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3V61LQ913F"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3V61LQ913F');
            `,
          }}
        />
        
        {/* Telemetry and Analytics */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Basic telemetry tracking
              window.partixTelemetry = {
                track: function(event, properties = {}) {
                  console.log('Partix Telemetry:', event, properties);
                  // Send to Google Analytics
                  if (typeof gtag !== 'undefined') {
                    gtag('event', event, properties);
                  }
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
