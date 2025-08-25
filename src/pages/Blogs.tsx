import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { formatDate, formatReadingTime } from "@/utils/blogParser";
import { BlogPost } from "@/types/blog";
import sampleBlogContent from "@/data/sampleBlog.md?raw";
import { parseBlogPost } from "@/utils/blogParser";

export default function Blogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    // In a real app, this would fetch from an API or file system
    const sampleBlog = parseBlogPost(sampleBlogContent, "pattern-matching-steroids");
    setBlogs([sampleBlog]);
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            All Articles
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Deep dives into algorithms, theory, and computational thinking
          </p>
        </header>

        <div className="space-y-8">
          {blogs.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No articles yet. Check back soon for algorithmic adventures!
              </p>
            </div>
          ) : (
            blogs.map((blog) => (
              <article
                key={blog.slug}
                className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent text-accent-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4 hover:text-primary transition-colors">
                  <Link to={`/blogs/${blog.slug}`}>
                    {blog.title}
                  </Link>
                </h2>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {blog.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    <span>By {blog.author}</span>
                    <span className="mx-2">•</span>
                    <span>{formatReadingTime(blog.reading_time)}</span>
                    <span className="mx-2">•</span>
                    <span>{formatDate(blog.date)}</span>
                  </div>
                  <Link
                    to={`/blogs/${blog.slug}`}
                    className="text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
}