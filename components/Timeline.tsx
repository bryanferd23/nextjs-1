'use client';

import { useState } from 'react';

interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'work' | 'education' | 'certification';
  skills?: string[];
  current?: boolean;
}

const timelineData: TimelineItem[] = [
  {
    id: '1',
    title: 'Full Stack Web Developer',
    organization: 'Cloudesk Pty Ltd',
    period: '2021 - Present',
    description: 'Leading full-stack development projects, working with PHP, Laravel, JavaScript, and modern web technologies. Collaborating with clients to deliver scalable solutions and maintaining high-performance applications.',
    type: 'work',
    skills: ['PHP', 'Laravel', 'JavaScript', 'React', 'MySQL', 'Git'],
    current: true
  },
  {
    id: '2',
    title: 'AI Model Training Specialist',
    organization: 'Outlier',
    period: '2023 - 2024',
    description: 'Specialized in training and fine-tuning AI models, contributing to machine learning projects and improving model accuracy through data analysis and optimization techniques.',
    type: 'work',
    skills: ['Machine Learning', 'Python', 'Data Analysis', 'AI Training']
  },
  {
    id: '3',
    title: 'Computer Programming Certification',
    organization: 'Department of Information and Communications Technology',
    period: '2020',
    description: 'Comprehensive certification program covering programming fundamentals, software development principles, and modern development practices.',
    type: 'certification',
    skills: ['Programming Fundamentals', 'Software Development', 'Best Practices']
  },
  {
    id: '4',
    title: 'EDP Specialist Certification',
    organization: 'Civil Service Commission',
    period: '2020',
    description: 'Electronic Data Processing specialist certification focusing on system analysis, database management, and technical problem-solving.',
    type: 'certification',
    skills: ['System Analysis', 'Database Management', 'Technical Support']
  },
  {
    id: '5',
    title: 'TEFL Certification',
    organization: 'TEFL Academy',
    period: '2019',
    description: 'Teaching English as a Foreign Language certification, developing communication skills and educational methodologies.',
    type: 'certification',
    skills: ['Communication', 'Teaching', 'Educational Methods']
  }
];

export default function Timeline() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'work' | 'education' | 'certification'>('all');
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const filteredData = activeFilter === 'all' 
    ? timelineData 
    : timelineData.filter(item => item.type === activeFilter);

  const getItemIcon = (type: string) => {
    switch (type) {
      case 'work':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6.294a2 2 0 01-1.255 1.849c-2.226.616-4.56.94-6.745.94s-4.519-.324-6.745-.94A2 2 0 013 14.294V8a2 2 0 012-2v0" />
          </svg>
        );
      case 'education':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
        );
      case 'certification':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getItemColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'bg-blue-600 text-white';
      case 'education':
        return 'bg-green-600 text-white';
      case 'certification':
        return 'bg-purple-600 text-white';
      default:
        return 'bg-gray-600 text-white';
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            A timeline of my career milestones, education, and professional achievements
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { key: 'all', label: 'All', count: timelineData.length },
              { key: 'work', label: 'Work Experience', count: timelineData.filter(item => item.type === 'work').length },
              { key: 'certification', label: 'Certifications', count: timelineData.filter(item => item.type === 'certification').length }
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key as 'all' | 'work' | 'education')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 dark:bg-gray-700"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {filteredData.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline Point */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-12 h-12 rounded-full ${getItemColor(item.type)} flex items-center justify-center shadow-lg`}>
                    {getItemIcon(item.type)}
                  </div>
                  {item.current && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>

                {/* Content Card */}
                <div
                  className={`w-full max-w-md ${
                    index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'
                  }`}
                >
                  <div
                    className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 cursor-pointer transition-all duration-300 hover:shadow-xl ${
                      activeItem === item.id ? 'ring-2 ring-blue-500' : ''
                    }`}
                    onClick={() => setActiveItem(activeItem === item.id ? null : item.id)}
                  >
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                          item.type === 'work' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                          item.type === 'education' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                          'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                        }`}>
                          {item.type === 'work' ? 'Work' : item.type === 'education' ? 'Education' : 'Certification'}
                        </span>
                        {item.current && (
                          <span className="px-2 py-1 text-xs font-semibold bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                        {item.organization}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                        {item.period}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {item.description}
                    </p>

                    {/* Skills */}
                    {item.skills && item.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Expand Indicator */}
                    <div className="mt-4 flex justify-center">
                      <svg
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                          activeItem === item.id ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Resume CTA */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Want the Complete Picture?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Download my detailed resume for a comprehensive overview of my experience and skills.
            </p>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}