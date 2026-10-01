import React from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  Code,
  Server,
  Database,
  Wrench,
  Layers,
  Terminal,
  Cpu,
  GitBranch,
  Boxes,
} from 'lucide-react';
import { GithubIcon, FigmaIcon } from './Icons';

export default function Skills() {
  const categories = [
    {
      title: "Frontend Development",
      description: "Building responsive, accessible, and structured web interfaces.",
      icon: <Layers className="w-4 h-4 text-amber-400" />,
      skills: [
        { name: "React", note: "Hooks, SPAs, State" },
        { name: "JavaScript", note: "ES6+, DOM, Fetch" },
        { name: "HTML5 & CSS3", note: "Semantic, Responsive" },
        { name: "Tailwind CSS", note: "Utility-First Styling" },
        { name: "Next.js", note: "App Router, SSR basics" },
      ],
    },
    {
      title: "Backend & Logic",
      description: "Server architecture, relational workflows, and REST endpoints.",
      icon: <Server className="w-4 h-4 text-amber-400" />,
      skills: [
        { name: "PHP", note: "OOP, Sessions, Auth" },
        { name: "Node.js", note: "Express, Middleware" },
        { name: "REST APIs", note: "JSON, CRUD, HTTP" },
        { name: "Python", note: "Scripting, Logic" },
        { name: "Java", note: "OOP Foundations" },
      ],
    },
    {
      title: "Databases & Storage",
      description: "Designing structured relational schemas and data queries.",
      icon: <Database className="w-4 h-4 text-amber-400" />,
      skills: [
        { name: "MySQL", note: "Relational Schemas, Joins" },
        { name: "PostgreSQL", note: "Relational Queries" },
        { name: "MongoDB", note: "Document Storage" },
        { name: "SQL Modeling", note: "Normalization, Keys" },
      ],
    },
    {
      title: "Tools & Environment",
      description: "Version control, development tooling, and prototyping.",
      icon: <Wrench className="w-4 h-4 text-amber-400" />,
      skills: [
        { name: "Git", note: "Branching, Merges" },
        { name: "GitHub", note: "Repositories, PRs" },
        { name: "VS Code", note: "Primary IDE" },
        { name: "Figma", note: "UI/UX Prototyping" },
        { name: "Postman", note: "API Testing" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#1E2536]/60">
      <div className="max-w-6xl w-full mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono font-semibold tracking-wider text-amber-400 uppercase mb-2">
            02 / Technical Stack
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Skills & Technologies
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
            Technologies and frameworks I have worked with across academic coursework, capstone systems, and independent projects.
          </p>
        </div>

        {/* 4-Panel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="p-5 rounded-xl bg-[#111622] border border-[#1E2536] hover:border-[#2D374D] transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-2.5 pb-3 mb-3 border-b border-[#1E2536]">
                  <div className="p-1.5 rounded-md bg-[#161C2A] border border-[#1E2536] shrink-0">
                    {cat.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-white">
                    {cat.title}
                  </h3>
                </div>

                <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skill List */}
                <ul className="space-y-2">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="p-2 rounded-lg bg-[#0B0E14] border border-[#1E2536] flex items-center justify-between text-xs"
                    >
                      <span className="font-medium text-neutral-200">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono text-neutral-400">
                        {skill.note}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
