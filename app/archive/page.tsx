import { archiveProjectsData } from "@/data/archive-data";
import { ArchiveView } from "@/components/archive/archive-view";

export const metadata = {
  title: "Index and Archive | Atelier Vance",
  description: "Complete catalogue of spatial, brand identity, and architectural monographs from 2018 to 2024.",
};

export default function ArchivePage() {
  return (
    <main className="w-full min-h-screen">
      <ArchiveView initialProjects={archiveProjectsData} />
    </main>
  );
}
