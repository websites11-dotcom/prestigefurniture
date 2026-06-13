export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  longDescription: string;
  benefits: string[];
}

export interface ProductItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  materials: string[];
  features: string[];
  priceRange: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  aspectRatio: "portrait" | "landscape" | "square";
  beforeUrl?: string; // Optional for before/after comparison
  description?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  rating: number;
  text: string;
  projectType: string;
  date: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}
