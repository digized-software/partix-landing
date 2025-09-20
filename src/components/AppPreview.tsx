"use client";

import { useState, useRef, useEffect } from "react";

export default function AppPreview() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            See Partix in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the magic of interactive party management.
            <span className="hidden md:inline"> Try it out below!</span>
          </p>
        </div>

        {/* Desktop Preview */}
        <div ref={containerRef} className="hidden md:block w-full">
          <div className="relative bg-background rounded-lg border border-border overflow-hidden shadow-lg">
            <div className="flex items-center justify-between p-4 border-b border-border bg-muted/50">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-sm text-muted-foreground">
                app.partix.xyz
              </div>
            </div>

            {isVisible && (
              <iframe
                ref={iframeRef}
                src="https://app.partix.xyz"
                className="w-full h-[70vh] border-0"
                onLoad={() => setIsLoaded(true)}
                title="Partix App Preview"
                loading="lazy"
              />
            )}

            {!isLoaded && isVisible && (
              <div className="h-[70vh] flex items-center justify-center">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500 mx-auto mb-4"></div>
                  <p className="text-muted-foreground">Loading Partix...</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="md:hidden text-center">
          <div className="bg-background p-8 rounded-lg border border-border">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">P</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Try Partix Now
            </h3>
            <p className="text-muted-foreground mb-6">
              Open Partix in your browser to see the full experience
            </p>
            <a
              href="https://app.partix.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-200"
            >
              Open Partix
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
