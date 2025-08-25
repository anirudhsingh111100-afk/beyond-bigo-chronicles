import matter from 'gray-matter';
import { BlogPost, BlogFrontmatter } from '@/types/blog';

export function parseBlogPost(content: string, slug: string): BlogPost {
  const { data, content: markdownContent } = matter(content);
  
  return {
    slug,
    layout: data.layout || 'post',
    title: data.title || '',
    date: data.date || '',
    author: data.author || '',
    excerpt: data.excerpt || '',
    tags: data.tags || [],
    reading_time: data.reading_time || 5,
    content: markdownContent,
  };
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatReadingTime(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} min read`;
  }
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes}m read`;
}