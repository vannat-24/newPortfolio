import React from 'react'
import { getTechIcon } from '../data/techIcons'

export const Tools = () => {
  const skillGroups = [
    {
      id: 'frontend',
      title: 'Front-End Development',
      badge: 'User Interfaces & Web Apps',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200/80',
      dotColor: 'bg-indigo-500',
      cardBorder: 'border-slate-200/80 hover:border-indigo-200',
      description:
        'Building responsive, reactive, and component-driven web applications with modern frameworks.',
      skills: [
        { name: 'React', label: 'React.js' },
        { name: 'Vue.js / Nuxt 3', label: 'Vue.js / Nuxt 3' },
        { name: 'JavaScript', label: 'JavaScript (ES6+)' },
        { name: 'TypeScript', label: 'TypeScript' },
        { name: 'Tailwind CSS', label: 'Tailwind CSS' },
        { name: 'Bootstrap', label: 'Bootstrap 5' },
        { name: 'HTML5', label: 'HTML5' },
        { name: 'CSS3', label: 'CSS3' },
      ],
    },
    {
      id: 'programming',
      title: 'Programming Languages',
      badge: 'Core CS & Problem Solving',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200/80',
      dotColor: 'bg-blue-500',
      cardBorder: 'border-slate-200/80 hover:border-blue-200',
      description:
        'Structured programming, object-oriented software design, and algorithmic foundations.',
      skills: [
        { name: 'C++', label: 'C++' },
        { name: 'C', label: 'C Language' },
        { name: 'Python', label: 'Python' },
        { name: 'Algorithms & OOP', label: 'Algorithms & OOP' },
      ],
    },
    {
      id: 'tools',
      title: 'Tools & Infrastructure',
      badge: 'Workflow & Engineering',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
      dotColor: 'bg-emerald-500',
      cardBorder: 'border-slate-200/80 hover:border-emerald-200',
      description:
        'Development environments, version control, API integration, and computer networking setup.',
      skills: [
        { name: 'Git & GitHub', label: 'Git & GitHub' },
        { name: 'Vite', label: 'Vite' },
        { name: 'VS Code', label: 'VS Code' },
        { name: 'RESTful APIs', label: 'RESTful APIs' },
        { name: 'Figma UI/UX', label: 'Figma UI/UX' },
        { name: 'Computer Networking', label: 'Computer Networking' },
      ],
    },
  ]

  return (
    <section id="tools" className="w-full bg-[#fafbfc] py-16 md:py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-10 md:mb-14 scroll-pop">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            Technical Stack &amp; Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
            Tools &amp; Technologies
          </h2>
          <p className="mt-2.5 text-slate-500 text-[15px] sm:text-[16px] leading-relaxed">
            Categorized technical stack and engineering proficiencies honed through hands-on development and coursework.
          </p>
        </div>

        {/* 3-Column Categorized Bento Cards Grid (Static, Zero Animation/Motion) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 scroll-pop items-stretch">
          {skillGroups.map((group) => (
            <div
              key={group.id}
              className={`bg-white rounded-3xl p-6 sm:p-7 border ${group.cardBorder} shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between`}
            >
              <div>
                {/* Header: Title */}
                <div className="flex items-center gap-2.5 mb-2.5">
                  <span className={`w-2.5 h-2.5 rounded-full ${group.dotColor}`} />
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    {group.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  {group.description}
                </p>

                {/* Static Clean Skill Badges (No Auto-Scrolling Animation) */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#f8fafc] hover:bg-slate-100/90 border border-slate-200/70 hover:border-slate-300 transition-colors shadow-2xs select-none"
                    >
                      <div className="w-4 h-4 flex items-center justify-center shrink-0">
                        {getTechIcon(skill.name)}
                      </div>
                      <span className="text-xs sm:text-[13px] font-semibold text-slate-800 whitespace-nowrap">
                        {skill.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>{group.badge}</span>
                <span className="font-mono font-medium">Verified Proficiencies</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tools
