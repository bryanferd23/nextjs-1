'use client';

import { useState } from "react";
import { Project } from "../types/content";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";
import FadeInUp from "./animations/FadeInUp";
import StaggerContainer from "./animations/StaggerContainer";

interface ProjectsClientProps {
  allProjects: Project[];
}

export default function ProjectsClient({ allProjects }: ProjectsClientProps) {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(allProjects);
  
  // Featured projects (first 3 with featured flag or first 3)
  const featuredProjects = allProjects.filter(p => p.featured).slice(0, 3);
  const displayFeatured = featuredProjects.length > 0 ? featuredProjects : allProjects.slice(0, 3);

  const handleFilterChange = (projects: Project[]) => {
    setFilteredProjects(projects);
  };

  return (
    <>
      {/* Featured Projects Section */}
      {displayFeatured.length > 0 && (
        <section className="mb-16">
          <FadeInUp>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Highlighting some of my best work and most impactful solutions
              </p>
            </div>
          </FadeInUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayFeatured.map((project, index) => (
              <FadeInUp key={`featured-${project.slug}`} delay={index * 0.1}>
                <ProjectCard project={project} />
              </FadeInUp>
            ))}
          </StaggerContainer>
        </section>
      )}

      {/* All Projects Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">All Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Browse through my complete portfolio of work
          </p>
        </div>

        {/* Project Filter */}
        {allProjects.length > 0 && (
          <ProjectFilter 
            projects={allProjects} 
            onFilterChange={handleFilterChange}
          />
        )}

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <FadeInUp key={project.slug} delay={index * 0.1}>
                <ProjectCard project={project} />
              </FadeInUp>
            ))}
          </StaggerContainer>
        ) : allProjects.length > 0 ? (
          <div className="text-center py-12">
            <div className="mb-4">
              <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No projects match your filters</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Try adjusting your filters or browse all projects.
            </p>
            <button
              onClick={() => setFilteredProjects(allProjects)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Show All Projects
            </button>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="mb-4">
              <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No projects available yet</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Check back soon for new projects and updates!
            </p>
          </div>
        )}
      </section>
    </>
  );
}