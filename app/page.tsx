import { loeweProjectData } from "@/data/loewe-project";
import { HeroBanner } from "@/components/project-detail/hero-banner";
import { FieldReport } from "@/components/project-detail/field-report";
import { GalleryShowcase } from "@/components/project-detail/gallery-showcase";
import { NarrativeMetrics } from "@/components/project-detail/narrative-metrics";
import { StudioQuote } from "@/components/project-detail/studio-quote";
import { NextProjectCard } from "@/components/project-detail/next-project-card";

export const metadata = {
  title: "Loewe Paris Project Detail | Atelier Vance",
  description: "Visual identity and brutalist spatial design for Parisian luxury house Loewe by Atelier Vance.",
};

export default function LoeweProjectPage() {
  return (
    <article className="w-full min-h-screen">
      <HeroBanner data={loeweProjectData} />
      <FieldReport data={loeweProjectData} />
      <GalleryShowcase data={loeweProjectData} />
      <NarrativeMetrics data={loeweProjectData} />
      <StudioQuote data={loeweProjectData} />
      <NextProjectCard data={loeweProjectData} />
    </article>
  );
}
