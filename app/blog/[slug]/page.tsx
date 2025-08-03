import { notFound } from "next/navigation";
import Link from "next/link";
import { getContentBySlug, getAllContent } from "../../../lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const blogPosts = getAllContent('blog');
  return blogPosts.map((slug) => ({
    slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const blogData = getContentBySlug('blog', slug);
  
  if (!blogData) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${blogData.metadata.title} | Blog`,
    description: blogData.metadata.excerpt || 'Blog post details and insights',
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const blogData = getContentBySlug('blog', slug);

  if (!blogData) {
    notFound();
  }

  const { metadata, content } = blogData;

  return (
    <div className="font-sans min-h-screen p-8 pb-20 sm:p-20">
      <main className="max-w-4xl mx-auto">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            ← Back to Blog
          </Link>
        </div>

        {/* Post Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{metadata.title}</h1>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
            <div className="flex items-center gap-4">
              <time dateTime={metadata.date}>
                {new Date(metadata.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              {metadata.author && (
                <span>by {metadata.author}</span>
              )}
            </div>
            {metadata.tags && metadata.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {metadata.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* Post Content */}
        <section className="prose dark:prose-invert max-w-none">
          <MDXRemote source={content} />
        </section>

        {/* Navigation to other posts */}
        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <Link
              href="/blog"
              className="text-blue-600 hover:underline"
            >
              ← All Posts
            </Link>
            <Link
              href="/contact"
              className="text-blue-600 hover:underline"
            >
              Want to discuss this post? →
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}