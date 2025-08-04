'use client';

import { useState } from 'react';
import { Project } from '../types/content';

interface ProjectFilterProps {
  projects: Project[];
  onFilterChange: (filteredProjects: Project[]) => void;
}

export default function ProjectFilter({ projects, onFilterChange }: ProjectFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTech, setSelectedTech] = useState<string>('all');

  // Get unique categories and technologies
  const categories = Array.from(new Set(projects.map(p => p.category).filter(Boolean)));
  const technologies = Array.from(new Set(projects.flatMap(p => p.techStack))).sort();

  const handleFilter = (category: string, tech: string) => {
    let filtered = projects;

    if (category !== 'all') {
      filtered = filtered.filter(project => project.category === category);
    }

    if (tech !== 'all') {
      filtered = filtered.filter(project => project.techStack.includes(tech));
    }

    onFilterChange(filtered);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    handleFilter(category, selectedTech);
  };

  const handleTechChange = (tech: string) => {
    setSelectedTech(tech);
    handleFilter(selectedCategory, tech);
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedTech('all');
    onFilterChange(projects);
  };

  return (
    <div className="mb-8 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="flex flex-col lg:flex-row lg:items-center gap-6">
        {/* Category Filter */}
        <div className="flex-1">
          <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Filter by Category
          </label>
          <select
            id="category-filter"
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            aria-label="Filter projects by category"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Technology Filter */}
        <div className="flex-1">
          <label htmlFor="tech-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Filter by Technology
          </label>
          <select
            id="tech-filter"
            value={selectedTech}
            onChange={(e) => handleTechChange(e.target.value)}
            aria-label="Filter projects by technology"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Technologies</option>
            {technologies.map((tech) => (
              <option key={tech} value={tech}>
                {tech}
              </option>
            ))}
          </select>
        </div>

        {/* Clear Filters Button */}
        <div className="flex-shrink-0">
          <label className="block text-sm font-medium text-transparent mb-2">Action</label>
          <button
            onClick={clearFilters}
            aria-label="Clear all project filters"
            className="px-4 py-2 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Clear Filters
          </button>
        </div>
      </div>

      {/* Active Filters Display */}
      {(selectedCategory !== 'all' || selectedTech !== 'all') && (
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">Active filters:</span>
          {selectedCategory !== 'all' && (
            <span className="inline-flex items-center gap-1 px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
              Category: {selectedCategory}
              <button
                onClick={() => handleCategoryChange('all')}
                aria-label={`Remove ${selectedCategory} category filter`}
                className="ml-1 hover:text-blue-900 dark:hover:text-blue-100"
              >
                ×
              </button>
            </span>
          )}
          {selectedTech !== 'all' && (
            <span className="inline-flex items-center gap-1 px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">
              Tech: {selectedTech}
              <button
                onClick={() => handleTechChange('all')}
                aria-label={`Remove ${selectedTech} technology filter`}
                className="ml-1 hover:text-purple-900 dark:hover:text-purple-100"
              >
                ×
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  );
}