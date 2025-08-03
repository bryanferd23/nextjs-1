export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags?: string[];
  author?: string;
  featured?: boolean;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  images: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  category?: string;
  completedDate?: string;
}

export interface ContentMetadata {
  title: string;
  date: string;
  excerpt?: string;
  tags?: string[];
  featured?: boolean;
  author?: string;
  // Project specific
  description?: string;
  techStack?: string[];
  images?: string[];
  liveUrl?: string;
  repoUrl?: string;
  category?: string;
  completedDate?: string;
}
