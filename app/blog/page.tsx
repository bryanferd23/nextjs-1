import Link from "next/link";
import { getAllBlogPosts } from "../../lib/content";
import { BlogPost } from "../../types/content";
import type { Metadata } from "next";
import HoverCard from "../../components/animations/HoverCard";
import LinkHover from "../../components/animations/LinkHover";
import FadeInUp from "../../components/animations/FadeInUp";

export const metadata: Metadata = {
  title: "Blog",
  description: "Explore my thoughts and experiences on web development, programming, and technology. Read articles about React, Next.js, TypeScript, and modern web development practices.",
  openGraph: {
    title: "Blog - Web Development Insights",
    description: "Explore my thoughts and experiences on web development, programming, and technology. Articles about React, Next.js, TypeScript, and more.",
  },
};

export default function BlogPage() {
  const blogPosts = getAllBlogPosts();

  return (
    <div className="font-sans min-h-screen p-8 pb-20 sm:p-20">
      <main className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my thoughts and experiences on web development, programming,
            and technology.
          </p>
        </div>

        {blogPosts.length > 0 ? (
          <div className="blog-posts-list grid gap-8">
            {blogPosts.map((post, index) => (
              <FadeInUp key={post.slug} delay={index * 0.1}>
                <BlogPostCard post={post} />
              </FadeInUp>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No blog posts available yet. Check back soon!
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

// Blog Post Card Component
function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <HoverCard className="blog-post-card border border-gray-200 dark:border-gray-700 rounded-lg p-6">
      <header className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">
          <Link href={`/blog/${post.slug}`}>
            <LinkHover className="text-gray-900 dark:text-gray-100">
              {post.title}
            </LinkHover>
          </Link>
        </h2>
        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          {post.author && (
            <span>by {post.author}</span>
          )}
        </div>
      </header>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
        {post.excerpt}
      </p>
      
      {post.tags && post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
      
      <footer className="flex justify-between items-center">
        <Link
          href={`/blog/${post.slug}`}
          className="text-sm font-medium inline-flex items-center gap-1"
        >
          <LinkHover className="text-blue-600">
            Read More 
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </LinkHover>
        </Link>
      </footer>
    </HoverCard>
  );
}
