import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { Button } from "@/components/ui/button";
import { formatDate, formatReadingTime, parseBlogPost } from "@/utils/blogParser";
import { BlogPost as BlogPostType } from "@/types/blog";
import sampleBlogContent from "@/data/sampleBlog.md?raw";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would fetch the specific blog post
    if (slug === "pattern-matching-steroids") {
      const parsedBlog = parseBlogPost(sampleBlogContent, slug);
      setBlog(parsedBlog);
    } else {
      setBlog(null);
    }
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The article you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/blogs">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Articles
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/blogs">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Articles
            </Link>
          </Button>
        </div>

        <article>
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-6">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent text-accent-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {blog.title}
            </h1>
            
            <div className="flex items-center text-muted-foreground text-sm mb-6">
              <span>By {blog.author}</span>
              <span className="mx-2">•</span>
              <span>{formatReadingTime(blog.reading_time)}</span>
              <span className="mx-2">•</span>
              <span>{formatDate(blog.date)}</span>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              {blog.excerpt}
            </p>
          </header>

          <div className="prose max-w-none">
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => (
                  <h1 className="font-display text-3xl font-semibold mb-6 text-foreground">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="font-display text-2xl font-medium mb-4 text-foreground mt-12">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="font-display text-xl font-medium mb-3 text-foreground mt-8">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="mb-4 leading-relaxed text-foreground">
                    {children}
                  </p>
                ),
                code: ({ children, className }) => {
                  const isInline = !className;
                  if (isInline) {
                    return (
                      <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">
                        {children}
                      </code>
                    );
                  }
                  return (
                    <code className={className}>
                      {children}
                    </code>
                  );
                },
                pre: ({ children }) => (
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto my-6 border">
                    {children}
                  </pre>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground my-6">
                    {children}
                  </blockquote>
                ),
                ul: ({ children }) => (
                  <ul className="mb-4 pl-6 list-disc">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="mb-4 pl-6 list-decimal">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="mb-2">
                    {children}
                  </li>
                ),
                a: ({ children, href }) => (
                  <a
                    href={href}
                    className="text-primary underline decoration-1 underline-offset-2 hover:decoration-2 transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {blog.content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
}