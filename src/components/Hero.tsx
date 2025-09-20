"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const trackCTA = (action: string) => {
    if (
      typeof window !== "undefined" &&
      (
        window as unknown as {
          partixTelemetry?: {
            track: (event: string, properties: Record<string, unknown>) => void;
          };
        }
      ).partixTelemetry
    ) {
      (
        window as unknown as {
          partixTelemetry: {
            track: (event: string, properties: Record<string, unknown>) => void;
          };
        }
      ).partixTelemetry.track("cta_click", {
        action,
        location: "hero",
        timestamp: new Date().toISOString(),
      });
    }
  };
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Make Your Party{" "}
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
              Interactive
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Guests take photos that appear animated on screen. Usually
            projected.
            <br className="hidden sm:block" />
            <span className="text-foreground font-medium">
              AI-powered content filtering keeps it appropriate.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="https://app.partix.xyz/admin"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCTA("create_room")}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-lg font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Create Your Room
            </Link>
            <Link
              href="https://app.partix.xyz/join"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCTA("join_room")}
              className="w-full sm:w-auto px-8 py-4 border-2 border-green-500 text-green-500 text-lg font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-200"
            >
              Join a Room
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>AI Content Filtering</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Custom Backgrounds</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Real-time Projection</span>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="mt-16 flex justify-center">
            <div className="max-w-4xl w-full">
              <Image
                src="/hero-illustration.svg"
                alt="Partix in action - people at a party taking photos that appear on a projector screen with AI filtering"
                width={800}
                height={500}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
