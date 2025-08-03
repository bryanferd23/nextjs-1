"use client";

import { useState } from "react";
import { Project } from "../../types/content";

interface ProjectFilterProps {
  projects: Project[];
  onFilterChange: (filteredProjects: Project[]) => void;
}

export default function ProjectFilter({ projects, onFilterChange }: ProjectFilterProps) {
  const [selectedTech, setSelectedTech] = useState<string>("all");

  // Get all unique technologies
  const allTechnologies = Array.from(
    new Set(
      projects.flatMap(project => project.techStack)
    )
  ).sort();

  // Handle filter change
  const handleFilterChange = (tech: string) => {
    setSelectedTech(tech);
    if (tech === "all") {
      onFilterChange(projects);
    } else {
      const filtered = projects.filter(project => 
        project.techStack.includes(tech)
      );
      onFilterChange(filtered);
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-4">Filter by Technology:</h2>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handleFilterChange("all")}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
            selectedTech === "all"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
        >
          All ({projects.length})
        </button>
        {allTechnologies.map((tech) => {
          const count = projects.filter(project => 
            project.techStack.includes(tech)
          ).length;
          return (
            <button
              key={tech}
              onClick={() => handleFilterChange(tech)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedTech === tech
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {tech} ({count})
            </button>
          );
        })}
      </div>
    </div>
  );
}
