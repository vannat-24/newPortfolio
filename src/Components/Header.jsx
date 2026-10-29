import React, { useState, useEffect } from 'react'

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeNav, setActiveNav] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Check current section for active highlighting
      const sections = ['tools', 'projects', 'education-certs', 'about', 'contact']
      const scrollPosition = window.scrollY + 90

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveNav(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Tools', href: '#tools', id: 'tools' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education & Certs', href: '#education-certs', id: 'education-certs' },
    { name: 'About', href: '#about', id: 'about' },
  ]

  const handleNavClick = (href, id) => {
    setActiveNav(id)
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Subtle top ambient purple accent line inspired by design preview */}
      <div className="h-[2px] w-full bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-400 opacity-90 shadow-[0_0_12px_rgba(99,102,241,0.5)]" />

      {/* Main Navbar Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-xs border-b border-slate-100'
            : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center group cursor-pointer select-none transition-transform duration-200 active:scale-95"
              aria-label="sivvannat home"
            >
              {/* Modern Name Typography */}
              <div className="flex items-baseline">
                <span className="text-[22px] md:text-[25px] font-black tracking-tight text-slate-900 transition-colors duration-200 group-hover:text-indigo-600">
                  siv
                </span>
                <span className="text-[22px] md:text-[25px] font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-amber-500 bg-clip-text text-transparent">
                  vannat
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 ml-1 mb-1 animate-pulse" title="Available for opportunities" />
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden md:flex items-center gap-7 lg:gap-9"
              aria-label="Primary Navigation"
            >
              {navLinks.map((link) => {
                const isActive = activeNav === link.id
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => handleNavClick(link.href, link.id)}
                    className={`relative text-[14px] lg:text-[15px] font-medium transition-colors duration-200 py-1 ${
                      isActive
                        ? 'text-slate-950 font-semibold'
                        : 'text-slate-600 hover:text-slate-950'
                    }`}
                  >
                    {link.name}
                    {/* Active / Hover subtle indicator */}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-slate-900 transition-all duration-300 rounded-full ${
                        isActive
                          ? 'w-full'
                          : 'w-0 hover:w-full group-hover:w-full'
                      }`}
                    />
                  </a>
                )
              })}
            </nav>

            {/* Right Action Buttons: Upload CV + Contact */}
            <div className="hidden md:flex items-center gap-3">
              {/* User Custom Upload CV Button Template */}
              <a
                href="/cv/Siv_Vannat_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="button upload-cv-btn"
                title="View & Download Siv Vannat's CV"
              >
                <svg
                  id="UploadToCloud"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16px"
                  width="16px"
                  className="icon"
                >
                  <path d="M0 0h24v24H0V0z" fill="none"></path>
                  <path
                    className="color000000 svgShape"
                    fill="#000000"
                    d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l4.65-4.65c.2-.2.51-.2.71 0L17 13h-3z"
                  ></path>
                </svg>
                Upload CV
              </a>

              <a
                href="#contact"
                onClick={() => handleNavClick('#contact', 'contact')}
                className={`inline-flex items-center justify-center px-4 py-2 rounded-full border text-xs sm:text-sm font-medium tracking-normal transition-all duration-300 active:scale-95 cursor-pointer ${
                  activeNav === 'contact'
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                    : 'border-slate-700/80 text-slate-800 hover:bg-slate-900 hover:text-white hover:border-slate-900 hover:shadow-md'
                }`}
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button (Hamburger) */}
            <div className="flex md:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile navigation menu"
                className="p-2.5 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-hidden"
              >
                {mobileMenuOpen ? (
                  // Close Icon
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  // Hamburger Icon
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out border-b border-slate-200 bg-white/95 backdrop-blur-xl shadow-lg overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 opacity-100 py-5' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleNavClick(link.href, link.id)}
              className="text-slate-700 hover:text-slate-950 font-medium text-base py-2 transition-colors border-b border-slate-100/70"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 pb-1 flex flex-col gap-3">
            <a
              href="/cv/Siv_Vannat_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="button upload-cv-btn w-full justify-center text-center"
            >
              <svg
                id="UploadToCloud"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                height="16px"
                width="16px"
                className="icon"
              >
                <path d="M0 0h24v24H0V0z" fill="none"></path>
                <path
                  className="color000000 svgShape"
                  fill="#000000"
                  d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l4.65-4.65c.2-.2.51-.2.71 0L17 13h-3z"
                ></path>
              </svg>
              Upload CV
            </a>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-slate-800 text-slate-900 text-base font-medium transition-all hover:bg-slate-900 hover:text-white text-center shadow-xs"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
