import { LoeweProjectDetail } from "@/types";

interface StudioQuoteProps {
  data: LoeweProjectDetail;
}

export function StudioQuote({ data }: StudioQuoteProps) {
  const { studioPhilosophy } = data;

  return (
    <section className="w-full bg-black text-white px-4 sm:px-8 lg:px-12 py-20 lg:py-28 relative overflow-hidden">
      <div className="w-full max-w-5xl mx-auto space-y-8">
        <div className="font-mono-arch text-[11px] tracking-widest text-white uppercase font-semibold">
          {studioPhilosophy.label}
        </div>

        <blockquote className="text-xl sm:text-3xl lg:text-4xl font-normal leading-relaxed text-stone-100 tracking-tight">
          &ldquo;{studioPhilosophy.quote}&rdquo;
        </blockquote>

        <div className="pt-4 border-t border-[#222222] flex items-center justify-between font-mono-arch text-[11px] tracking-widest text-stone-500 uppercase">
          <span>{studioPhilosophy.attribution}</span>
        </div>
      </div>
    </section>
  );
}
