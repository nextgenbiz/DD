export type ProjectCategory =
  | "residential"
  | "commercial"
  | "apartment"
  | "interior";

export type Project = {
  slug: string;
  title: string;
  location: string;
  category: ProjectCategory;
  image: string;
  description: string;
  client: string;
  area: string;
  duration: string;
  status: string;
};

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  residential: "Residential",
  commercial: "Commercial",
  apartment: "Apartment Buildings",
  interior: "Interior Design",
};

export const PROJECTS: Project[] = [
  {
    slug: "modern-villa",
    title: "Modern Villa",
    location: "Chennai, Tamil Nadu",
    category: "residential",
    image: "https://picsum.photos/seed/dd-modern-villa/900/700",
    description:
      "A contemporary villa designed around clean lines, floor-to-ceiling glazing, and a warm material palette that blurs the line between indoor and outdoor living.",
    client: "Private Residence",
    area: "6,200 sq. ft.",
    duration: "14 months",
    status: "Completed",
  },
  {
    slug: "corporate-office-building",
    title: "Corporate Office Building",
    location: "Bangalore, Karnataka",
    category: "commercial",
    image: "https://picsum.photos/seed/dd-corporate-office/900/700",
    description:
      "A five-storey glass-fronted office building engineered for flexible floor plates, natural daylighting, and energy-efficient façade performance.",
    client: "Nexora Technologies",
    area: "82,000 sq. ft.",
    duration: "22 months",
    status: "Completed",
  },
  {
    slug: "skyline-heights",
    title: "Skyline Heights",
    location: "Hyderabad, Telangana",
    category: "apartment",
    image: "https://picsum.photos/seed/dd-skyline-heights/900/700",
    description:
      "A gated residential apartment complex comprising multiple towers, landscaped courtyards, and resident amenities built for long-term community living.",
    client: "Skyline Developers",
    area: "3,10,000 sq. ft.",
    duration: "36 months",
    status: "Completed",
  },
  {
    slug: "luxury-living-room",
    title: "Luxury Living Room",
    location: "Mumbai, Maharashtra",
    category: "interior",
    image: "https://picsum.photos/seed/dd-luxury-living/900/700",
    description:
      "A full interior fit-out for a premium residence, featuring custom joinery, layered lighting, and a neutral palette designed for quiet, elevated comfort.",
    client: "Private Residence",
    area: "1,800 sq. ft.",
    duration: "5 months",
    status: "Completed",
  },
  {
    slug: "elegant-house",
    title: "Elegant House",
    location: "Coimbatore, Tamil Nadu",
    category: "residential",
    image: "https://picsum.photos/seed/dd-elegant-house/900/700",
    description:
      "A two-storey family home balancing solid masonry volumes with generous glazing, set within a landscaped garden and private driveway.",
    client: "Private Residence",
    area: "4,500 sq. ft.",
    duration: "12 months",
    status: "Completed",
  },
  {
    slug: "retail-complex",
    title: "Retail Complex",
    location: "Pune, Maharashtra",
    category: "commercial",
    image: "https://picsum.photos/seed/dd-retail-complex/900/700",
    description:
      "A mixed-use retail complex with ground-floor storefronts and upper-floor commercial space, built around a bright central façade and clear pedestrian access.",
    client: "Horizon Retail Group",
    area: "58,000 sq. ft.",
    duration: "18 months",
    status: "Completed",
  },
];
