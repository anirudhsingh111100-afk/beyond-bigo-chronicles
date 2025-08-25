export interface BlogPost {
  slug: string;
  layout: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  tags: string[];
  reading_time: number;
  content: string;
}

export interface BlogFrontmatter {
  layout: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  tags: string[];
  reading_time: number;
}