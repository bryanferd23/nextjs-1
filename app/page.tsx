import Link from "next/link";
import { getFeaturedProjects } from "../lib/content";
import HeroSection from "../components/HeroSection";
import PageTransition from "../components/animations/PageTransition";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Ferdz Portfolio - Full-Stack Developer crafting digital experiences with modern technologies and innovative solutions. Specializing in PHP, Laravel, JavaScript, and more.",
  openGraph: {
    title: "Ferdz Portfolio - Full-Stack Developer",
    description: "Full-Stack Developer crafting digital experiences with modern technologies and innovative solutions. Specializing in PHP, Laravel, JavaScript, and more.",
  },
};

export default function Home() {
  const featuredProjects = getFeaturedProjects(3);
  return (
    <PageTransition className="font-sans">
      <HeroSection />
      
      <main className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <section className="featured-projects">
          <div className="text-center mb-16">
            <h2 className="text-4xl heading-display text-gray-900 dark:text-white mb-6 text-balance">Featured Projects</h2>
            <p className="text-xl body-large text-gray-600 dark:text-gray-400 text-balance">A showcase of my recent work and achievements</p>
          </div>
          
          {featuredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {featuredProjects.map((project) => (
                <div key={project.slug} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                        >
                          Live Demo
                        </a>
                      )}
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                        >
                          GitHub
                        </a>
                      )}
                      <Link
                        href={`/projects/${project.slug}`}
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 dark:text-gray-400">
                No featured projects yet. Check back soon!
              </p>
            </div>
          )}
        </section>
      </main>
    </PageTransition>
  );
}
