'use client';

import { useState } from 'react';
import Image from 'next/image';
import { trackResumeView } from './Analytics';

const technicalSkills = {
  "Frontend": ["React", "Next.js", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind", "Bootstrap"],
  "Backend": ["PHP", "Laravel", "Node.js", "Python", "MySQL", "PostgreSQL"],
  "Mobile": ["React Native", "Expo", "Android", "iOS"],
  "Tools": ["Git", "Docker", "AWS", "Postman", "Trello", "Google Apps Script"],
  "Languages": ["PHP", "JavaScript", "Java", "C", "C++", "C#", "Python"],
  "Databases": ["MySQL", "SQLite", "PostgreSQL", "Redis"]
};

const topSkills = ["Full-Stack Development", "React/Next.js", "PHP/Laravel"];

export default function AboutMeSection() {
  const [activeSkillCategory, setActiveSkillCategory] = useState<string>("Frontend");

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl heading-display text-gray-900 dark:text-white mb-6 text-balance">
            About Me
          </h2>
          <p className="text-xl body-large text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-balance">
            Passionate full-stack developer crafting digital experiences that make a difference
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Column - Image and Top Skills */}
          <div className="space-y-12">
            <div className="relative">
              <Image
                className="rounded-2xl shadow-2xl mx-auto"
                src="/next.svg"
                alt="Ferdz - Full-Stack Developer"
                width={400}
                height={400}
                priority
              />
              
              {/* Top 3 Skills Overlay */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 w-11/12">
                <h3 className="text-center font-semibold text-gray-900 dark:text-white mb-3">
                  Top Specialties
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {topSkills.map((skill, index) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 text-sm font-medium rounded-full ${
                        index === 0
                          ? "bg-blue-600 text-white"
                          : index === 1
                          ? "bg-purple-600 text-white"
                          : "bg-green-600 text-white"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Bio and Skills */}
          <div className="space-y-12">
            {/* Bio */}
            <div>
              <h3 className="text-2xl heading-primary text-gray-900 dark:text-white mb-4 text-balance">
                My Story
              </h3>
              <div className="prose-enhanced max-w-none text-gray-600 dark:text-gray-400">
                <p className="mb-4">
                  As a passionate full-stack developer at <strong>Cloudesk Pty Ltd</strong>, I blend creativity with technical expertise to craft digital experiences that leave a lasting impression. My journey is driven by transforming complex ideas into elegant, user-friendly solutions.
                </p>
                <p className="mb-4">
                  With an eye for design that marries form with function, I&apos;m committed to optimizing performance and scalability while collaborating closely with clients to exceed expectations. From healthcare management systems to IoT solutions, I&apos;ve tackled diverse challenges across multiple domains.
                </p>
                <p className="mb-6">
                  Certified in Computer Programming and experienced as an AI Model Training Specialist, I&apos;m dedicated to pushing the boundaries of what&apos;s possible in the digital realm.
                </p>
              </div>
              
              {/* Resume Download Button */}
              <div className="pt-4">
                <button
                  onClick={() => {
                    trackResumeView();
                    // For now, this will just track the click. A real resume file would be downloaded here
                    window.open('#', '_blank');
                  }}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </button>
              </div>
            </div>

            {/* Interactive Skills Visualization */}
            <div>
              <h3 className="text-2xl heading-primary text-gray-900 dark:text-white mb-6 text-balance">
                Technical Expertise
              </h3>
              
              {/* Skill Category Tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {Object.keys(technicalSkills).map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveSkillCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      activeSkillCategory === category
                        ? "bg-blue-600 text-white shadow-lg transform scale-105"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {technicalSkills[activeSkillCategory as keyof typeof technicalSkills].map((skill) => (
                  <div
                    key={skill}
                    className="bg-white dark:bg-gray-800 rounded-lg p-3 text-center shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
                  >
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Stats or Highlights */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3+</div>
            <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">15+</div>
            <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">5+</div>
            <div className="text-gray-600 dark:text-gray-400">Technologies Mastered</div>
          </div>
        </div>
      </div>
    </section>
  );
}