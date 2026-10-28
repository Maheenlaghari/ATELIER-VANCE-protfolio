import { LoeweProjectDetail } from "@/types";
import { ArrowDown } from "lucide-react";

interface FieldReportProps {
  data: LoeweProjectDetail;
}

export function FieldReport({ data }: FieldReportProps) {
  return (
    <section className="w-full border-b border-[#222222] bg-[#121212]">
      <div className="w-full px-4 sm:px-8 lg:px-12 py-12 lg:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
        <div className="md:col-span-5 space-y-4">
          <div className="font-mono-arch text-[11px] tracking-widest text-white uppercase font-semibold">
            {data.fieldReportLabel}
          </div>
          <p className="text-stone-300 text-xs sm:text-sm lg:text-[15px] leading-relaxed font-light">
            {data.fieldReportText}
          </p>
          <div className="pt-2">
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 font-mono-arch text-[11px] tracking-widest uppercase text-white hover:text-stone-300 transition-colors font-semibold group"
            >
              <span>FULL STORY ARCHIVE</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        <div className="md:col-span-3 space-y-6 text-xs font-mono-arch border-t md:border-t-0 md:border-l border-[#262626] pt-6 md:pt-0 md:pl-8">
          <div>
            <div className="text-stone-500 text-[10px] tracking-widest uppercase mb-1">
              CLIENT
            </div>
            <div className="text-white font-semibold">{data.client}</div>
          </div>

          <div>
            <div className="text-stone-500 text-[10px] tracking-widest uppercase mb-1">
              TIMELINE 2024
            </div>
            <div className="text-stone-300">{data.timeline}</div>
          </div>

          <div>
            <div className="text-stone-500 text-[10px] tracking-widest uppercase mb-1">
              SERVICES INVOLVED
            </div>
            <div className="text-stone-300 leading-relaxed">
              {data.services.join(", ")}
            </div>
          </div>
        </div>

        <div className="md:col-span-4 space-y-6 text-xs font-mono-arch border-t md:border-t-0 md:border-l border-[#262626] pt-6 md:pt-0 md:pl-8">
          <div>
            <div className="text-stone-500 text-[10px] tracking-widest uppercase mb-1">
              LOCATION & STATUS
            </div>
            <div className="text-stone-300">{data.locationStatus}</div>
          </div>

          <div>
            <div className="text-stone-500 text-[10px] tracking-widest uppercase mb-1">
              CREATIVE DIRECTION
            </div>
            <div className="text-white font-semibold">{data.creativeDirection}</div>
          </div>

          <div>
            <div className="text-stone-500 text-[10px] tracking-widest uppercase mb-1">
              PHYSICAL SPECIFICATIONS
            </div>
            <div className="space-y-1 text-stone-300">
              {data.specifications.map((spec) => (
                <div key={spec}>{spec}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
