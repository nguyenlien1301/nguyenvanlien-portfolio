export interface Project {
  id: number;
  key: string;
  title?: string;
  heading?: string;
  description?: string;
  videoUrl?: string;
  category?: string;
  demoVideoUrl?: string;
  fullDescription?: string;
  image: string;
  tech: string[];
  github?: string;
  featured: boolean;
  demo?: string;
  createdAt: string;
}
