import Link from "next/link";
import { getAllProjects } from "../../lib/content";
import { Project } from "../../types/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my portfolio of web development projects built with React, Next.js, TypeScript, and other modern technologies. View live demos and source code.",
  openGraph: {
    title: "Projects - Web Development Portfolio",
    description: "Explore my portfolio of web development projects built with React, Next.js, TypeScript, and other modern technologies.",
  },
};

export default function ProjectsPage() {
  const allProjects = getAllProjects();

  // Get all unique technologies for display
  const allTechnologies = Array.from(
    new Set(
      allProjects.flatMap(project => project.techStack)
    )
  ).sort();

  return (
    <div className="font-sans min-h-screen p-8 pb-20 sm:p-20">
      <main className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects I&apos;ve worked on, showcasing various technologies and solutions.
          </p>
        </div>

        {/* Technology Tags (for display only) */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Technologies Used:</h2>
          <div className="flex flex-wrap gap-2">
            {allTechnologies.map((tech) => {
              const count = allProjects.filter(project => 
                project.techStack.includes(tech)
              ).length;
              return (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                >
                  {tech} ({count})
                </span>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        {allProjects.length > 0 ? (
          <div className="project-grid">
            {allProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No projects available yet. Check back soon!
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

// Project Card Component
function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project-card group">
      <div className="mb-4">
        <h3 className="group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          {project.category && `${project.category} • `}
          {project.completedDate && new Date(project.completedDate).toLocaleDateString()}
        </p>
        <p>{project.description}</p>
      </div>

      <div className="tech-stack mb-4">
        {project.techStack.map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              Live Demo
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              GitHub
            </a>
          )}
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="text-blue-600 hover:underline text-sm font-medium"
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
}
