"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { Send, Check } from "lucide-react";

interface FooterProps {
  onOpenBooking: () => void;
}

export function Footer({ onOpenBooking }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setSubscribed(true);
      }
    } catch {
      setSubscribed(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-[#222222] mt-20 text-[#f3f3f0]">
      <div className="w-full px-4 sm:px-8 lg:px-12 pt-16 pb-12 border-b border-[#222222]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono-arch text-[11px] tracking-widest text-stone-400 uppercase mb-6">
          <span>{siteConfig.monographLabel}</span>
          <span>{siteConfig.coordinates}</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-white my-4 select-none">
          {siteConfig.brandName}
        </h2>

        <div className="flex flex-wrap items-center gap-3 pt-6">
          <Link
            href="/archive"
            className="border border-[#333333] hover:border-white bg-[#141414] hover:bg-[#1e1e1e] text-white font-mono-arch text-[11px] tracking-widest uppercase px-5 py-2.5 transition-colors"
          >
            PRESS ARCHIVE
          </Link>
          <Link
            href="/archive"
            className="border border-[#333333] hover:border-white bg-[#141414] hover:bg-[#1e1e1e] text-white font-mono-arch text-[11px] tracking-widest uppercase px-5 py-2.5 transition-colors"
          >
            DESIGN MONOGRAPH
          </Link>
          <button
            onClick={onOpenBooking}
            type="button"
            className="bg-[#1e1e1e] border border-[#3a3a3a] hover:border-white hover:bg-[#282828] text-white font-mono-arch text-[11px] tracking-widest uppercase px-6 py-2.5 transition-colors cursor-pointer"
          >
            {siteConfig.actionButton.label}
          </button>
        </div>
      </div>

      <div className="w-full px-4 sm:px-8 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-[#222222]">
        <div>
          <div className="font-mono-arch text-[11px] tracking-widest text-stone-500 uppercase mb-4">
            {siteConfig.footer.headquarters.title}
          </div>
          <div className="space-y-2 text-xs font-mono-arch text-stone-300 leading-relaxed">
            <p>{siteConfig.footer.headquarters.address}</p>
            <p>
              <a href={`mailto:${siteConfig.footer.headquarters.email}`} className="text-white hover:underline">
                {siteConfig.footer.headquarters.email}
              </a>
            </p>
            <p>Telephone {siteConfig.footer.headquarters.phone}</p>
            <p className="text-stone-400">Instagram: {siteConfig.footer.headquarters.social}</p>
          </div>
        </div>

        <div>
          <div className="font-mono-arch text-[11px] tracking-widest text-stone-500 uppercase mb-4">
            {siteConfig.footer.disciplines.title}
          </div>
          <ul className="space-y-2 text-xs font-mono-arch">
            {siteConfig.footer.disciplines.items.map((item) => (
              <li key={item.name} className="flex items-center justify-between text-stone-300 hover:text-white">
                <Link href="/archive" className="hover:underline">
                  {item.name}
                </Link>
                <span className="text-stone-500">({item.count})</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-mono-arch text-[11px] tracking-widest text-stone-500 uppercase mb-4">
            {siteConfig.footer.representation.title}
          </div>
          <p className="text-xs font-mono-arch text-stone-400 leading-relaxed font-light">
            {siteConfig.footer.representation.description}
          </p>
        </div>

        <div>
          <div className="font-mono-arch text-[11px] tracking-widest text-stone-500 uppercase mb-4">
            {siteConfig.footer.inquiry.title}
          </div>
          <p className="text-xs font-mono-arch text-stone-400 leading-relaxed font-light mb-4">
            {siteConfig.footer.inquiry.description}
          </p>

          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="flex items-stretch border border-[#333333] bg-[#141414]">
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={siteConfig.footer.inquiry.inputPlaceholder}
                className="w-full px-3 py-2 text-xs font-mono-arch bg-transparent text-white placeholder-stone-500 focus:outline-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-[#242424] hover:bg-[#333333] border-l border-[#333333] text-white px-3 flex items-center justify-center cursor-pointer transition-colors"
                aria-label="Subscribe"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          ) : (
            <div className="flex items-center gap-2 text-xs font-mono-arch text-white border border-[#333333] bg-[#1a1a1a] p-2">
              <Check className="w-4 h-4 text-white" />
              <span>SUBSCRIPTION REGISTERED</span>
            </div>
          )}

          <div className="font-mono-arch text-[10px] tracking-wider text-stone-500 mt-3">
            {siteConfig.footer.inquiry.note}
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-8 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-arch text-[11px] tracking-wider text-stone-500 uppercase bg-[#080808]">
        <div>{siteConfig.footer.copyright}</div>
        <div className="flex items-center space-x-6">
          {siteConfig.footer.legalLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
