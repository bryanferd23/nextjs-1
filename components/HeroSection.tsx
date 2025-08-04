'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import FadeInUp from './animations/FadeInUp';
import ScaleOnHover from './animations/ScaleOnHover';
import { trackContactClick } from './Analytics';

const specialties = [
  "full-stack applications",
  "interactive UIs", 
  "scalable backends",
  "modern web solutions",
  "digital experiences"
];

export default function HeroSection() {
  const [currentSpecialty, setCurrentSpecialty] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpecialty((prev) => (prev + 1) % specialties.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-accent-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow delay-2000"></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Profile Image */}
        <FadeInUp delay={0.2}>
          <ScaleOnHover scale={1.1}>
            <div className="mb-12">
              <Image
                className="rounded-full mx-auto border-4 border-white dark:border-gray-800 shadow-xl"
                src="/next.svg"
                alt="Ferdz - Full-Stack Developer"
                width={200}
                height={200}
                priority
              />
            </div>
          </ScaleOnHover>
        </FadeInUp>

        {/* Dynamic Greeting */}
        <FadeInUp delay={0.4}>
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl heading-display text-secondary-900 dark:text-neutral-50 mb-8 text-balance">
              Hi, I&apos;m <span className="text-primary-600 dark:text-primary-400">Ferdz</span>
            </h1>
          
            <div className="text-2xl md:text-3xl body-large text-secondary-600 dark:text-neutral-300 mb-10 text-balance">
              I craft{" "}
              <span className="relative inline-block">
                <motion.span 
                  key={currentSpecialty}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-primary-600 dark:text-primary-400 font-semibold"
                >
                  {specialties[currentSpecialty]}
                </motion.span>
              </span>
            </div>

            <p className="text-xl md:text-2xl body-large text-secondary-500 dark:text-neutral-400 max-w-4xl mx-auto text-pretty">
              Full-Stack Developer specializing in modern technologies and innovative solutions. 
              Let&apos;s build something amazing together.
            </p>
          </div>
        </FadeInUp>

        {/* Top 3 Skills Showcase */}
        <FadeInUp delay={0.6}>
          <div className="mb-16">
            <h2 className="text-lg heading-secondary text-secondary-600 dark:text-neutral-300 mb-8 text-balance">Core Technologies</h2>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {/* Skill 1: React/JavaScript */}
              <ScaleOnHover scale={1.05}>
                <div className="group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 md:p-6 rounded-xl min-w-[140px] sm:min-w-[160px]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 15.5v-2.25c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v2.25h-3zm1.5-11c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z"/>
                      </svg>
                    </div>
                    <h3 className="font-bold text-secondary-900 dark:text-neutral-50">React/JavaScript</h3>
                  </div>
                  <p className="text-sm text-secondary-500 dark:text-neutral-400">Modern frontend development</p>
                </div>
              </ScaleOnHover>

              {/* Skill 2: PHP/Laravel */}
              <ScaleOnHover scale={1.05}>
                <div className="group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 md:p-6 rounded-xl min-w-[140px] sm:min-w-[160px]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-secondary-100 dark:bg-secondary-800 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-secondary-600 dark:text-secondary-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                      </svg>
                    </div>
                    <h3 className="font-bold text-secondary-900 dark:text-neutral-50">PHP/Laravel</h3>
                  </div>
                  <p className="text-sm text-secondary-500 dark:text-neutral-400">Robust backend systems</p>
                </div>
              </ScaleOnHover>

              {/* Skill 3: Full-Stack Architecture */}
              <ScaleOnHover scale={1.05}>
                <div className="group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-accent-100 dark:bg-accent-900 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent-600 dark:text-accent-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                    </div>
                    <h3 className="font-bold text-secondary-900 dark:text-neutral-50">Full-Stack</h3>
                  </div>
                  <p className="text-sm text-secondary-500 dark:text-neutral-400">End-to-end solutions</p>
                </div>
              </ScaleOnHover>
            </div>
          </div>
        </FadeInUp>

        {/* Call-to-Action Buttons */}
        <FadeInUp delay={0.8}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ScaleOnHover>
              <Link
                href="/projects"
                className="group relative px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </ScaleOnHover>
            
            <ScaleOnHover>
              <Link
                href="/contact"
                onClick={trackContactClick}
                className="px-8 py-4 border-2 border-primary-600 text-primary-600 dark:text-primary-400 font-semibold rounded-lg hover:bg-primary-600 hover:text-white dark:hover:text-white transition-all duration-300"
              >
                Get In Touch
              </Link>
            </ScaleOnHover>
          </div>
        </FadeInUp>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-secondary-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}