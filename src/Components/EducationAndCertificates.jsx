import React, { useState, useEffect } from 'react'

export const EducationAndCertificates = () => {
  const [selectedCert, setSelectedCert] = useState(null)
  const [copiedId, setCopiedId] = useState(null)
  const [isZoomed, setIsZoomed] = useState(false)

  // Close modal on Escape key & manage scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCert(null)
        setIsZoomed(false)
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
      category: null,
      degree: 'Bachelor of Engineering in Information Technology Engineering (B.Eng. ITE)',
      institution: 'Royal University of Phnom Penh (RUPP)',
      nodeColor: 'sky',
    },
    {
      period: '2025 — 2026',
      category: 'Professional Certifications',
      degree: 'Specialized Professional Web Development Short Courses',
      institution: 'ETEC Center',
      nodeColor: 'emerald',
    },
    {
      period: '2022 — 2025',
      category: null,
      degree: 'Upper Secondary Education Diploma (Bac II)',
      institution: 'Anlong Veng High School',
      nodeColor: 'emerald',
    },
    {
      period: '2018 — 2021',
      category: null,
      degree: 'Junior High School Diploma',
      institution: 'Hun Sen Toul Ta Sek Secondary School',
      nodeColor: 'emerald',
    },
  ]

  const certificates = [
    {
      id: 'CERT-JAVA-2026',
      title: 'Java Backend Development',
      subtitle: 'Certificate of Completion',
      recipient: 'Siv Vannat',
      issuer: 'Java Backend Architecture Track',
      signer: 'Dr. Stephen Strange',
      issuedDate: 'September 23, 2026',
      rawDate: '23/09/2026',
      credentialId: 'CERTIS-JB-2026-923',
      grade: 'Certificate of Completion',
      description:
        'Official certificate presented to Siv Vannat for successful completion and mastery of Java backend architecture, object-oriented system design, server-side services, and database integration.',
      skills: ['Java', 'Backend Architecture', 'OOP Systems', 'RESTful APIs', 'Database Design'],
      verified: true,
      hasDocument: true,
      image: '/certificates/cert-java-backend.png',
      pdf: '/certificates/certificate-java-backend.pdf',
      badge: 'Java Backend',
      themeColor: 'from-blue-600 via-indigo-600 to-sky-600',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200/80',
      cardBorder: 'border-blue-100 hover:border-blue-300',
    },
    {
      id: 'CERT-COMP-2026',
      title: 'Software Engineering & Web Development',
      subtitle: 'Certificate of Completion',
      recipient: 'Siv Vannat',
      issuer: 'Software Engineering Department',
      signer: 'Peng Sophat',
      issuedDate: 'January 12, 2026',
      rawDate: '12/01/2026',
      credentialId: 'CURTIS-SE-2026-112',
      grade: 'Certificate of Completion',
      description:
        'Official certificate of completion awarded to Siv Vannat for demonstrated excellence in full-stack software development workflows, responsive user interfaces, and modular web architecture.',
      skills: ['Full-Stack Development', 'Vue.js & Nuxt', 'JavaScript ES6+', 'UI Architecture', 'Algorithms'],
      verified: true,
      hasDocument: true,
      image: '/certificates/cert-completion.png',
      pdf: '/certificates/certificate-completion.pdf',
      badge: 'Software Engineering',
      themeColor: 'from-amber-500 via-orange-500 to-yellow-600',
      badgeBg: 'bg-amber-50 text-amber-800 border-amber-200/80',
      cardBorder: 'border-amber-100 hover:border-amber-300',
    },
  ]

  const displayedCertificates = certificates

  return (
    <section id="education-certs" className="w-full bg-[#fafbfc] py-20 md:py-28 border-t border-slate-100 relative">
      {/* Anchor alias so old links continue to work smoothly */}
      <div id="why-choose-me" className="absolute -top-12 left-0" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-8 md:mb-12 scroll-pop">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-tight">
            Education
          </h2>
          <p className="mt-2 text-xl sm:text-2xl font-bold text-slate-700 tracking-tight">
            Academic Timeline
          </p>
        </div>

        {/* Academic Timeline Card (Matches user specification) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-200/80 shadow-xs mb-16 md:mb-20 scroll-pop">
          <div className="relative pl-7 sm:pl-9 space-y-10 sm:space-y-12">
            {/* Continuous vertical timeline connector line */}
            <div className="absolute left-[8px] sm:left-[10px] top-3 bottom-3 w-[2px] bg-teal-400" />

            {academicTimeline.map((item, idx) => {
              const isSky = item.nodeColor === 'sky'

              return (
                <div key={idx} className="relative group">
                  {/* Concentric Circle Timeline Node */}
                  <div
                    className={`absolute -left-[30px] sm:-left-[38px] top-0.5 w-6 h-6 rounded-full bg-white border-2 flex items-center justify-center transition-transform group-hover:scale-110 shadow-xs ${
                      isSky ? 'border-sky-500' : 'border-teal-500'
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        isSky ? 'bg-sky-500' : 'bg-teal-500'
                      }`}
                    />
                  </div>

                  {/* Badges / Period row */}
                  <div className="flex items-center gap-2.5 flex-wrap mb-2">
                    <span
                      className={`inline-flex items-center px-3 py-0.5 rounded-full text-xs font-mono font-semibold border ${
                        isSky
                          ? 'bg-sky-50 text-sky-700 border-sky-200/70'
                          : 'bg-emerald-50 text-emerald-700 border-emerald-200/70'
                      }`}
                    >
                      {item.period}
                    </span>

                    {item.category && (
                      <span className="text-xs font-mono text-slate-500">
                        {item.category}
                      </span>
                    )}
                  </div>

                  {/* Degree / Course Title */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                    {item.degree}
                  </h3>

                  {/* Institution Name */}
                  <p className="text-sm sm:text-base font-semibold text-teal-600 mt-1">
                    {item.institution}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Part 2: Verified Certificates Showcase Header */}
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 scroll-pop">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Certificates &amp; Credentials
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl leading-relaxed">
                Explore official certificates earned by Siv Vannat. Click any certificate to inspect full document previews, signatures, and downloadable PDF credentials.
              </p>
            </div>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 scroll-pop">
            {displayedCertificates.map((cert) => (
              <div
                key={cert.id}
                onClick={() => {
                  setSelectedCert(cert)
                  setIsZoomed(false)
                }}
                className={`bg-white rounded-3xl border ${cert.cardBorder} shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer overflow-hidden relative`}
              >
                {/* Visual Certificate Preview Card (for certificates with uploaded documents) */}
                {cert.hasDocument && cert.image && (
                  <div className="relative bg-gradient-to-b from-slate-100 to-slate-50 p-4 sm:p-5 border-b border-slate-100 overflow-hidden">
                    {/* Realistic Certificate Frame */}
                    <div className="relative rounded-2xl overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-300 border border-slate-200/80 bg-white">
                      <img
                        src={cert.image}
                        alt={`${cert.title} Certificate`}
                        className="w-full h-52 sm:h-64 object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                      />

                      {/* Glassmorphic hover overlay */}
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 backdrop-blur-[2px]">
                        <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-slate-900 font-bold text-xs shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <span>Click to View Full Document</span>
                        </span>
                      </div>
                    </div>

                    {/* Top Floating Badge */}
                    <div className="absolute top-6 left-7 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-white/95 backdrop-blur-md text-slate-800 shadow-sm border border-slate-200/80 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Original Document
                      </span>
                    </div>

                    {/* Direct PDF Link */}
                    {cert.pdf && (
                      <a
                        href={cert.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="absolute top-6 right-7 px-3 py-1 rounded-full text-[11px] font-bold bg-white/95 backdrop-blur-md text-indigo-600 hover:text-indigo-800 hover:bg-white shadow-sm border border-slate-200/80 flex items-center gap-1 transition-colors"
                        title="Open PDF in new tab"
                      >
                        <span>PDF</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                )}

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex flex-col justify-between grow">
                  <div>
                    {/* Header: ID & Verification Status */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${cert.badgeBg}`}>
                          {cert.badge}
                        </span>
                        <span className="text-[11px] font-mono font-bold text-slate-400 bg-slate-100 px-2.5 py-0.5 rounded-full">
                          ID: {cert.credentialId}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                        <svg className="w-3.5 h-3.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Verified
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {cert.title}
                    </h4>

                    {/* Authority & Issued Date */}
                    <div className="flex flex-wrap items-center gap-2 mt-2 text-xs text-slate-500 font-medium">
                      <span className="font-semibold text-slate-700">
                        {cert.signer ? `Signed by ${cert.signer}` : cert.issuer}
                      </span>
                      <span>•</span>
                      <span>{cert.issuedDate}</span>
                    </div>

                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  {/* Skills & Action Buttons */}
                  <div className="mt-6 pt-4 border-t border-slate-100 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-100 text-slate-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs font-bold text-indigo-600 group-hover:text-indigo-800 transition-colors flex items-center gap-1">
                        <span>Inspect Certificate &amp; Details</span>
                        <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                      </span>

                      {cert.hasDocument && cert.pdf && (
                        <a
                          href={cert.pdf}
                          download
                          onClick={(e) => e.stopPropagation()}
                          className="text-xs font-semibold text-slate-500 hover:text-slate-900 flex items-center gap-1 px-2.5 py-1 rounded-lg hover:bg-slate-100 transition-colors"
                          title="Download PDF Certificate"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          <span>PDF</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificate Modal Lightbox Preview */}
        {selectedCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-sm overflow-y-auto"
            onClick={() => {
              setSelectedCert(null)
              setIsZoomed(false)
            }}
          >
            <div
              className={`bg-white rounded-3xl border border-slate-200 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200 w-full my-auto transition-all ${
                selectedCert.hasDocument ? 'max-w-4xl' : 'max-w-xl'
              } p-6 sm:p-8`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Bar / Close Button */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Verified Official Credential
                  </span>
                  <span className="text-xs font-mono font-semibold text-slate-400">
                    ID: {selectedCert.credentialId}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedCert(null)
                    setIsZoomed(false)
                  }}
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-sm cursor-pointer transition-colors"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              {/* Main Content: 2-column if image document is present */}
              <div className={`grid gap-6 ${selectedCert.hasDocument ? 'grid-cols-1 lg:grid-cols-12' : 'grid-cols-1'}`}>
                {/* Left Column: Visual Certificate Document */}
                {selectedCert.hasDocument && selectedCert.image && (
                  <div className="lg:col-span-7 flex flex-col space-y-3">
                    <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-inner group">
                      <img
                        src={selectedCert.image}
                        alt={`${selectedCert.title} High Resolution Certificate`}
                        className={`w-full transition-transform duration-300 ${
                          isZoomed ? 'scale-150 cursor-zoom-out' : 'scale-100 cursor-zoom-in'
                        } object-contain max-h-[460px]`}
                        onClick={() => setIsZoomed(!isZoomed)}
                      />

                      {/* Zoom Indicator badge */}
                      <button
                        type="button"
                        onClick={() => setIsZoomed(!isZoomed)}
                        className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white text-xs font-bold backdrop-blur-md flex items-center gap-1.5 shadow-md transition-colors cursor-pointer"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                        <span>{isZoomed ? 'Zoom Out' : 'Zoom In'}</span>
                      </button>
                    </div>

                    {/* PDF Action Buttons below preview */}
                    {selectedCert.pdf && (
                      <div className="grid grid-cols-2 gap-3 pt-1">
                        <a
                          href={selectedCert.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2.5 px-4 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          <span>Open PDF In Tab</span>
                        </a>

                        <a
                          href={selectedCert.pdf}
                          download
                          className="py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          <span>Download PDF</span>
                        </a>
                      </div>
                    )}
                  </div>
                )}

                {/* Right / Main Info Column */}
                <div className={`space-y-5 ${selectedCert.hasDocument ? 'lg:col-span-5' : 'col-span-1'}`}>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-tight">
                      {selectedCert.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      {selectedCert.subtitle || 'Official Certification'}
                    </p>
                  </div>

                  {/* Metadata Table */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2.5 text-xs sm:text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 font-medium">Recipient:</span>
                      <strong className="text-slate-900 font-bold bg-amber-50 text-amber-900 px-2 py-0.5 rounded-md border border-amber-200/50">
                        {selectedCert.recipient || 'Siv Vannat'}
                      </strong>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 font-medium">Issued / Signed By:</span>
                      <strong className="text-slate-800">
                        {selectedCert.signer || selectedCert.issuer}
                      </strong>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 font-medium">Issue Date:</span>
                      <span className="text-slate-800 font-semibold">
                        {selectedCert.issuedDate} {selectedCert.rawDate ? `(${selectedCert.rawDate})` : ''}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 font-medium">Credential ID:</span>
                      <div className="flex items-center gap-1.5">
                        <code className="text-slate-800 font-mono font-bold bg-slate-200/60 px-2 py-0.5 rounded text-xs">
                          {selectedCert.credentialId}
                        </code>
                        <button
                          type="button"
                          onClick={(e) => handleCopyId(selectedCert.credentialId, e)}
                          className="text-[11px] font-bold text-indigo-600 hover:text-indigo-800 px-1.5 py-0.5 rounded hover:bg-indigo-50 cursor-pointer"
                          title="Copy Credential ID"
                        >
                          {copiedId === selectedCert.credentialId ? '✓ Copied' : 'Copy'}
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 font-medium">Verification Standing:</span>
                      <span className="text-emerald-600 font-bold">{selectedCert.grade}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Credential Scope
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {selectedCert.description}
                    </p>
                  </div>

                  {/* Competencies */}
                  <div>
                    <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Verified Competencies
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedCert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200/70"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Seal statement */}
                  <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-start gap-2.5">
                    <span className="text-emerald-600 text-base">🛡️</span>
                    <p className="text-[11px] text-emerald-800 leading-relaxed font-medium">
                      This credential has been digitally verified and associated with the engineering portfolio of <strong>Siv Vannat</strong>.
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCert(null)
                        setIsZoomed(false)
                      }}
                      className="w-full py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors cursor-pointer"
                    >
                      Close Credential View
                    </button>
                  </div>
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
