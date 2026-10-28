"use client";

import { useState } from "react";
import Image from "next/image";
import { ProfileData } from "@/types";
import { Play, Pause, ArrowUpRight, CheckCircle2 } from "lucide-react";

interface ProfileViewProps {
  data: ProfileData;
  onOpenBooking: () => void;
}

export function ProfileView({ data, onOpenBooking }: ProfileViewProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full text-white bg-[#0e0e0e]">
      <div className="w-full px-4 sm:px-8 lg:px-12 py-12 lg:py-16 border-b border-[#222222] bg-[#121212]">
        <div className="font-mono-arch text-[11px] tracking-widest text-stone-400 uppercase font-semibold mb-6">
          STUDIO PRINCIPAL / BIOGRAPHICAL DOSSIER
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-4">
            <div className="relative aspect-[3/4] w-full bg-stone-950 border border-[#262626] overflow-hidden">
              <Image
                src={data.portrait}
                alt={data.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-top"
              />
              <div className="absolute bottom-3 left-3 bg-black/85 backdrop-blur-sm text-white font-mono-arch text-[10px] tracking-widest px-2.5 py-1 uppercase border border-white/20">
                {data.portraitBadge}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white mb-2">
                {data.name}
              </h1>
              <div className="font-mono-arch text-xs sm:text-sm tracking-wider uppercase text-stone-400">
                {data.subtitle}
              </div>
            </div>

            <blockquote className="text-lg sm:text-2xl font-light leading-relaxed text-stone-200 border-l-2 border-white pl-6 py-2">
              &ldquo;{data.quote}&rdquo;
            </blockquote>

            <div className="p-4 bg-[#181818] border border-[#2a2a2a] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  type="button"
                  className="w-10 h-10 rounded-full bg-white hover:bg-stone-200 text-black flex items-center justify-center transition-colors cursor-pointer shrink-0"
                  aria-label={isPlaying ? "Pause audio essay" : "Play audio essay"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>
                <div>
                  <div className="font-mono-arch text-[11px] font-semibold text-white uppercase">
                    {data.audioEssay.title}
                  </div>
                  <div className="font-mono-arch text-[10px] text-stone-400 uppercase">
                    MONOGRAPH DISCOURSE RECORDING / {data.audioEssay.duration}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-1 h-6">
                {[40, 70, 30, 90, 60, 45, 80, 50, 100, 35, 65, 85, 40, 75, 55, 95, 30, 70].map((h, i) => (
                  <span
                    key={i}
                    style={{ height: `${isPlaying ? h : Math.max(20, h * 0.4)}%` }}
                    className={`w-1 rounded-full transition-all duration-300 ${
                      isPlaying ? "bg-white" : "bg-stone-700"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                type="button"
                className="bg-[#1f1f1f] hover:bg-[#282828] border border-[#383838] hover:border-white text-white font-mono-arch text-xs tracking-widest uppercase px-6 py-3 transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <span>REQUEST PRINCIPAL CONSULTATION</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-8 lg:px-12 py-16 bg-[#0e0e0e] border-b border-[#222222]">
        <div className="font-mono-arch text-[11px] tracking-widest text-stone-500 uppercase mb-8">
          CAREER & PRACTICE SUMMARY
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.practiceSummary.map((item) => (
            <div
              key={item.title}
              className="p-6 bg-[#141414] border border-[#262626] space-y-2 hover:border-white transition-all"
            >
              <div className="font-mono-arch text-[10px] tracking-widest text-stone-400 uppercase font-semibold">
                {item.title}
              </div>
              <div className="text-xl font-bold uppercase tracking-tight text-white">
                {item.value}
              </div>
              <p className="text-xs font-mono-arch text-stone-400 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full px-4 sm:px-8 lg:px-12 py-16 bg-[#0e0e0e]">
        <div className="font-mono-arch text-[11px] tracking-widest text-stone-500 uppercase mb-8">
          SELECTED RECOGNITIONS & COMMISSIONS
        </div>

        <div className="overflow-x-auto border border-[#262626] bg-[#121212]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#262626] bg-[#181818] font-mono-arch text-[10px] tracking-widest text-stone-400 uppercase">
                <th className="py-3 px-4 font-semibold">YEAR</th>
                <th className="py-3 px-4 font-semibold">HONOR OR AWARD</th>
                <th className="py-3 px-4 font-semibold">INSTITUTION</th>
                <th className="py-3 px-4 font-semibold">LOCATION</th>
                <th className="py-3 px-4 font-semibold text-right">DOSSIER</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#202020] font-mono-arch text-xs">
              {data.recognitions.map((item, index) => (
                <tr key={index} className="hover:bg-[#181818] transition-colors">
                  <td className="py-4 px-4 text-white font-semibold">{item.year}</td>
                  <td className="py-4 px-4 font-sans font-bold uppercase text-white">
                    {item.award}
                  </td>
                  <td className="py-4 px-4 text-stone-400">{item.organization}</td>
                  <td className="py-4 px-4 text-stone-400">{item.location}</td>
                  <td className="py-4 px-4 text-right">
                    <span className="inline-flex items-center gap-1 text-[11px] text-white font-semibold cursor-pointer hover:underline">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{item.actionLabel}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
