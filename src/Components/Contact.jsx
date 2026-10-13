import React, { useState } from 'react'

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)

  const emailAddress = 'vnat615@gmail.com'
  const telegramUsername = '@sivvannat'
  const telegramUrl = 'https://t.me/sivvannat'
  const linkedinUrl = 'https://www.linkedin.com/in/siv-vannat-6b7251425?utm_source=share_via&utm_content=profile&utm_medium=member_ios'
  const facebookUrl = 'https://www.facebook.com/share/1FHeVGjxLS/?mibextid=wwXIfr'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = encodeURIComponent(
      formData.subject ? `[Portfolio] ${formData.subject}` : `[Portfolio] Message from ${formData.name || 'Visitor'}`
    )
    const body = encodeURIComponent(
      `Hello Siv Vannat,\n\n${formData.message}\n\n---\nSender Details:\nName: ${formData.name}\nEmail: ${formData.email}`
    )

    // Open visitor's default email client / Gmail addressed directly to Siv Vannat
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`

    setSubmitted(true)
  }

  const handleOpenGmailWeb = () => {
    const subject = encodeURIComponent(
      formData.subject ? `[Portfolio] ${formData.subject}` : `[Portfolio] Message from ${formData.name || 'Visitor'}`
    )
    const body = encodeURIComponent(
      `Hello Siv Vannat,\n\n${formData.message}\n\n---\nSender Details:\nName: ${formData.name}\nEmail: ${formData.email}`
    )
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${subject}&body=${body}`, '_blank')
  }

  const handleSendViaTelegram = () => {
    const text = encodeURIComponent(
      `Hello Siv Vannat,\n\nName: ${formData.name || 'Visitor'}\nEmail: ${formData.email || 'N/A'}\nSubject: ${formData.subject || 'Portfolio Inquiry'}\n\nMessage:\n${formData.message || 'Hello!'}`
    )
    window.open(`https://t.me/sivvannat?text=${text}`, '_blank')
    setSubmitted(true)
  }

  return (
    <section id="contact" className="w-full bg-[#fafbfc] py-20 md:py-28 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-16 md:mb-20 scroll-pop">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-tight">
            Let's Talk &amp; Collaborate
          </h2>
          <p className="mt-4 text-slate-500 text-[15px] sm:text-[16px] leading-relaxed">
            Have an exciting project, a potential role, or want to discuss modern web architecture? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-5 scroll-pop">
            {/* Email Card with Copy Button */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/70 shadow-xs hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Direct Email
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-base sm:text-lg font-bold text-slate-900 hover:text-indigo-600 transition-colors break-all"
                >
                  {emailAddress}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                >
                  {copiedEmail ? 'Copied!' : 'Copy Email'}
                </button>
              </div>
            </div>

            {/* Telegram Direct Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/70 shadow-xs hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Instant Messaging
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#26A5E4] bg-sky-50 px-2 py-0.5 rounded-full">
                  Fast Reply
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#26A5E4">
                      <path d="M23.91 3.79 20.3 20.84c-.27 1.21-.99 1.51-2.01.94l-5.56-4.1-2.68 2.58c-.3.3-.55.55-1.12.55l.4-5.67 10.32-9.32c.45-.4-.1-.63-.7-.23L6.2 13.62.72 11.91c-1.2-.37-1.23-1.2.25-1.78L22.4 1.85c1-.37 1.88.23 1.51 1.94z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900">
                      {telegramUsername}
                    </h4>
                    <p className="text-xs text-slate-500">Telegram Direct Chat</p>
                  </div>
                </div>
                <a
                  href={telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-xs font-semibold bg-[#26A5E4] hover:bg-sky-600 text-white transition-all active:scale-95 cursor-pointer shrink-0 ml-3 shadow-xs"
                >
                  Message &rarr;
                </a>
              </div>
            </div>

            {/* Custom Interactive Social Split-Door Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/70 shadow-xs flex flex-col items-center justify-center text-center space-y-3">
              <div className="w-full flex items-center justify-between mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Social Channels
                </span>
                <span className="text-[11px] font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full hidden md:inline-block">
                  Hover to Open
                </span>
              </div>

              {/* The User Split Card Component */}
              <div className="card social-card select-none">
                <span>Social</span>
                <a
                  className="social-link"
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Profile"
                  title="Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1877F2" aria-hidden="true">
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.001 10.125 11.854v-8.385H7.078v-3.469h3.047V9.429c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.491 0-1.956.93-1.956 1.886v2.259h3.328l-.532 3.469h-2.796v8.385C19.612 23.074 24 18.092 24 12.073z" />
                  </svg>
                </a>
                <a
                  className="social-link"
                  href={telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram Profile"
                  title="Telegram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#26A5E4" aria-hidden="true">
                    <path d="M23.91 3.79 20.3 20.84c-.27 1.21-.99 1.51-2.01.94l-5.56-4.1-2.68 2.58c-.3.3-.55.55-1.12.55l.4-5.67 10.32-9.32c.45-.4-.1-.63-.7-.23L6.2 13.62.72 11.91c-1.2-.37-1.23-1.2.25-1.78L22.4 1.85c1-.37 1.88.23 1.51 1.94z" />
                  </svg>
                </a>
                <a
                  className="social-link"
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0A66C2" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
                  </svg>
                </a>
                <a
                  className="social-link"
                  href={`mailto:${emailAddress}`}
                  aria-label="Email"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#5F6368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </a>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/70 shadow-xs hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Source Code &amp; Repos
                </span>
                <svg className="w-5 h-5 text-slate-700" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900">
                    github.com/vannat-24
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">Explore open-source projects and code commits</p>
                </div>
                <a
                  href="https://github.com/vannat-24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-xs font-semibold bg-[#0a0f1d] hover:bg-slate-800 text-white transition-all active:scale-95 cursor-pointer shrink-0 ml-3"
                >
                  Visit &rarr;
                </a>
              </div>
            </div>

            {/* Location & Timezone Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/70 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Based In
              </span>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-lg">
                  🇰🇭
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Phnom Penh, Cambodia</h4>
                  <p className="text-xs text-slate-500">Indochina Time (UTC+07:00) • Open to remote worldwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 scroll-pop">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/70 shadow-xs">
              {submitted ? (
                <div className="py-10 text-center space-y-5">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-3xl font-bold shadow-xs">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Message Ready!</h3>
                    <p className="mt-2 text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                      Your message has been addressed directly to <span className="font-semibold text-slate-800">{emailAddress}</span>. If your email app didn't open automatically, you can also send directly via:
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleOpenGmailWeb}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-600 text-xs font-bold transition-colors cursor-pointer border border-rose-200/60"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.272H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                      </svg>
                      <span>Open in Gmail (Web)</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleSendViaTelegram}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#229ED9]/10 hover:bg-[#229ED9]/20 text-[#0088cc] text-xs font-bold transition-colors cursor-pointer border border-[#229ED9]/30"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.37.74-.56 2.92-1.27 4.86-2.11 5.83-2.52 2.77-1.18 3.35-1.39 3.73-1.39.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                      </svg>
                      <span>Send via Telegram</span>
                    </button>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false)
                        setFormData({ name: '', email: '', subject: '', message: '' })
                      }}
                      className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Field */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all placeholder:text-slate-400"
                      />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Your Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Job Opportunity / Hello"
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your idea, timeline, or question..."
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all placeholder:text-slate-400 resize-y"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0a0f1d] hover:bg-slate-800 text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>Send via Email</span>
                      <span>&rarr;</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendViaTelegram}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#229ED9]/10 hover:bg-[#229ED9]/20 text-[#0088cc] font-semibold text-sm transition-all duration-200 border border-[#229ED9]/25 hover:border-[#229ED9]/40 active:scale-95 cursor-pointer"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.37.74-.56 2.92-1.27 4.86-2.11 5.83-2.52 2.77-1.18 3.35-1.39 3.73-1.39.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                      </svg>
                      <span>Send via Telegram</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
