import React from 'react'
import profileImg from '../assets/profile.jpg'

export const Hero = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden py-12 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & Details */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left z-10">
            {/* Main Greeting Heading */}
            <div className="space-y-1 hero-pop-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-black tracking-tight text-slate-900 leading-[1.1]">
                Hey, This is
              </h1>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-black tracking-tight leading-[1.1]">
                <span className="text-slate-950">Siv </span>
                <span className="text-orange-400">Vannat</span>
              </h2>
            </div>

            {/* Sub-headline */}
            <p className="mt-4 text-xl sm:text-2xl md:text-[28px] text-slate-500 font-normal tracking-tight hero-pop-2">
              an interactive Web Developer
            </p>

            {/* Action Buttons Row */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 hero-pop-3">
              {/* Let's Talk CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#0a0f1d] hover:bg-slate-800 text-white font-medium text-[15px] transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 group cursor-pointer"
              >
                <span>Let's Talk</span>
                <span className="text-base transition-transform duration-200 group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>

              {/* Telegram Contact Pill */}
              <a
                href="https://t.me/sivvannat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#f0f9ff] border border-sky-200/80 hover:bg-sky-100/80 text-[#0284c7] font-medium text-[14px] sm:text-[15px] transition-all duration-200 hover:shadow-xs active:scale-95 cursor-pointer"
              >
                <svg
                  className="w-4 h-4 text-[#0284c7]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.91 3.79 20.3 20.84c-.27 1.21-.99 1.51-2.01.94l-5.56-4.1-2.68 2.58c-.3.3-.55.55-1.12.55l.4-5.67 10.32-9.32c.45-.4-.1-.63-.7-.23L6.2 13.62.72 11.91c-1.2-.37-1.23-1.2.25-1.78L22.4 1.85c1-.37 1.88.23 1.51 1.94z" />
                </svg>
                <span>Telegram @sivvannat</span>
              </a>

              {/* GitHub Link Pill */}
              <a
                href="https://github.com/vannat-24"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#fdf2f8] border border-pink-200/70 hover:bg-pink-100/70 text-[#db2777] font-medium text-[14px] sm:text-[15px] transition-all duration-200 hover:shadow-xs active:scale-95 cursor-pointer"
              >
                {/* Globe / Network Web SVG Icon */}
                <svg
                  className="w-4 h-4 text-[#db2777]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
                <span>github.com/vannat-24</span>
              </a>

              {/* LinkedIn Link Pill */}
              <a
                href="https://www.linkedin.com/in/siv-vannat-6b7251425?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#f0f4ff] border border-blue-200/70 hover:bg-blue-100/70 text-[#0a66c2] font-medium text-[14px] sm:text-[15px] transition-all duration-200 hover:shadow-xs active:scale-95 cursor-pointer"
              >
                <svg
                  className="w-4 h-4 text-[#0a66c2]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Description Paragraph */}
            <p className="mt-8 sm:mt-10 text-slate-500 text-[14px] sm:text-[15px] leading-relaxed max-w-xl font-normal hero-pop-4">
              Passionate front-end &amp; software craftsman specializing in building high-performance
              modern web apps, intuitive digital experiences, and scalable software solutions.
            </p>
          </div>

          {/* Right Column: Profile Image with Figma Style Layered Badges */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative hero-pop-img">
            
            {/* Outer Container with relative positioning for floating elements */}
            <div className="relative flex items-center justify-center">
              
              {/* Outer large subtle rounded background circle */}
              <div className="absolute w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] md:w-[460px] md:h-[460px] rounded-full bg-slate-100/80 -z-10" />

              {/* Floating Decorative Dots (Top-left of the circle) */}
              <div className="absolute -top-3 left-4 sm:-top-5 sm:left-6 flex items-center gap-3 z-20">
                {/* Orange hollow circle */}
                <div className="w-7 h-7 rounded-full border-2 border-orange-400 bg-white" />
                {/* Dark solid dot */}
                <div className="w-3.5 h-3.5 rounded-full bg-slate-900" />
              </div>

              {/* Profile Image Badge with Concentric Rings */}
              <div className="relative p-2 rounded-full bg-white shadow-xl shadow-slate-200/60 ring-1 ring-slate-100">
                <div className="relative w-64 h-64 sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] rounded-full overflow-hidden border-[5px] border-slate-900 bg-slate-100">
                  <img
                    src={profileImg}
                    alt="Siv Vannat - Interactive Web Developer"
                    className="w-full h-full object-cover object-[center_18%] select-none transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
