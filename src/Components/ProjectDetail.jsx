import React, { useState, useEffect } from 'react'
import { getTechIcon } from '../data/techIcons'

export const ProjectDetail = ({ project, onBack, onSelectProject, allProjects = [] }) => {
  const [copiedKey, setCopiedKey] = useState(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [project])

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 2000)
  }

  if (!project) return null

  // Find next project for quick navigation
  const currentIndex = allProjects.findIndex((p) => p.id === project.id)
  const nextProject =
    currentIndex !== -1 && currentIndex + 1 < allProjects.length
      ? allProjects[currentIndex + 1]
      : allProjects[0]

  return (
    <div className="min-h-screen bg-[#fafbfc] text-slate-900 pb-24">
      {/* Top Sticky Header */}
      <nav className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-2xs">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={onBack}
              className="flex items-center group cursor-pointer select-none transition-transform active:scale-95"
              aria-label="Back to Portfolio Home"
            >
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-950 group-hover:text-indigo-600 transition-colors">
                M
              </span>
              <span className="text-xl sm:text-2xl font-normal tracking-tight text-slate-500 group-hover:text-slate-800 transition-colors">
                orfolio
              </span>
            </button>
            <span className="text-slate-300">/</span>

            {/* Custom Animated Back Arrow Button */}
            <div className="styled-wrapper compact">
              <button
                type="button"
                onClick={onBack}
                className="button"
                aria-label="Back to Portfolio"
                title="Back to Portfolio"
              >
                <div className="button-box">
                  <span className="button-elem">
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="arrow-icon w-full h-full"
                    >
                      <path
                        fill="black"
                        d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
                      />
                    </svg>
                  </span>
                  <span className="button-elem">
                    <svg
                      fill="black"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="arrow-icon w-full h-full"
                    >
                      <path
                        d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
                      />
                    </svg>
                  </span>
                </div>
              </button>
            </div>

            <button
              type="button"
              onClick={onBack}
              className="hidden sm:inline-flex items-center text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-950 transition-colors cursor-pointer"
            >
              <span>Back to Portfolio</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium transition-colors"
              >
                <span>GitHub</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0a0f1d] hover:bg-slate-800 text-white text-xs font-medium transition-all shadow-sm active:scale-95"
              >
                <span>Live Demo</span>
                <span className="text-xs">&rarr;</span>
              </a>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-6 sm:px-8 pt-10 sm:pt-14 space-y-12">
        {/* Header Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200/60">
              {project.category}
            </span>
            <span className="text-xs font-medium text-slate-400">
              {project.year}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-500 font-medium">
            {project.subtitle}
          </p>
        </div>

        {/* Big Browser Showcase Mockup */}
        <div className="rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl">
          {/* Window Chrome Header */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-xs font-mono text-slate-400 tracking-wide truncate max-w-[200px] sm:max-w-none">
              https://{project.liveUrl ? project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '') : `${project.title.toLowerCase().replace(/\s+/g, '-')}.app`}
            </span>
            <div className="w-10" />
          </div>

          {/* Screenshot */}
          <div className="relative aspect-[16/10] bg-slate-900">
            <img
              src={project.image}
              alt={project.imageAlt}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Detailed Overview */}
        <section className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/70 shadow-xs space-y-4">
          <h2 className="text-xs font-bold tracking-widest uppercase text-slate-400">
            About This Project
          </h2>
          <p className="text-base sm:text-[17px] text-slate-600 leading-relaxed font-normal">
            {project.description}
          </p>
        </section>

        {/* Technology Stack (Moved exclusively here as requested) */}
        <section className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/70 shadow-xs space-y-5">
          <div>
            <h2 className="text-xs font-bold tracking-widest uppercase text-slate-400">
              Technology Stack
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Core technologies, libraries, and architectural tools leveraged in this build.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 pt-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 hover:bg-slate-200/70 text-slate-800 border border-slate-200/80 transition-colors shadow-2xs"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  {getTechIcon(tech)}
                </div>
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </section>

        {/* Key Features & Architecture Highlights */}
        <section className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/70 shadow-xs space-y-6">
          <h2 className="text-xs font-bold tracking-widest uppercase text-slate-400">
            Key Features &amp; Architecture
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm text-slate-700 font-medium leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Test Credentials Box (If Available) */}
        {project.demoAccounts && (
          <section className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200/80 space-y-5">
            <div>
              <div className="flex items-center gap-2 mb-1">
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
                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                  />
                </svg>
                <h2 className="text-xs font-bold tracking-widest uppercase text-slate-700">
                  Live Test Accounts
                </h2>
              </div>
              <p className="text-sm text-slate-500">
                Pre-configured test accounts for instant role-based exploration.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.demoAccounts.map((acc) => (
                <div
                  key={acc.role}
                  className="bg-white p-4 rounded-2xl border border-slate-200/70 shadow-2xs flex flex-col justify-between"
                >
                  <span className="font-semibold text-slate-900 mb-2 text-sm">
                    {acc.role}:
                  </span>
                  <div className="space-y-2 font-mono text-xs text-slate-600">
                    <div className="flex items-center justify-between">
                      <span>ID: <strong className="text-slate-800">{acc.email}</strong></span>
                      <button
                        type="button"
                        onClick={() => handleCopy(acc.email, `${acc.role}-detail-email`)}
                        className="text-[11px] text-slate-500 hover:text-slate-900 underline ml-1 cursor-pointer transition-colors"
                      >
                        {copiedKey === `${acc.role}-detail-email` ? 'Copied' : 'Copy'}
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>PW: <strong className="text-slate-800">{acc.pass}</strong></span>
                      <button
                        type="button"
                        onClick={() => handleCopy(acc.pass, `${acc.role}-detail-pass`)}
                        className="text-[11px] text-slate-500 hover:text-slate-900 underline ml-1 cursor-pointer transition-colors"
                      >
                        {copiedKey === `${acc.role}-detail-pass` ? 'Copied' : 'Copy'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Action Callout Row */}
        <section className="flex flex-wrap items-center justify-between gap-4 p-8 rounded-3xl bg-slate-950 text-white">
          <div>
            <h3 className="text-lg font-bold">Ready to test the live project?</h3>
            <p className="text-sm text-slate-400 mt-0.5">Explore the responsive deployed interface directly in your browser.</p>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition-all"
              >
                GitHub Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-900 hover:bg-slate-100 font-semibold text-sm transition-all shadow-md active:scale-95"
              >
                <span>Launch Live Demo</span>
                <span>&rarr;</span>
              </a>
            )}
          </div>
        </section>

        {/* Next Project Teaser */}
        {nextProject && nextProject.id !== project.id && (
          <div className="pt-8 border-t border-slate-200">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Next Project
            </span>
            <button
              type="button"
              onClick={() => onSelectProject(nextProject)}
              className="mt-3 w-full p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 hover:border-slate-300 shadow-xs hover:shadow-md transition-all flex items-center justify-between group cursor-pointer text-left"
            >
              <div>
                <span className="text-xs font-medium text-slate-400">{nextProject.category}</span>
                <h4 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-slate-950 transition-colors">
                  {nextProject.title}
                </h4>
                <p className="text-sm text-slate-500 mt-1">{nextProject.shortDescription}</p>
              </div>
              <span className="w-12 h-12 rounded-full bg-slate-100 group-hover:bg-slate-900 group-hover:text-white flex items-center justify-center text-slate-700 transition-colors text-lg shrink-0 ml-4">
                &rarr;
              </span>
            </button>
          </div>
        )}
      </main>
    </div>
  )
}

export default ProjectDetail
