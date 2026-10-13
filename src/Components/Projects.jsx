import React from 'react'
import { projects } from '../data/projects'

export const Projects = ({ onSelectProject }) => {
  return (
    <section id="projects" className="w-full bg-[#fafbfc] py-20 md:py-28 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-16 md:mb-20 scroll-pop">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-tight">
            Crafted Projects
          </h2>
          <p className="mt-4 text-slate-500 text-[15px] sm:text-[16px] leading-relaxed">
            Real-world applications and digital products built with clean architecture, modern frontend frameworks, and user-centered design.
          </p>
        </div>

        {/* Projects List (Clean, Minimal, Alternating Zigzag Layout) */}
        <div className="space-y-16 lg:space-y-24">
          {projects.map((project, index) => {
            const isReversed = index % 2 === 1

            return (
              <div
                key={project.id}
                className={`flex flex-col ${
                  isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } items-center gap-10 lg:gap-14 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/70 shadow-sm hover:shadow-md transition-shadow duration-300 scroll-pop`}
              >
                {/* 1. Image Showcase Column */}
                <div className="w-full lg:w-1/2 flex flex-col">
                  <div
                    onClick={() => onSelectProject(project)}
                    className="relative group rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-xl shadow-slate-900/10 cursor-pointer"
                  >
                    {/* Top Browser / Window Header Bar */}
                    <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800/80">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                        <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[11px] font-medium text-slate-400 font-mono tracking-wide">
                        {project.title.toLowerCase().replace(/\s+/g, '-')}.app
                      </span>
                      <div className="w-10" />
                    </div>

                    {/* Project Screenshot / Mockup Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 flex items-center justify-center">
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Hover Overlay with View Details Trigger */}
                      <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 backdrop-blur-[2px]">
                        <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-slate-900 font-semibold text-sm shadow-xl transition-transform group-hover:scale-105">
                          <span>View Details</span>
                          <span className="text-xs">&rarr;</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Details Column (Clean, Less Text, Minimal) */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  {/* Category & Status */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                      {project.category}
                    </span>
                    <span className="text-xs font-medium text-slate-400">
                      {project.year}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3
                    onClick={() => onSelectProject(project)}
                    className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight hover:text-slate-700 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-500 mt-1">
                    {project.subtitle}
                  </p>

                  {/* Crisp Concise Short Description */}
                  <p className="mt-4 text-slate-600 text-[14px] sm:text-[15px] leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Action Buttons Row */}
                  <div className="mt-7 flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
                    {/* View Details Button (Takes to New Detail Page) */}
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0a0f1d] hover:bg-slate-800 text-white font-medium text-sm transition-all duration-200 shadow-sm hover:shadow active:scale-95 group cursor-pointer"
                    >
                      <span>View Details</span>
                      <span className="text-xs transition-transform duration-200 group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </button>

                    {/* Live Demo Link */}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium text-sm transition-all duration-200 active:scale-95 cursor-pointer"
                      >
                        <span>Live Demo</span>
                        <svg
                          className="w-4 h-4 text-slate-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}

                    {/* GitHub Code Link */}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium text-sm transition-all duration-200 active:scale-95 cursor-pointer"
                      >
                        <svg
                          className="w-4 h-4 text-slate-700"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          />
                        </svg>
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
