import React from 'react';
import { 
  Code2, 
  Workflow, 
  Layers, 
  Database, 
  Terminal, 
  Palette, 
  Cpu 
} from 'lucide-react';

const Skills = () => {
  const stackLayers = [
    {
      layer: "Frameworks & Languages",
      icon: Code2,
      skills: ["React", "HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "Next.js", "Python"]
    },
    {
      layer: "State & Logic",
      icon: Workflow,
      skills: ["Redux Toolkit", "Zustand", "React Context API"]
    },
    {
      layer: "Architecture & API",
      icon: Layers,
      skills: ["REST APIs", "Node.js", "Express", "Component-Based Design", "MVC Architecture"]
    },
    {
      layer: "Database Systems",
      icon: Database,
      skills: ["MongoDB", "PostgreSQL", "Firebase Firestore", "Mongoose"]
    },
    {
      layer: "DevOps & Cloud",
      icon: Cpu,
      skills: ["Vercel", "GitHub Actions"]
    },
    {
      layer: "Version Control & Workflow",
      icon: Terminal,
      skills: ["Git", "GitHub", "npm / pnpm", "ESLint", "Prettier", "Agile / Scrum"]
    },
    {
      layer: "UI, UX & Design",
      icon: Palette,
      skills: ["Tailwind CSS", "Figma", "Responsive Web Design", "UI/UX Prototyping"]
    }
  ];

  const totalSkills = stackLayers.reduce((sum, layer) => sum + layer.skills.length, 0);

  return (
    <section id='skills' className="py-20 bg-slate-50/50 text-slate-800 font-sans selection:bg-cyan-100 dark:bg-slate-950 dark:text-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header Section */}
        <div className='flex flex-col md:flex-row justify-between items-start md:items-end border-b border-slate-200 dark:border-slate-800 pb-8 mb-12 gap-6'>
          <div>
            <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">
              My Tech Stack
            </h1>
            <p className="text-slate-500 dark:text-slate-400 font-mono text-xs mt-2 uppercase tracking-[0.2em]">
              {totalSkills}+ technologies, tools, and architectural patterns
            </p>
          </div>
        </div>

        {/* Modern Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stackLayers.map((category, catIndex) => {
            const Icon = category.icon;
            
            return (
              <div 
                key={catIndex} 
                className="p-5 rounded-xl border border-slate-200/60 dark:border-slate-800/80 bg-white dark:bg-slate-900/50 hover:border-cyan-500/30 dark:hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/[0.02] transition-all duration-300 group flex flex-col min-h-[180px]"
              >
                {/* Category Heading */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-cyan-50 dark:bg-cyan-950/50 text-cyan-600 dark:text-cyan-400 shrink-0 group-hover:bg-cyan-100 dark:group-hover:bg-cyan-900/50 transition-colors duration-300">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm tracking-tight transition-colors duration-300">
                    {category.layer}
                  </h3>
                </div>

                {/* Dense Badge Stack */}
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill, sIndex) => (
                    <span
                      key={sIndex}
                      className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-transparent dark:border-slate-700/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* const skillCategories = [
  {
    title: "Frameworks & Languages",
    icon: Code2,
    skills: ["Vue 3", "React.js 18", "Next.js 13", "Next.js 14", "Next.js 15", "TypeScript", "JavaScript (ES6+)"],
  },
  {
    title: "State Management",
    icon: Workflow,
    skills: ["Pinia", "Vue Router", "XState", "Zustand", "React-Redux", "React Toolkit"],
  },
  {
    title: "Architecture & Patterns",
    icon: Layers,
    skills: ["SDD (Spec Driven Dev)", "Agentic", "File-type Based", "Feature-based", "Atomic Design", "Component-based", "Monorepo", "Micro Frontend"],
  },
  {
    title: "Data & Real-time",
    icon: Cable,
    skills: ["Axios", "React Query", "TanStack Query", "REST API", "WebSocket", "UUID"],
  },
  {
    title: "Forms & Validation",
    icon: ClipboardCheck,
    skills: ["Vee-Validate", "Formik", "Yup", "Zod"],
  },
  {
    title: "UI & Styling",
    icon: Palette,
    skills: ["TailwindCSS", "SCSS / Sass", "Material UI 3", "Hero UI", "Shadcn", "vue-select"],
  },
  {
    title: "Build & Performance",
    icon: Zap,
    skills: ["Vite", "Webpack", "Bundle Optimize", "PWA", "Vue Composable"],
  },
  {
    title: "Security & Monitoring",
    icon: ShieldCheck,
    skills: ["Sentry", "jose (JWT)", "JWS", "Public Key", "Private Key", "Encoded Keys", "ACL"],
  },
  {
    title: "DevOps & Workflow",
    icon: Terminal,
    skills: ["Git", "GitHub", "GitLab", "pnpm", "npm", "ESLint / Prettier", "CI/CD", "Jira", "Agile / Scrum", "Taskulu"],
  },
  {
    title: "System Knowledge",
    icon: Server,
    skills: ["PWA Architecture", "Sandbox Environment", "Machine Abstraction"],
  },
]; */

export default Skills;