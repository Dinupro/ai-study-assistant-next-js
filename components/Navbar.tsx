"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-white/70 backdrop-blur-md dark:bg-slate-950/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-brand-600 dark:text-brand-400">
                AI Study Assistant
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-sm font-medium transition-colors hover:text-brand-600 dark:hover:text-brand-400">Home</Link>
              <Link href="#features" className="text-sm font-medium transition-colors hover:text-brand-600 dark:hover:text-brand-400">Features</Link>
              <Link href="/dashboard" className="text-sm font-medium transition-colors hover:text-brand-600 dark:hover:text-brand-400">Dashboard</Link>
              <Link
                href="/login"
                className="rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-500/25 active:scale-95"
              >
                Login
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-500 focus:outline-none dark:hover:bg-slate-800"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-white/10 bg-white dark:bg-slate-950">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3 text-center">
            <Link href="/" className="block rounded-md px-3 py-2 text-base font-medium hover:bg-slate-100 dark:hover:bg-slate-800">Home</Link>
            <Link href="#features" className="block rounded-md px-3 py-2 text-base font-medium hover:bg-slate-100 dark:hover:bg-slate-800">Features</Link>
            <Link href="/dashboard" className="block rounded-md px-3 py-2 text-base font-medium hover:bg-slate-100 dark:hover:bg-slate-800">Dashboard</Link>
            <Link href="/login" className="block rounded-md bg-brand-600 px-3 py-2 text-base font-medium text-white shadow-sm">Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
