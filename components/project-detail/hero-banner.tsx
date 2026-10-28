"use client";

import Image from "next/image";
import Link from "next/link";
import { LoeweProjectDetail } from "@/types";

interface HeroBannerProps {
  data: LoeweProjectDetail;
}

export function HeroBanner({ data }: HeroBannerProps) {
  return (
    <div className="w-full">
      <div className="w-full px-4 sm:px-8 lg:px-12 py-3 border-b border-[#222222] bg-[#121212] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono-arch">
        <div className="flex items-center space-x-3">
          <span className="font-bold tracking-wider text-white uppercase">
            LOEWE / PROJECT DETAIL
          </span>
          <span className="bg-[#1f1f1f] border border-[#333333] text-white text-[10px] tracking-wider px-2 py-0.5 font-semibold">
            {data.catalogueCode}
          </span>
        </div>
        <div className="flex items-center space-x-6 text-stone-400 uppercase tracking-widest text-[11px]">
          <Link href="/" className="text-white font-semibold">WORKS</Link>
          <Link href="/archive" className="hover:text-white transition-colors">ARCHIVE</Link>
          <Link href="/profile" className="hover:text-white transition-colors">PROFILE</Link>
        </div>
      </div>

      <div className="relative w-full h-[65vh] sm:h-[80vh] lg:h-[90vh] bg-black overflow-hidden group">
        <div className="absolute inset-0 w-full h-full animate-hero-atmosphere">
          <Image
            src={data.heroImage}
            alt={data.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-95 contrast-110"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none" />

        <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10 lg:p-14 z-10 max-w-5xl">
          <div className="inline-block bg-black/80 backdrop-blur-md border border-white/20 text-white font-mono-arch text-[10px] sm:text-xs tracking-widest uppercase px-3 py-1 mb-4 opacity-0 animate-text-reveal">
            {data.categoryBadge}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-[1.05] mb-4 opacity-0 animate-text-reveal anim-delay-200 drop-shadow-sm">
            {data.title}
          </h1>

          <div className="space-y-2 max-w-3xl opacity-0 animate-text-reveal anim-delay-300">
            <div className="font-mono-arch text-xs sm:text-sm tracking-widest uppercase text-white font-semibold">
              {data.galleryName}
            </div>
            <p className="text-stone-300 text-xs sm:text-sm lg:text-base leading-relaxed font-light">
              {data.heroDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
