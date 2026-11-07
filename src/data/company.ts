export const COMPANY_INFO = {
  name: "Architect Hub Constructions",
  shortName: "Architect Hub",
  tagline: "Building Dreams. Creating Landmarks.",
  subtitle:
    "From thoughtful architectural planning to exceptional construction, we turn your vision into spaces built to inspire.",
  category: "Construction Company",
  phone: "+91 88580 56115",
  phoneRaw: "+918858056115",
  whatsappNumber: "918858056115",
  email: "archtechhub@gmail.com",
  address: "Tamkuhi Ward No. 1, Shastri Nagar, Bhatwaliya, Kushinagar, Uttar Pradesh – 274407, India.",
  workingHours: "Open 24 Hours",
  facebook: "Architect Hub",
  facebookUrl: "https://www.facebook.com/search/top?q=Architect%20Hub",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113942.3683645851!2d84.1500!3d26.6900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993a40dd8c3d919%3A0xb3551dbb6e22f872!2sTamkuhi%20Raj%2C%20Uttar%20Pradesh%20274407!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin",
  mapsSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=Architect+Hub+Constructions+Tamkuhi+Ward+No+1+Shastri+Nagar+Bhatwaliya+Kushinagar+Uttar+Pradesh+274407",
};

export const WHATSAPP_MESSAGES = {
  hero: "Hello Architect Hub Constructions! I visited your website and would like to know more about your construction services.",
  general: "Hello Architect Hub Constructions! I would like to inquire about your architectural and construction services.",
  service: (serviceName: string) =>
    `Hello Architect Hub Constructions! I am interested in your ${serviceName} services and would like to discuss my project requirements.`,
  quote: (details: {
    name: string;
    phone: string;
    email: string;
    service: string;
    location: string;
    description: string;
  }) =>
    `*Project Inquiry - Architect Hub Constructions*\n` +
    `--------------------------------------\n` +
    `*Client Name:* ${details.name}\n` +
    `*Phone:* ${details.phone}\n` +
    `*Email:* ${details.email || "Not provided"}\n` +
    `*Service Requested:* ${details.service}\n` +
    `*Project Location:* ${details.location}\n` +
    `*Project Details:* ${details.description}\n` +
    `--------------------------------------\n` +
    `Looking forward to your professional consultation.`,
};

export const getWhatsAppLink = (message: string) => {
  return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const SERVICES_LIST = [
  {
    id: "residential-construction",
    title: "Residential Construction",
    shortDesc:
      "Turnkey luxury homes, villas, and modern multi-family residences constructed with meticulous engineering and premium finishes.",
    fullDesc:
      "From foundation to final finishes, we construct bespoke residential spaces engineered to endure for generations with flawless craftsmanship.",
    icon: "Home",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Custom Luxury Residences",
      "Structural Engineering & RCC Framework",
      "End-to-End Material Procurement",
      "Strict Quality Control Inspections",
    ],
  },
  {
    id: "commercial-construction",
    title: "Commercial Construction",
    shortDesc:
      "High-performance commercial facilities, office buildings, retail spaces, and institutional structures built for modern business needs.",
    fullDesc:
      "Robust, scalable commercial buildings engineered for functionality, durability, and distinguished brand presence in Kushinagar and beyond.",
    icon: "Building2",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Retail & Corporate Complex Builds",
      "Advanced Structural Steel & Concrete",
      "Compliance & Safety Management",
      "Timely Turnaround & Milestone Tracking",
    ],
  },
  {
    id: "architectural-planning",
    title: "Architectural Planning",
    shortDesc:
      "Comprehensive architectural blueprints, 2D/3D elevations, Vastu-compliant layouts, and structural master planning.",
    fullDesc:
      "Thoughtful architectural blueprints that blend spatial elegance, climatic orientation, and structural viability tailored to your site.",
    icon: "Compass",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    features: [
      "2D Floor Plans & Working Drawings",
      "Photorealistic 3D Elevations & Renderings",
      "Vastu-Aligned Space Planning",
      "Municipal Approval Assistance",
    ],
  },
  {
    id: "interior-design",
    title: "Interior Design",
    shortDesc:
      "Sophisticated interior architecture, custom cabinetry, ambient lighting schemes, and luxury material selection.",
    fullDesc:
      "Tailored interiors that balance warmth, modern minimalism, and ergonomic luxury for residential and commercial environments.",
    icon: "Palette",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Spatial Layout & Furniture Planning",
      "Custom Joinery & Millwork Design",
      "Architectural Lighting Systems",
      "Curated Material & Finish Palettes",
    ],
  },
  {
    id: "building-renovation",
    title: "Building Renovation",
    shortDesc:
      "Structural retrofitting, modern facade transformations, space remodeling, and comprehensive building restoration.",
    fullDesc:
      "Revitalizing existing structures into contemporary architectural landmarks with structural reinforcement and modern aesthetic overhauls.",
    icon: "Wrench",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Exterior Facade Modernization",
      "Structural Reinforcement & Repair",
      "Interior Space Re-engineering",
      "Energy Efficiency Upgrades",
    ],
  },
  {
    id: "project-consultation",
    title: "Project Consultation",
    shortDesc:
      "Pre-construction feasibility analysis, detailed cost estimation, site inspections, and strategic technical advisory.",
    fullDesc:
      "Objective, experienced construction guidance helping you make informed decisions on budget, timeline, structural methods, and permits.",
    icon: "ClipboardCheck",
    image:
      "https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Site Evaluation & Soil Assessment",
      "Detailed Bill of Quantities (BOQ)",
      "Vendor & Material Vetting",
      "Construction Phasing Roadmaps",
    ],
  },
];

export const FEATURED_PROJECTS = [
  {
    id: "project-1",
    title: "The Grand Horizon Villa",
    category: "Residential Architecture",
    tag: "Luxury Villa",
    location: "Kushinagar Region",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    description: "Contemporary cantilevered residence featuring expansive glazing, natural stone facades, and seamless indoor-outdoor living.",
  },
  {
    id: "project-2",
    title: "Aura Commercial Plaza",
    category: "Commercial Construction",
    tag: "Commercial",
    location: "Regional District",
    image:
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80",
    description: "Multi-level commercial complex with energy-efficient glass curtain walls and reinforced concrete structural framework.",
  },
  {
    id: "project-3",
    title: "Zenith Contemporary Residence",
    category: "Residential Architecture",
    tag: "Modern Residential",
    location: "Uttar Pradesh",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    description: "Geometric luxury home balancing warm teak accents, raw concrete surfaces, and shaded terrace pavilions.",
  },
  {
    id: "project-4",
    title: "The Imperial Corporate Hub",
    category: "Commercial Construction",
    tag: "Commercial",
    location: "Commercial Enclave",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    description: "Iconic corporate headquarters featuring sleek vertical louvers and high-capacity floorplates.",
  },
  {
    id: "project-5",
    title: "Serenade Luxury Manor",
    category: "Residential Architecture",
    tag: "Luxury Villa",
    location: "Private Estate",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    description: "Timeless contemporary estate incorporating passive solar design, dramatic double-height foyer, and landscaped courtyards.",
  },
  {
    id: "project-6",
    title: "Atelier Spatial Interior",
    category: "Interior Design & Planning",
    tag: "Contemporary Design",
    location: "Residential Suite",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    description: "Harmonious minimalist interior featuring custom acoustic wall paneling, Italian marble accents, and hidden architectural lighting.",
  },
];

export const WHY_CHOOSE_US_POINTS = [
  {
    number: "01",
    title: "Quality-Focused Approach",
    description:
      "We source tested, high-grade construction materials and enforce rigorous structural standards at every phase of the build, ensuring enduring longevity.",
    icon: "ShieldCheck",
  },
  {
    number: "02",
    title: "Professional Planning",
    description:
      "Every project begins with comprehensive architectural blueprints, precise 3D visualization, clear milestone schedules, and meticulous cost estimation.",
    icon: "DraftingCompass",
  },
  {
    number: "03",
    title: "Attention to Detail",
    description:
      "From foundation alignment to finishing tile joints and electrical conduit layout, our seasoned supervisors inspect every millimeter with obsessive care.",
    icon: "Ruler",
  },
  {
    number: "04",
    title: "Customer-Centric Execution",
    description:
      "Transparent communication, open 24-hour responsiveness, milestone reports, and dedicated attention ensure your expectations are exceeded without surprise delays.",
    icon: "UsersCheck",
  },
];
