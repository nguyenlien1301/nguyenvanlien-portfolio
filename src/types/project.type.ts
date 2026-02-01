export interface Project {
  id: number;
  title: string;
  heading?: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
}
