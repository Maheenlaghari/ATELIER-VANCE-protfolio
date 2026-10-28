export interface NavLink {
  label: string;
  href: string;
  badge?: string;
}

export interface GalleryItem {
  id: string;
  figNumber: string;
  title: string;
  subtitle: string;
  image: string;
  badge?: string;
  layout: "full" | "half" | "third";
}

export interface MetricItem {
  label: string;
  value: string;
  detail: string;
}

export interface LoeweProjectDetail {
  id: string;
  slug: string;
  catalogueCode: string;
  categoryBadge: string;
  title: string;
  galleryName: string;
  heroDescription: string;
  heroImage: string;
  fieldReportLabel: string;
  fieldReportText: string;
  client: string;
  timeline: string;
  services: string[];
  locationStatus: string;
  creativeDirection: string;
  specifications: string[];
  gallery: GalleryItem[];
  architecturalCore: {
    sectionLabel: string;
    title: string;
    description: string;
    metrics: MetricItem[];
  };
  studioPhilosophy: {
    label: string;
    quote: string;
    attribution: string;
  };
  nextProject: {
    badge: string;
    location: string;
    title: string;
    description: string;
    href: string;
  };
}

export interface ArchiveProject {
  id: string;
  number: string;
  title: string;
  client: string;
  year: string;
  discipline: "Spatial" | "Identity" | "Editorial" | "Light";
  location: string;
  status: string;
  image: string;
  slug: string;
}

export interface RecognitionItem {
  year: string;
  award: string;
  organization: string;
  location: string;
  actionLabel: string;
}

export interface PracticeMetric {
  title: string;
  value: string;
  description: string;
}

export interface ProfileData {
  name: string;
  title: string;
  subtitle: string;
  portrait: string;
  portraitBadge: string;
  quote: string;
  audioEssay: {
    title: string;
    duration: string;
  };
  practiceSummary: PracticeMetric[];
  recognitions: RecognitionItem[];
}
