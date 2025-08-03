import Image from "next/image";
import Link from "next/link";
import { getFeaturedProjects } from "../lib/content";
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
    <div className="font-sans min-h-screen p-8 pb-20 sm:p-20">
      <main className="flex flex-col items-center gap-10">
        <h1 className="text-4xl font-bold">Full-Stack Developer</h1>
        <p className="text-xl text-center max-w-prose">Crafting digital experiences with modern technologies and innovative solutions</p>
        <Image
          className="rounded-full"
          src="/next.svg"
          alt="Profile Picture"
          width={180}
          height={180}
          priority
        />

        <div className="flex gap-4">
          <Link
            className="cta-button"
            href="/projects"
          >
            Projects
          </Link>
          <a
            className="cta-button"
            href="/contact"
          >
            Contact
          </a>
          <a
            className="cta-button"
            href="/resume.pdf"
          >
            Resume
          </a>
        </div>

        <section className="featured-projects">
          <h2 className="text-3xl font-semibold">Featured Projects</h2>
          {featuredProjects.length > 0 ? (
            <div className="project-grid">
              {featuredProjects.map((project) => (
                <div key={project.slug} className="project-card">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-stack">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        GitHub
                      </a>
                    )}
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-blue-600 hover:underline"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600 dark:text-gray-400">
              No featured projects yet. Check back soon!
            </p>
          )}
        </section>
      </main>
    </div>
  );
}
