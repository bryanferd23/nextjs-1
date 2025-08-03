import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getContentBySlug, getAllContent } from "../../../lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all projects
export async function generateStaticParams() {
  const projects = getAllContent('projects');
  return projects.map((slug) => ({
    slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectData = getContentBySlug('projects', slug);
  
  if (!projectData) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    };
  }

  return {
    title: `${projectData.metadata.title} | Projects`,
    description: projectData.metadata.description || 'Project details and information',
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectData = getContentBySlug('projects', slug);

  if (!projectData) {
    notFound();
  }

  const { metadata, content } = projectData;

  return (
    <div className="font-sans min-h-screen p-8 pb-20 sm:p-20">
      <main className="max-w-4xl mx-auto">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            ← Back to Projects
          </Link>
        </div>

        {/* Project Header */}
        <header className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-4">{metadata.title}</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                {metadata.description}
              </p>
              
              {/* Project Meta Info */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                {metadata.category && (
                  <span className="flex items-center gap-1">
                    📁 {metadata.category}
                  </span>
                )}
                {metadata.completedDate && (
                  <span className="flex items-center gap-1">
                    📅 {new Date(metadata.completedDate).toLocaleDateString()}
                  </span>
                )}
              </div>

              {/* Tech Stack */}
              {metadata.techStack && metadata.techStack.length > 0 && (
                <div className="mb-6">
                  <h2 className="text-lg font-semibold mb-3">Technologies Used</h2>
                  <div className="tech-stack">
                    {metadata.techStack.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Project Links */}
            <div className="flex flex-col gap-3 lg:min-w-[200px]">
              {metadata.liveUrl && (
                <a
                  href={metadata.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              )}
              {metadata.repoUrl && (
                <a
                  href={metadata.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  View Code
                </a>
              )}
            </div>
          </div>
        </header>

        {/* Project Images */}
        {metadata.images && metadata.images.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {metadata.images.map((image, index) => (
                <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={`${metadata.title} screenshot ${index + 1}`}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Project Content */}
        <section className="prose dark:prose-invert max-w-none">
          <MDXRemote source={content} />
        </section>

        {/* Navigation to other projects */}
        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <Link
              href="/projects"
              className="text-blue-600 hover:underline"
            >
              ← All Projects
            </Link>
            <Link
              href="/contact"
              className="text-blue-600 hover:underline"
            >
              Interested in working together? →
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
