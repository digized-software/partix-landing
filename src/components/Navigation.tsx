"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-bold text-foreground">Partix</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Details Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDetailsOpen(!isDetailsOpen)}
                className="flex items-center space-x-1 text-foreground hover:text-green-600 transition-colors"
              >
                <span>Details</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isDetailsOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isDetailsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg py-2">
                  <Link
                    href="#features"
                    className="block px-4 py-2 text-foreground hover:bg-muted transition-colors"
                    onClick={() => setIsDetailsOpen(false)}
                  >
                    Features
                  </Link>
                  <Link
                    href="#pricing"
                    className="block px-4 py-2 text-foreground hover:bg-muted transition-colors"
                    onClick={() => setIsDetailsOpen(false)}
                  >
                    Pricing
                  </Link>
                </div>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <Link
                href="https://app.partix.xyz/join"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-foreground hover:text-green-600 transition-colors"
              >
                Join a Room
              </Link>
              <Link
                href="https://app.partix.xyz/admin"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200 transform hover:scale-105"
              >
                Create Room
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-green-600 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="px-4 py-4 space-y-4">
              <div className="space-y-2">
                <Link
                  href="#features"
                  className="block px-4 py-2 text-foreground hover:text-green-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="#pricing"
                  className="block px-4 py-2 text-foreground hover:text-green-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
              </div>
              <div className="pt-4 border-t border-border space-y-3">
                <Link
                  href="https://app.partix.xyz/join"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-2 text-center text-foreground hover:text-green-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Join a Room
                </Link>
                <Link
                  href="https://app.partix.xyz/admin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-2 text-center bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Create Room
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
