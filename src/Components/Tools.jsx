import React from 'react'
import { getTechIcon } from '../data/techIcons'

export const Tools = () => {
  const languageAndFrameworks = [
    { name: 'JavaScript', category: 'Language' },
    { name: 'HTML5', category: 'Markup' },
    { name: 'CSS3', category: 'Styling' },
    { name: 'Tailwind CSS', category: 'Styling Framework' },
    { name: 'Vue.js / Nuxt 3', category: 'Framework' },
    { name: 'React', category: 'Library' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Python', category: 'Language' },
  ]

  const workflowAndTools = [
    { name: 'Git & GitHub', category: 'Version Control' },
    { name: 'Vite', category: 'Build Tool' },
    { name: 'Figma UI/UX', category: 'Design Tool' },
    { name: 'RESTful APIs', category: 'Data & Backend' },
    { name: 'VS Code', category: 'IDE & Environment' },
    { name: 'C++ & Arduino', category: 'Systems' },
    { name: 'Responsive Design', category: 'UI Engineering' },
  ]

  // Duplicate arrays to create a seamless infinite marquee loop
  const duplicatedLanguages = [
    ...languageAndFrameworks,
    ...languageAndFrameworks,
    ...languageAndFrameworks,
    ...languageAndFrameworks,
  ]
  const duplicatedWorkflows = [
    ...workflowAndTools,
    ...workflowAndTools,
    ...workflowAndTools,
    ...workflowAndTools,
  ]

  return (
    <section id="tools" className="w-full bg-white py-16 md:py-24 border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-12 md:mb-16 scroll-pop">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
            Tools &amp; Technologies
          </h2>
          <p className="mt-3 text-slate-500 text-[15px] sm:text-[16px] leading-relaxed">
            Curated technical stack and developer workflows honed through practical projects and software development.
          </p>
        </div>

        {/* Infinite Looping Right-to-Left Marquee Tracks */}
        <div className="space-y-8 scroll-pop">
          {/* Row 1: Languages & Frameworks */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500">
                Languages &amp; Frameworks
              </h3>
            </div>

            <div className="marquee-container">
              <div className="marquee-track">
                {duplicatedLanguages.map((tool, idx) => (
                  <div
                    key={`lang-${tool.name}-${idx}`}
                    className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#f8fafc] hover:bg-white border border-slate-200/80 hover:border-slate-300 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group cursor-pointer select-none shrink-0"
                    title={`${tool.name} • ${tool.category}`}
                  >
                    <div className="w-5 h-5 flex items-center justify-center transition-transform duration-200 group-hover:scale-110 shrink-0">
                      {getTechIcon(tool.name)}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-slate-950 transition-colors whitespace-nowrap">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2: Workflow & Design Tools */}
          <div className="space-y-3.5 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500">
                Workflow, Tools &amp; Design
              </h3>
            </div>

            <div className="marquee-container">
              <div className="marquee-track marquee-track-reverse">
                {duplicatedWorkflows.map((tool, idx) => (
                  <div
                    key={`work-${tool.name}-${idx}`}
                    className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#f8fafc] hover:bg-white border border-slate-200/80 hover:border-slate-300 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group cursor-pointer select-none shrink-0"
                    title={`${tool.name} • ${tool.category}`}
                  >
                    <div className="w-5 h-5 flex items-center justify-center transition-transform duration-200 group-hover:scale-110 shrink-0">
                      {getTechIcon(tool.name)}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-slate-950 transition-colors whitespace-nowrap">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tools
