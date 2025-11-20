"use client";

import Link from "next/link";
import { Send, Menu, X, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navItems = [
  { name: "Profil", href: "#profile" },
  { name: "Erfarenhet", href: "#experience" },
  { name: "Utbildning", href: "#education" },
  { name: "Mina projekt", href: "#projects" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:block fixed top-0 inset-x-0 z-50 pointer-events-none">
        {/* Cover content scrolling above the menu */}
        <div className="absolute top-0 left-0 right-0 h-10 bg-[#F9F9F9]" />
        
        <div className="relative px-4 pt-6">
          <div className="pointer-events-auto flex items-center justify-between p-1.5 bg-white rounded-full shadow-lg shadow-gray-200/50 border border-gray-100 w-full max-w-3xl mx-auto">
            
            {/* Logo / Profile Pic */}
            <Link href="/" className="flex-shrink-0">
            <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
               <img 
                 src="/matthias957.github.io/matthias.webp" 
                 alt="Matthias Moreillon" 
                 className="h-full w-full object-cover object-top" 
               />
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 rounded-full hover:bg-gray-50 transition-all"
              >
                {item.name}
              </Link>
            ))}
            <div className="w-px h-6 bg-gray-200 mx-2"></div>
            <a
              href="https://github.com/Mattias957"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-gray-900 rounded-full hover:bg-gray-50 transition-all"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </nav>

          {/* Contact Button */}
          <div className="flex-shrink-0">
            <Link
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#1a1a1a] px-6 text-sm font-medium text-white shadow-md transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              <span className="mr-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z" />
                   <path d="M15 3v6h6" />
                   <path d="M12 18v-6" />
                   <path d="M9 15l3 3 3-3" />
                </svg>
              </span>
              Kontakta mig
            </Link>
          </div>
        </div>
      </div>
      </header>

      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 inset-x-0 z-50 pt-4 px-4 pb-2 bg-[#F9F9F9] flex flex-col shadow-[0_10px_40px_-10px_rgba(249,249,249,1)]">
        <div className="flex items-center justify-between p-2 bg-white rounded-2xl shadow-lg border border-gray-100">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="h-12 w-12 rounded-xl overflow-hidden">
               <img
                 src="/matthias957.github.io/matthias.webp"
                 alt="Matthias Moreillon"
                 className="h-full w-full object-cover object-top"
               />
            </div>
          </Link>

          {/* Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-center h-12 w-12 rounded-xl bg-black text-white hover:bg-gray-800 transition-colors"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="pointer-events-auto mt-2 bg-white rounded-3xl border border-gray-100 shadow-2xl overflow-hidden">
              <nav className="flex flex-col p-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all"
                >
                  Kontakta mig
                </Link>
                <div className="h-px bg-gray-100 my-2 mx-4"></div>
                <a
                  href="https://github.com/Mattias957"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all flex items-center gap-2"
                >
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
              </nav>
          </div>
        )}
      </header>
    </>
  );
}
