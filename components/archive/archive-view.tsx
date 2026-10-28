"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArchiveProject } from "@/types";
import { Search, ArrowUpRight, Grid, List } from "lucide-react";

interface ArchiveViewProps {
  initialProjects: ArchiveProject[];
}

export function ArchiveView({ initialProjects }: ArchiveViewProps) {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"table" | "grid">("table");

  const categories = ["ALL", "SPATIAL", "IDENTITY", "EDITORIAL", "LIGHT"];

  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      const matchesCategory =
        activeCategory === "ALL" ||
        project.discipline.toUpperCase() === activeCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.client.toLowerCase().includes(query) ||
        project.location.toLowerCase().includes(query) ||
        project.year.includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [initialProjects, activeCategory, searchQuery]);

  return (
    <div className="w-full text-white bg-[#0e0e0e]">
      <div className="w-full px-4 sm:px-8 lg:px-12 py-12 lg:py-16 border-b border-[#222222] bg-[#121212]">
        <div className="font-mono-arch text-[11px] tracking-widest text-stone-400 uppercase font-semibold mb-3">
          PROJECT DIRECTORY / 2018 TO 2024
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white mb-4">
          INDEX & ARCHIVE
        </h1>
        <p className="text-stone-300 text-xs sm:text-sm lg:text-base max-w-3xl leading-relaxed font-light">
          Search and explore our full collection of spatial, brand, and architectural projects from 2018 to 2024. Filter by category, client, or year.
        </p>

        <div className="mt-10 flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-6 border-t border-[#262626]">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                type="button"
                className={`font-mono-arch text-xs tracking-wider uppercase px-4 py-2 transition-colors cursor-pointer border ${
                  activeCategory === cat
                    ? "bg-[#252525] text-white border-white font-semibold"
                    : "bg-[#161616] text-stone-400 border-[#2e2e2e] hover:border-white hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search project or client..."
                className="w-full pl-9 pr-3 py-2 text-xs font-mono-arch border border-[#2e2e2e] bg-[#161616] text-white placeholder-stone-500 focus:outline-none focus:border-white"
              />
            </div>

            <div className="flex items-center border border-[#2e2e2e] bg-[#161616]">
              <button
                onClick={() => setViewMode("table")}
                type="button"
                className={`p-2 transition-colors ${
                  viewMode === "table" ? "bg-white text-black" : "text-stone-400 hover:text-white"
                }`}
                aria-label="Table view"
              >
                <List className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("grid")}
                type="button"
                className={`p-2 transition-colors ${
                  viewMode === "grid" ? "bg-white text-black" : "text-stone-400 hover:text-white"
                }`}
                aria-label="Grid view"
              >
                <Grid className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-8 lg:px-12 py-10 bg-[#0e0e0e]">
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center font-mono-arch text-xs text-stone-500 uppercase">
            NO PROJECTS MATCH SELECTED FILTERS
          </div>
        ) : viewMode === "table" ? (
          <div className="overflow-x-auto border border-[#262626] bg-[#121212]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#262626] bg-[#181818] text-[10px] font-mono-arch tracking-widest text-stone-400 uppercase">
                  <th className="py-3 px-4 font-semibold">NO</th>
                  <th className="py-3 px-4 font-semibold">PROJECT TITLE</th>
                  <th className="py-3 px-4 font-semibold">CLIENT</th>
                  <th className="py-3 px-4 font-semibold">YEAR</th>
                  <th className="py-3 px-4 font-semibold">DISCIPLINE</th>
                  <th className="py-3 px-4 font-semibold">LOCATION</th>
                  <th className="py-3 px-4 font-semibold">STATUS</th>
                  <th className="py-3 px-4 font-semibold text-right">DOSSIER</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#202020] font-mono-arch text-xs">
                {filteredProjects.map((project) => (
                  <tr
                    key={project.id}
                    className="hover:bg-[#1c1c1c] transition-colors group cursor-pointer"
                  >
                    <td className="py-4 px-4 text-stone-500 font-mono-arch text-[11px]">
                      {project.number}
                    </td>
                    <td className="py-4 px-4 font-sans font-bold uppercase text-white group-hover:text-stone-300 transition-colors">
                      <Link href={project.slug} className="block">
                        {project.title}
                      </Link>
                    </td>
                    <td className="py-4 px-4 text-stone-400">{project.client}</td>
                    <td className="py-4 px-4 text-stone-400">{project.year}</td>
                    <td className="py-4 px-4">
                      <span className="inline-block px-2 py-0.5 text-[10px] bg-[#1a1a1a] text-stone-300 border border-[#2e2e2e] uppercase">
                        {project.discipline}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-stone-400">{project.location}</td>
                    <td className="py-4 px-4">
                      <span className="text-[10px] text-white uppercase font-semibold">
                        {project.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <Link
                        href={project.slug}
                        className="inline-flex items-center gap-1 text-[11px] text-white hover:underline font-semibold"
                      >
                        <span>VIEW</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                href={project.slug}
                className="group block bg-[#141414] border border-[#262626] hover:border-white transition-all overflow-hidden"
              >
                <div className="relative w-full aspect-[4/3] bg-stone-950 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black/85 text-white font-mono-arch text-[10px] tracking-wider px-2 py-0.5 uppercase border border-white/20">
                    {project.number} / {project.year}
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <div className="text-[10px] font-mono-arch text-stone-400 uppercase font-semibold">
                    {project.discipline} / {project.location}
                  </div>
                  <h3 className="text-base font-bold uppercase tracking-tight text-white group-hover:text-stone-300 transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-xs font-mono-arch text-stone-500">
                    {project.client}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-16 bg-[#121212] text-white p-6 sm:p-10 border border-[#262626] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="font-mono-arch text-[10px] tracking-widest text-stone-400 uppercase">
              FEATURED MONOGRAPH / 01 2024
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white leading-tight">
              VISUAL IDENTITY FOR PARIS FASHION HOUSE LOEWE
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed max-w-xl">
              Comprehensive spatial and identity redesign for Loewe Paris combining raw brutalist architecture with artisanal nuances.
            </p>
            <div className="pt-2">
              <Link
                href="/"
                className="bg-[#1f1f1f] border border-[#383838] hover:border-white hover:bg-[#282828] text-white font-mono-arch text-xs tracking-widest uppercase px-6 py-3 transition-colors inline-flex items-center gap-2 font-semibold"
              >
                <span>VIEW PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[16/10] bg-stone-950 border border-[#333333] overflow-hidden">
            <Image
              src="/assets/hero-loewe.png"
              alt="Loewe Paris Monograph"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
