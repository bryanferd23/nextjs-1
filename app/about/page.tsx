import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Ferdz (Bryan Perante) - Full-Stack Developer at Cloudesk Pty Ltd. Specializing in PHP, Laravel, JavaScript, and modern web technologies.",
  openGraph: {
    title: "About Ferdz - Full-Stack Developer",
    description: "Learn about Ferdz (Bryan Perante) - Full-Stack Developer at Cloudesk Pty Ltd. Specializing in PHP, Laravel, JavaScript, and modern web technologies.",
  },
};

export default function About() {
  const technicalSkills = {
    languages: ["PHP", "JavaScript", "Java", "C", "C++", "C#", "Python"],
    frameworks: ["Laravel", "CodeIgniter", "Symfony", "React Native", "Expo"],
    databases: ["MySQL", "SQLite", "PostgreSQL"],
    tools: ["Git", "Postman", "Google Apps Script", "Trello", "Slack"],
    webDev: ["HTML/CSS", "Tailwind", "Bootstrap", "jQuery"],
    mobile: ["React Native", "Expo", "Android", "iOS"],
  };

  return (
    <div className="font-sans min-h-screen p-8 pb-20 sm:p-20">
      <main className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <Image
            className="rounded-full mx-auto mb-6"
            src="/next.svg"
            alt="Profile Picture"
            width={200}
            height={200}
            priority
          />
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Biography</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="mb-4">
              As a passionate full-stack developer, I blend creativity with technical expertise to craft digital experiences that leave a lasting impression. Currently working as a Full Stack Web Developer at Cloudesk Pty Ltd, I specialize in transforming complex ideas into elegant, user-friendly solutions.
            </p>
            <p className="mb-4">
              My journey in tech is driven by an eye for design that marries form with function, a commitment to optimizing performance and scalability, and collaborating closely with clients to exceed expectations. I have experience with diverse projects ranging from healthcare management systems to IoT solutions.
            </p>
            <p className="mb-4">
              I hold certifications in Computer Programming from the Department of Information and Communications Technology, EDP Specialist from the Civil Service Commission, and TEFL certification. I also have experience as an AI Model Training Specialist at Outlier.
            </p>
            <p>
              Whether it&apos;s building robust web applications or streamlining processes through innovative software, I&apos;m dedicated to pushing the boundaries of what&apos;s possible in the digital realm.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.languages.map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Web Development</h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.webDev.map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.frameworks.map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Mobile Development</h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.mobile.map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.databases.map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.tools.map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-6">Connect With Me</h2>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/bryanferd23"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:underline"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/fjperante/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:underline"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://www.facebook.com/bryanferd23/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:underline"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
              </svg>
              Facebook
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
