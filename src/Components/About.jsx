import React from 'react'

export const About = () => {
  const quickInfo = [
    {
      label: 'Location',
      value: 'Phnom Penh, Cambodia',
      sub: 'GMT+7 • Available Worldwide',
      icon: (
        <svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      bg: 'bg-sky-50 border-sky-100',
    },
    {
      label: 'Education',
      value: 'B.Eng. Information Technology Engineering',
      sub: 'Royal University of Phnom Penh (RUPP)',
      icon: (
        <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
      bg: 'bg-indigo-50 border-indigo-100',
    },
    {
      label: 'Languages',
      value: 'Khmer (Native) & English',
      sub: 'Fluent technical communication',
      icon: (
        <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
      bg: 'bg-emerald-50 border-emerald-100',
    },
    {
      label: 'Specialization',
      value: 'Frontend & Interactive Web Apps',
      sub: 'React, Vue 3 / Nuxt 3 & Modern UI/UX',
      icon: (
        <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      bg: 'bg-amber-50 border-amber-100',
    },
  ]

  return (
    <section id="about" className="w-full bg-white py-20 md:py-28 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-14 md:mb-16 scroll-pop">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-tight">
            About Me
          </h2>
          <p className="mt-4 text-slate-500 text-[15px] sm:text-[16px] leading-relaxed">
            Bridging creative design thinking with clean engineering to build fast, intuitive, and modern web applications.
          </p>
        </div>

        {/* Bento Grid: Main Story & Quick Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-8">
          {/* Main Story Card (7 Cols) */}
          <div className="lg:col-span-7 bg-[#fafbfc] rounded-3xl p-7 sm:p-9 border border-slate-200/80 shadow-xs flex flex-col justify-between scroll-pop">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                <span>Introduction</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
                Hi, I'm <span className="text-indigo-600">Siv Vannat</span> — an Interactive Web Developer based in Cambodia.
              </h3>
              <div className="space-y-3.5 text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                <p>
                  I specialize in creating clean, responsive, and reactive web applications. My enthusiasm for software craftsmanship drives me to turn complex requirements into elegant, user-friendly digital experiences.
                </p>
                <p>
                  From building comprehensive administrative dashboards to dynamic e-commerce platforms with live analytics, I place a high emphasis on component reusability, semantic structure, and smooth user interactions.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Info & Availability Card (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4 scroll-pop">
            {/* Live Status Callout Banner */}
            <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 flex items-center gap-3">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <div className="text-xs">
                <span className="font-bold text-emerald-950 block">Available for New Opportunities</span>
                <span className="text-emerald-700">Open for full-time roles, freelance projects &amp; collaborations.</span>
              </div>
            </div>

            {/* Quick Details List */}
            <div className="bg-[#fafbfc] rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs flex-1 flex flex-col justify-between">
              <div className="space-y-3.5">
                {quickInfo.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-3 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 transition-colors"
                  >
                    <div className={`p-2 rounded-xl border shrink-0 ${item.bg}`}>
                      {item.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        {item.label}
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-slate-800 truncate mt-0.5">
                        {item.value}
                      </div>
                      <div className="text-[11px] text-slate-500 truncate">
                        {item.sub}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap items-center gap-3.5 pt-2 scroll-pop">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#0a0f1d] hover:bg-slate-800 text-white font-medium text-xs sm:text-sm transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <span>Let's Work Together</span>
            <span>&rarr;</span>
          </a>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium text-xs sm:text-sm transition-all active:scale-95 cursor-pointer"
          >
            <span>View Featured Projects</span>
          </a>

          <a
            href="https://github.com/vannat-24"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium text-xs sm:text-sm transition-all active:scale-95 cursor-pointer"
          >
            <svg className="w-4 h-4 text-slate-700" viewBox="0 0 24 24" fill="currentColor">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            <span>GitHub Profile</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About

