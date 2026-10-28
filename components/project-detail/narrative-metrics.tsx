import { LoeweProjectDetail } from "@/types";

interface NarrativeMetricsProps {
  data: LoeweProjectDetail;
}

export function NarrativeMetrics({ data }: NarrativeMetricsProps) {
  const { architecturalCore } = data;

  return (
    <section className="w-full border-t border-b border-[#222222] bg-[#121212]">
      <div className="w-full px-4 sm:px-8 lg:px-12 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-5 space-y-6">
          <div className="font-mono-arch text-[11px] tracking-widest text-white uppercase font-semibold">
            {architecturalCore.sectionLabel}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-white leading-tight">
            {architecturalCore.title}
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm lg:text-[15px] leading-relaxed font-light">
            {architecturalCore.description}
          </p>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {architecturalCore.metrics.map((item) => (
            <div
              key={item.label}
              className="p-6 sm:p-8 bg-[#181818] border border-[#2a2a2a] hover:border-white transition-all duration-300 group"
            >
              <div className="font-mono-arch text-[10px] sm:text-[11px] tracking-widest text-stone-400 uppercase mb-4">
                {item.label}
              </div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-3 group-hover:scale-105 origin-left transition-transform duration-300">
                {item.value}
              </div>
              <p className="text-xs font-mono-arch text-stone-400 leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
