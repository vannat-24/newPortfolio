import React, { useState, useEffect } from 'react'

export const EducationAndCertificates = () => {
  const [selectedCert, setSelectedCert] = useState(null)
  const [copiedId, setCopiedId] = useState(null)

  // Close modal on Escape key & manage scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCert(null)
      }
    }
    if (selectedCert) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [selectedCert])

  const handleCopyId = (id, e) => {
    if (e) e.stopPropagation()
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(id)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
    }
  }

  const academicTimeline = [
    {
      period: '2025 — 2029 (Expected)',
      degree: 'Bachelor of Engineering in Information Technology Engineering (B.Eng. ITE)',
      institution: 'Royal University of Phnom Penh (RUPP)',
      isHighlight: true,
    },
    {
      period: '2026',
      degree: 'Specialized IT Training: React, Vue/Nuxt, Networking & C++/OOP',
      institution: 'Engineering of Technology and Electronic Center (ETEC Center)',
      isHighlight: false,
    },
    {
      period: '2022 — 2025',
      degree: 'Upper Secondary Education Diploma (Bac II)',
      institution: 'Anlong Veng High School',
      isHighlight: false,
    },
    {
      period: '2018 — 2021',
      degree: 'Junior High School Diploma',
      institution: 'Hun Sen Toul Ta Sek Secondary School',
      isHighlight: false,
    },
  ]

  const certificates = [
    {
      id: 'ETEC-REACT-2026',
      title: 'React.js & Frontend Development',
      officialCourse: 'HTML, CSS, Bootstrap, JavaScript, ReactJS & Project Courses',
      issuedDate: 'Oct 2026',
      fullDate: 'October 15, 2026',
      credentialId: '2610136 ETEC',
      issuer: 'ETEC Center',
      signer: 'Mr. HENG PHEAKNA (Director)',
      image: '/certificates/etec-react-webdev.jpg',
      badge: 'React & Frontend',
      badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200/80',
      keySkills: ['React.js', 'Hooks & State', 'Bootstrap 5', 'REST APIs'],
    },
    {
      id: 'ETEC-VUE-NUXT-2026',
      title: 'Vue.js & Nuxt.js Web Engineering',
      officialCourse: 'HTML, CSS, Bootstrap, JavaScript VueJs, NuxtJs & Projects',
      issuedDate: 'Sep 2026',
      fullDate: 'September 15, 2026',
      credentialId: '2610345 ETEC',
      issuer: 'ETEC Center',
      signer: 'Mr. HENG PHEAKNA (Director)',
      image: '/certificates/etec-vue-nuxt-webdev.jpg',
      badge: 'Vue & Nuxt.js',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
      keySkills: ['Vue.js 3', 'Nuxt.js (SSR)', 'Composition API', 'Responsive UI'],
    },
    {
      id: 'ETEC-NETWORKING-2026',
      title: 'Computer Networking & Installation',
      officialCourse: 'Basic Computer / Networking & Installation',
      issuedDate: 'Jul 2026',
      fullDate: 'July 15, 2026',
      credentialId: '2608227 ETEC',
      issuer: 'ETEC Center',
      signer: 'Mr. HENG PHEAKNA (Director)',
      image: '/certificates/etec-networking-installation.jpg',
      badge: 'Networking & Systems',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200/80',
      keySkills: ['LAN/WLAN Setup', 'TCP/IP & Subnetting', 'Routers & Switches', 'Hardware Assembly'],
    },
    {
      id: 'ETEC-CPP-OOP-2026',
      title: 'C++ Programming & OOP Algorithms',
      officialCourse: 'Basic / Advance C++ / OOP / Algorithm & Project Courses',
      issuedDate: 'Jun 2026',
      fullDate: 'June 15, 2026',
      credentialId: '2607170 ETEC',
      issuer: 'ETEC Center',
      signer: 'Mr. HENG PHEAKNA (Director)',
      image: '/certificates/etec-cpp-oop-algorithm.jpg',
      badge: 'C++ & Algorithms',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200/80',
      keySkills: ['Modern C++', 'OOP Principles', 'Data Structures', 'Algorithmic Logic'],
    },
  ]

  return (
    <section id="education-certs" className="w-full bg-[#fafbfc] py-16 md:py-24 border-t border-slate-100 relative">
      <div id="why-choose-me" className="absolute -top-12 left-0" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-10 md:mb-14 scroll-pop">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Education &amp; Credentials
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-500">
            Academic background and official certifications from ETEC Center.
          </p>
        </div>

        {/* Part 1: Academic Timeline */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 shadow-2xs mb-12 md:mb-16 scroll-pop">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
            Academic Timeline
          </h3>

          <div className="relative pl-6 sm:pl-8 space-y-8">
            {/* Timeline vertical line */}
            <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-[2px] bg-slate-200" />

            {academicTimeline.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Node dot */}
                <div
                  className={`absolute -left-[27px] sm:-left-[35px] top-1 w-4 h-4 rounded-full border-2 bg-white transition-all ${
                    item.isHighlight
                      ? 'border-indigo-600 ring-4 ring-indigo-50'
                      : 'border-slate-300 group-hover:border-slate-500'
                  }`}
                />

                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-xs font-mono font-semibold text-slate-400">
                    {item.period}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {item.degree}
                </h4>

                <p className="text-xs sm:text-sm font-medium text-teal-600 mt-0.5">
                  {item.institution}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Minimalist Certificates Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Verified Certificates
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Official certificates granted by ETEC Center. Click any card to preview.
              </p>
            </div>
            <span className="hidden sm:inline-flex text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/70">
              4 Certificates
            </span>
          </div>

          {/* 2x2 Clean Compact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 scroll-pop">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-indigo-200 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Top Bar: Badge & Date */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${cert.badgeColor}`}>
                      {cert.badge}
                    </span>
                    <span className="text-xs font-medium text-slate-400">
                      {cert.issuedDate}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                    {cert.title}
                  </h4>

                  <div className="flex items-center gap-2 mt-1.5 text-xs text-slate-500">
                    <span className="font-semibold text-slate-600">{cert.issuer}</span>
                    <span>•</span>
                    <span className="font-mono text-slate-400">ID: {cert.credentialId}</span>
                  </div>

                  {/* Core Technical Skills Only (3-4 points) */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {cert.keySkills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-50 text-slate-700 border border-slate-100"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="flex items-center justify-between pt-4 mt-5 border-t border-slate-100 text-xs">
                  <span className="font-semibold text-indigo-600 group-hover:text-indigo-700 flex items-center gap-1">
                    <span>View Certificate</span>
                    <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>

                  <span className="text-[11px] text-slate-400">Click to preview</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificate Modal Lightbox (Clean, Focused Preview) */}
        {selectedCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="bg-white rounded-3xl border border-slate-200 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200 w-full max-w-2xl my-auto p-5 sm:p-7"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-4">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                    {selectedCert.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {selectedCert.issuer} • Granted {selectedCert.fullDate}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-xs cursor-pointer transition-colors"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              {/* Certificate Image Preview */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-inner flex items-center justify-center mb-4">
                <img
                  src={selectedCert.image}
                  alt={`${selectedCert.title} Certificate`}
                  className="w-full object-contain max-h-[420px]"
                />
              </div>

              {/* Bottom Details & Actions */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-slate-500 bg-slate-100 px-2 py-1 rounded">
                    ID: {selectedCert.credentialId}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => handleCopyId(selectedCert.credentialId, e)}
                    className="text-indigo-600 font-semibold hover:underline cursor-pointer"
                  >
                    {copiedId === selectedCert.credentialId ? '✓ Copied' : 'Copy ID'}
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={selectedCert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium transition-colors"
                  >
                    Open Full Image ↗
                  </a>
                  <a
                    href={selectedCert.image}
                    download={`Certificate-${selectedCert.credentialId.replace(/[^a-zA-Z0-9]/g, '_')}.jpg`}
                    className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-2xs transition-colors"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default EducationAndCertificates
