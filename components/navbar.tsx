"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site-config";
import { Menu, X, ArrowUpRight, User } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0e0e0e]/95 backdrop-blur-md border-b border-[#222222]">
      <div className="w-full px-4 sm:px-8 lg:px-12 h-14 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="font-bold tracking-tight text-sm sm:text-base text-white uppercase hover:text-stone-200 transition-colors">
            {siteConfig.brandName}
          </Link>
          <span className="hidden md:inline-block text-stone-600">/</span>
          <span className="hidden md:inline-block font-mono-arch text-[10px] tracking-widest text-stone-400 uppercase">
            {siteConfig.citySubtext}
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {siteConfig.mainNav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-mono-arch text-xs tracking-widest uppercase transition-colors py-1 ${
                  isActive
                    ? "text-white font-semibold border-b-2 border-white"
                    : "text-stone-400 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <button
            onClick={onOpenBooking}
            type="button"
            className="bg-[#181818] hover:bg-[#252525] border border-[#333333] hover:border-white text-white font-mono-arch text-[11px] tracking-wider uppercase font-semibold px-4 py-2 transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
          >
            <span>{siteConfig.actionButton.label}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <Link
            href="/profile"
            className="w-8 h-8 rounded-full border border-[#333333] flex items-center justify-center text-stone-300 hover:border-white hover:text-white transition-colors"
            aria-label="Profile Account"
          >
            <User className="w-4 h-4" />
          </Link>
        </nav>

        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={onOpenBooking}
            type="button"
            className="bg-[#181818] border border-[#333333] text-white font-mono-arch text-[10px] tracking-wider uppercase px-2.5 py-1.5"
          >
            BOOK
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="p-1.5 text-stone-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#222222] bg-[#121212] px-4 py-6 space-y-4 shadow-2xl">
          <div className="font-mono-arch text-[10px] tracking-widest text-stone-500 uppercase mb-2">
            STUDIO NAVIGATION
          </div>
          <div className="flex flex-col space-y-3">
            {siteConfig.mainNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-mono-arch text-sm tracking-wider uppercase flex items-center justify-between py-2 border-b border-[#222222] ${
                    isActive ? "text-white font-semibold" : "text-stone-300"
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-stone-500" />
                </Link>
              );
            })}
          </div>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              type="button"
              className="w-full bg-[#181818] border border-[#333333] hover:border-white text-white font-mono-arch text-xs tracking-wider uppercase font-semibold py-3 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{siteConfig.actionButton.label}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
