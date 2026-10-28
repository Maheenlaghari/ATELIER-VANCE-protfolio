import Image from "next/image";
import { LoeweProjectDetail } from "@/types";

interface GalleryShowcaseProps {
  data: LoeweProjectDetail;
}

export function GalleryShowcase({ data }: GalleryShowcaseProps) {
  const fig2 = data.gallery.find((g) => g.figNumber === "FIG 02");
  const fig3 = data.gallery.find((g) => g.figNumber === "FIG 03");
  const fig4 = data.gallery.find((g) => g.figNumber === "FIG 04");
  const fig5 = data.gallery.find((g) => g.figNumber === "FIG 05");
  const fig6 = data.gallery.find((g) => g.figNumber === "FIG 06");
  const fig7 = data.gallery.find((g) => g.figNumber === "FIG 07");

  return (
    <section id="gallery" className="w-full px-4 sm:px-8 lg:px-12 py-10 space-y-12 bg-[#0e0e0e]">
      {fig2 && (
        <div className="w-full group">
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-stone-950 overflow-hidden border border-[#262626] group-hover:border-stone-600 transition-colors duration-500">
            <Image
              src={fig2.image}
              alt={fig2.title}
              fill
              sizes="100vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {fig2.badge && (
              <div className="absolute top-4 right-4 bg-black/85 backdrop-blur-sm border border-white/20 text-white font-mono-arch text-[10px] tracking-widest uppercase px-3 py-1 font-semibold">
                {fig2.badge}
              </div>
            )}
          </div>
          <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] font-mono-arch text-stone-400 uppercase tracking-wider gap-1">
            <span className="text-white font-medium">{fig2.figNumber} / {fig2.title}</span>
            <span>{fig2.subtitle}</span>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {fig3 && (
          <div className="group">
            <div className="relative w-full aspect-[3/4] bg-stone-950 overflow-hidden border border-[#262626] group-hover:border-stone-600 transition-colors duration-500">
              <Image
                src={fig3.image}
                alt={fig3.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {fig3.badge && (
                <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-sm border border-white/20 text-white font-mono-arch text-[10px] tracking-widest uppercase px-3 py-1">
                  {fig3.badge}
                </div>
              )}
            </div>
            <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] font-mono-arch text-stone-400 uppercase tracking-wider gap-1">
              <span className="text-white font-medium">{fig3.figNumber} / {fig3.title}</span>
              <span>{fig3.subtitle}</span>
            </div>
          </div>
        )}

        {fig4 && (
          <div className="group">
            <div className="relative w-full aspect-[3/4] bg-stone-950 overflow-hidden border border-[#262626] group-hover:border-stone-600 transition-colors duration-500">
              <Image
                src={fig4.image}
                alt={fig4.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {fig4.badge && (
                <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-sm border border-white/20 text-white font-mono-arch text-[10px] tracking-widest uppercase px-3 py-1">
                  {fig4.badge}
                </div>
              )}
            </div>
            <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] font-mono-arch text-stone-400 uppercase tracking-wider gap-1">
              <span className="text-white font-medium">{fig4.figNumber} / {fig4.title}</span>
              <span>{fig4.subtitle}</span>
            </div>
          </div>
        )}
      </div>

      {fig5 && (
        <div className="w-full group">
          <div className="relative w-full aspect-[16/8] sm:aspect-[21/8] bg-stone-950 overflow-hidden border border-[#262626] group-hover:border-stone-600 transition-colors duration-500">
            <Image
              src={fig5.image}
              alt={fig5.title}
              fill
              sizes="100vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {fig5.badge && (
              <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-sm border border-white/20 text-white font-mono-arch text-[10px] tracking-widest uppercase px-3 py-1 font-semibold">
                {fig5.badge}
              </div>
            )}
          </div>
          <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] font-mono-arch text-stone-400 uppercase tracking-wider gap-1">
            <span className="text-white font-medium">{fig5.figNumber} / {fig5.title}</span>
            <span>{fig5.subtitle}</span>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {fig6 && (
          <div className="group">
            <div className="relative w-full aspect-[3/4] bg-[#161616] p-6 sm:p-10 border border-[#262626] group-hover:border-stone-600 transition-colors duration-500 flex flex-col justify-between">
              <div className="relative w-full h-full bg-black overflow-hidden border border-[#333333]">
                <Image
                  src={fig6.image}
                  alt={fig6.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
            <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] font-mono-arch text-stone-400 uppercase tracking-wider gap-1">
              <span className="text-white font-medium">{fig6.figNumber} / {fig6.title}</span>
              <span>{fig6.subtitle}</span>
            </div>
          </div>
        )}

        {fig7 && (
          <div className="group">
            <div className="relative w-full aspect-[3/4] bg-[#161616] p-6 sm:p-10 border border-[#262626] group-hover:border-stone-600 transition-colors duration-500 flex flex-col justify-between">
              <div className="relative w-full h-full bg-black overflow-hidden border border-[#333333]">
                <Image
                  src={fig7.image}
                  alt={fig7.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
            <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] font-mono-arch text-stone-400 uppercase tracking-wider gap-1">
              <span className="text-white font-medium">{fig7.figNumber} / {fig7.title}</span>
              <span>{fig7.subtitle}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
