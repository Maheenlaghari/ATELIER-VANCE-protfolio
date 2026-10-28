import Link from "next/link";
import { LoeweProjectDetail } from "@/types";
import { ArrowUpRight } from "lucide-react";

interface NextProjectCardProps {
  data: LoeweProjectDetail;
}

export function NextProjectCard({ data }: NextProjectCardProps) {
  const { nextProject } = data;

  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 py-12 bg-[#0e0e0e] border-b border-[#222222]">
      <div className="w-full border border-[#262626] p-6 sm:p-10 lg:p-12 hover:border-stone-500 transition-all duration-300 bg-[#141414]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 font-mono-arch text-[11px] tracking-widest uppercase">
          <span className="bg-[#202020] border border-[#333333] text-white px-2.5 py-1 font-semibold">
            {nextProject.badge}
          </span>
          <span className="text-stone-400">{nextProject.location}</span>
        </div>

        <div className="space-y-4 max-w-4xl">
          <Link
            href={nextProject.href}
            className="group inline-flex items-center gap-3 text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white hover:text-stone-300 transition-colors"
          >
            <span>{nextProject.title}</span>
            <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>

          <p className="text-xs sm:text-sm lg:text-base text-stone-300 leading-relaxed font-light">
            {nextProject.description}
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-[#262626] flex items-center justify-between">
          <div className="font-mono-arch text-[11px] tracking-widest text-stone-500 uppercase">
            MONOGRAM ARCHIVE VOL 02
          </div>
          <Link
            href={nextProject.href}
            className="bg-[#1f1f1f] border border-[#333333] hover:border-white hover:bg-[#282828] text-white font-mono-arch text-[11px] tracking-widest uppercase px-6 py-2.5 transition-colors inline-flex items-center gap-2"
          >
            <span>EXPLORE FULL PROJECT</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
