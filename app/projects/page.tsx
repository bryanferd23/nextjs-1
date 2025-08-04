import { getAllProjects } from "../../lib/content";
import ProjectsClient from "../../components/ProjectsClient";

export default function ProjectsPage() {
  const allProjects = getAllProjects();

  return (
    <div className="font-sans min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-5xl md:text-6xl heading-display text-gray-900 dark:text-white mb-8 text-balance">
            My Projects
          </h1>
          <p className="text-xl md:text-2xl body-large text-gray-600 dark:text-gray-400 max-w-4xl mx-auto mb-12 text-pretty">
            A collection of projects showcasing my expertise in full-stack development, 
            from web applications to mobile solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <span className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full shadow-md">
              {allProjects.length} Projects
            </span>
            <span className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full shadow-md">
              Multiple Technologies
            </span>
            <span className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full shadow-md">
              Open Source
            </span>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <ProjectsClient allProjects={allProjects} />
      </main>
    </div>
  );
}
