import React from 'react'

const CURRENT_YEAR = new Date().getFullYear()

export const Footer = ({ onNavigateHome }) => {
  const scrollToTop = () => {
    if (onNavigateHome) onNavigateHome()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNav = (e, hash) => {
    if (onNavigateHome) {
      e.preventDefault()
      onNavigateHome(hash)
    }
  }

  return (
    <footer className="w-full bg-white border-t border-slate-100 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-100">
          {/* Logo & Bio */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                scrollToTop()
              }}
              className="flex items-center group cursor-pointer select-none transition-transform active:scale-95 mb-2"
            >
              <span className="text-2xl font-black tracking-tight text-slate-950 group-hover:text-indigo-600 transition-colors">
                M
              </span>
              <span className="text-2xl font-normal tracking-tight text-slate-500 group-hover:text-slate-800 transition-colors">
                orfolio
              </span>
            </a>
            <p className="text-xs text-slate-400 font-medium max-w-xs">
              Siv Vannat • Interactive Web Developer specializing in Vue, Nuxt, React, and modern UI engineering.
            </p>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm font-medium text-slate-600">
            <a
              href="#tools"
              onClick={(e) => handleNav(e, '#tools')}
              className="hover:text-slate-950 transition-colors"
            >
              Tools
            </a>
            <a
              href="#projects"
              onClick={(e) => handleNav(e, '#projects')}
              className="hover:text-slate-950 transition-colors"
            >
              Projects
            </a>
            <a
              href="#education-certs"
              onClick={(e) => handleNav(e, '#education-certs')}
              className="hover:text-slate-950 transition-colors"
            >
              Education &amp; Certs
            </a>
            <a
              href="#about"
              onClick={(e) => handleNav(e, '#about')}
              className="hover:text-slate-950 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNav(e, '#contact')}
              className="hover:text-slate-950 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/share/1FHeVGjxLS/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-50 hover:bg-blue-50 border border-slate-200/80 flex items-center justify-center text-[#1877F2] transition-all hover:scale-105"
              aria-label="Facebook Profile"
              title="Facebook"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.001 10.125 11.854v-8.385H7.078v-3.469h3.047V9.429c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.491 0-1.956.93-1.956 1.886v2.259h3.328l-.532 3.469h-2.796v8.385C19.612 23.074 24 18.092 24 12.073z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/siv-vannat-6b7251425?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-50 hover:bg-sky-50 border border-slate-200/80 flex items-center justify-center text-[#0A66C2] transition-all hover:scale-105"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
              </svg>
            </a>

            <a
              href="https://t.me/sivvannat"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-50 hover:bg-sky-50 border border-slate-200/80 flex items-center justify-center text-[#26A5E4] transition-all hover:scale-105"
              aria-label="Telegram Profile"
              title="Telegram @sivvannat"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.91 3.79 20.3 20.84c-.27 1.21-.99 1.51-2.01.94l-5.56-4.1-2.68 2.58c-.3.3-.55.55-1.12.55l.4-5.67 10.32-9.32c.45-.4-.1-.63-.7-.23L6.2 13.62.72 11.91c-1.2-.37-1.23-1.2.25-1.78L22.4 1.85c1-.37 1.88.23 1.51 1.94z" />
              </svg>
            </a>

            <a
              href="mailto:vnat615@gmail.com"
              className="w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-700 transition-all hover:scale-105"
              aria-label="Send Email"
              title="vnat615@gmail.com"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="m3 7 9 6 9-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a
              href="https://github.com/vannat-24"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-700 transition-all hover:scale-105"
              aria-label="GitHub Profile"
              title="GitHub vannat-24"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
              aria-label="Scroll back to top"
              title="Back to Top"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {CURRENT_YEAR} Siv Vannat. Crafted with care and passion.</p>
          <p className="flex items-center gap-1.5">
            <span>Built with React 19, Vite &amp; Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
