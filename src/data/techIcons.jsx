import React from 'react'

export const getTechIcon = (name) => {
  const normalized = name.toLowerCase().trim()

  if (normalized.includes('javascript') || normalized === 'js') {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path
          d="M6.5 17.5c.7.4 1.5.7 2.3.7 1.3 0 2.1-.7 2.1-1.7 0-1.1-.8-1.5-2.2-2.1-1.7-.7-2.8-1.6-2.8-3.2 0-1.8 1.4-3.2 3.6-3.2 1 0 1.8.3 2.5.7l-.7 1.8c-.6-.4-1.2-.6-1.8-.6-1 0-1.6.6-1.6 1.3 0 .9.7 1.3 2 1.8 1.8.8 3 1.7 3 3.4 0 2-1.5 3.5-4.1 3.5-1.2 0-2.3-.3-3.1-.8l.8-1.6zm8.8-7.3h2.3v6.7c0 1.8-.9 2.6-2.6 2.6-.7 0-1.5-.2-2-.5l.5-1.8c.4.2.8.4 1.3.4.8 0 1.2-.4 1.2-1.3v-6.1h-.7v0z"
          fill="#000000"
        />
      </svg>
    )
  }

  if (normalized.includes('html')) {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M4 2.5l1.6 18 6.4 1.8 6.4-1.8 1.6-18H4z" fill="#E34F26" />
        <path d="M12 4.1v16.3l4.9-1.4 1.3-14.9H12z" fill="#EF652A" />
        <path d="M12 7.7H7.7l.3 3.3H12v-3.3zm0 6.6H9.7l-.2-2.4H7.7l.4 5 3.9 1.1v-3.7z" fill="#EBEBEB" />
        <path d="M12 7.7v3.3h4l-.4 4.3-3.6 1v3.7l6.3-1.8.7-7.2H12zm0 6.6v3.7l.1-.03.1-.03V14.3H12z" fill="#FFFFFF" />
      </svg>
    )
  }

  if (normalized.includes('css') && !normalized.includes('tailwind')) {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M4 2.5l1.6 18 6.4 1.8 6.4-1.8 1.6-18H4z" fill="#1572B6" />
        <path d="M12 4.1v16.3l4.9-1.4 1.3-14.9H12z" fill="#33A9DC" />
        <path d="M12 7.7H7.7l.3 3.3H12v-3.3zm0 6.6H9.7l-.2-2.4H7.7l.4 5 3.9 1.1v-3.7z" fill="#EBEBEB" />
        <path d="M12 7.7v3.3h4l-.4 4.3-3.6 1v3.7l6.3-1.8.7-7.2H12z" fill="#FFFFFF" />
      </svg>
    )
  }

  if (normalized.includes('tailwind')) {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path
          d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.914.228 1.567.892 2.29 1.626C13.667 10.61 15.097 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.914-.228-1.567-.892-2.29-1.626C16.335 6.19 14.905 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.914.228 1.567.892 2.29 1.626C7.667 17.81 9.097 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.914-.228-1.567-.892-2.29-1.626C10.335 13.39 8.905 12 6.001 12z"
          fill="#06B6D4"
        />
      </svg>
    )
  }

  if (normalized.includes('bootstrap')) {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#7952B3" />
        <path
          d="M7 6h5.8c1.8 0 3 .9 3 2.3 0 1.1-.7 1.9-1.7 2.2 1.3.3 2.1 1.2 2.1 2.5 0 1.6-1.3 2.6-3.3 2.6H7V6zm2.4 3.7h3.1c.7 0 1.2-.4 1.2-1 0-.6-.5-1-1.2-1H9.4v2zm0 4.1h3.4c.8 0 1.4-.4 1.4-1.1 0-.7-.6-1.1-1.4-1.1H9.4v2.2z"
          fill="#FFFFFF"
        />
      </svg>
    )
  }

  if (normalized.includes('network') || normalized.includes('hardware')) {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="7" rx="2" />
        <path d="M6 6.5h.01M10 6.5h.01M14 6.5h.01M18 6.5h.01" />
        <rect x="3" y="15" width="7" height="6" rx="1.5" />
        <rect x="14" y="15" width="7" height="6" rx="1.5" />
        <path d="M6.5 10v5M17.5 10v5" />
      </svg>
    )
  }

  if (normalized.includes('nuxt')) {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M10.5 19.5l-6-10.5a1.5 1.5 0 011.3-2.25h3.9a1.5 1.5 0 011.3.75l2.7 4.7 2.1-3.7a1.5 1.5 0 011.3-.75h3.9a1.5 1.5 0 011.3 2.25l-6 10.5a1.5 1.5 0 01-2.6 0z" fill="#00DC82" />
        <path d="M14.5 19.5l-3.2-5.6 2.1-3.7a1.5 1.5 0 011.3-.75h3.9a1.5 1.5 0 011.3 2.25l-4.1 7.8h-1.3z" fill="#00C58E" />
      </svg>
    )
  }

  if (normalized.includes('vue')) {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M1.5 3h4.6l5.9 10.2L17.9 3h4.6L12 21 1.5 3z" fill="#42B883" />
        <path d="M6.1 3h3.8l2.1 3.6L14.1 3h3.8L12 13.2 6.1 3z" fill="#35495E" />
      </svg>
    )
  }

  if (normalized.includes('react')) {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
      </svg>
    )
  }

  if (normalized.includes('typescript') || normalized === 'ts') {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path d="M4.5 10.5h6v1.8H8.5V18H6.5v-5.7H4.5v-1.8zm8 2.5c.7-.6 1.6-.9 2.6-.9 1.2 0 2.2.4 2.8 1.1.6.7.9 1.6.9 2.8 0 1.2-.4 2.2-1.1 2.9-.7.7-1.7 1-2.9 1-.9 0-1.7-.2-2.3-.5v-2c.6.4 1.3.7 2 .7.7 0 1.2-.2 1.6-.5.4-.4.6-.9.6-1.6 0-.7-.2-1.2-.6-1.5-.4-.3-1-.5-1.7-.5-.6 0-1.1.1-1.6.3l-.3-1.8h.6z" fill="#FFFFFF" />
      </svg>
    )
  }

  if (normalized.includes('python')) {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path
          d="M11.87 2.25c-4.23 0-3.95 1.83-3.95 1.83l.01 1.9h4.03v.57H6.28S3.5 6.23 3.5 10.47c0 4.23 2.42 4.09 2.42 4.09h1.44v-2.02s-.08-2.42 2.37-2.42h4.08s2.29.04 2.29-2.26V4.51s.34-2.26-4.23-2.26zm-2.25 1.23c.39 0 .7.31.7.7s-.31.7-.7.7-.7-.31-.7-.7.31-.7.7-.7zm2.51 18.27c4.23 0 3.95-1.83 3.95-1.83l-.01-1.9h-4.03v-.57h5.68s2.78.32 2.78-3.92c0-4.23-2.42-4.09-2.42-4.09h-1.44v2.02s.08 2.42-2.37 2.42H9.88s-2.29-.04-2.29 2.26v3.35s-.34 2.26 4.23 2.26zm2.25-1.23c-.39 0-.7-.31-.7-.7s.31-.7.7-.7.7.31.7.7-.31.7-.7.7z"
          fill="#3776AB"
        />
      </svg>
    )
  }

  if (normalized.includes('git') || normalized.includes('github')) {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path
          d="M21.6 10.8l-8.4-8.4c-.8-.8-2.1-.8-2.9 0L8.6 4.1l3.7 3.7c.9-.3 1.9-.1 2.6.6.7.7.9 1.7.6 2.6l3.6 3.6c.9-.3 1.9-.1 2.6.6 1.1 1.1 1.1 2.9 0 4-1.1 1.1-2.9 1.1-4 0-.8-.8-1-2-.6-2.9l-3.3-3.3v7.3c.3.2.6.5.8.8 1.1 1.1 1.1 2.9 0 4-1.1 1.1-2.9 1.1-4 0-1.1-1.1-1.1-2.9 0-4 .3-.3.7-.6 1.1-.7v-7.3c-.4-.1-.8-.4-1.1-.7-1.1-1.1-1.1-2.9 0-4 .3-.3.7-.6 1.1-.7L2.4 10.8c-.8.8-.8 2.1 0 2.9l8.4 8.4c.8.8 2.1.8 2.9 0l7.9-7.9c.8-.9.8-2.2 0-3.4z"
          fill="#F05032"
        />
      </svg>
    )
  }

  if (normalized.includes('vite')) {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M22 4.5l-9.8 17.2c-.4.7-1.4.7-1.8 0L.6 4.5c-.5-.9.3-2 1.3-1.8l9.6 1.7 8.8-1.7c1.1-.2 1.9.9 1.7 1.8z" fill="#BD34FE" />
        <path d="M17.1 2.2L9.2 17.5c-.3.6-.9.6-1.2 0L5.3 12 1.9 2.7c-.2-.7.4-1.3 1.1-1.2l6.7 1.2 6.3-1.2c.8-.2 1.4.4 1.1 1.2v-.5z" fill="#41D1FF" />
        <path d="M12.9 5.8l-5.6 11.2c-.2.5.3 1 .8.8l3.1-1.4-.8 4.2c-.1.6.7 1 1.1.5l6-7.8c.4-.5 0-1.2-.6-1.1l-3.3.4 1.3-6.2c.1-.6-.6-1-1-.5z" fill="#FFD025" />
      </svg>
    )
  }

  if (normalized.includes('figma')) {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" fill="#0ACF83" />
        <path d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" fill="#A259FF" />
        <path d="M4 4c0-2.2 1.8-4 4-4h4v8H8C5.8 8 4 6.2 4 4z" fill="#F24E1E" />
        <path d="M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z" fill="#FF7262" />
        <path d="M20 12c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" fill="#1ABCFE" />
      </svg>
    )
  }

  if (normalized.includes('api')) {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="5" width="20" height="14" rx="3" stroke="#10B981" strokeWidth="2" />
        <path d="M6 10l3 2-3 2M13 14h5" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  if (normalized.includes('storage')) {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    )
  }

  if (normalized.includes('code') || normalized.includes('vs code')) {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M18.5 2.1l-8 7.3L5.4 5.2 2 7.1l5.4 4.9L2 16.9l3.4 1.9 5.1-4.2 8 7.3c.7.6 1.8.1 1.8-.8V2.9c0-.9-1.1-1.4-1.8-.8z" fill="#007ACC" />
        <path d="M18.5 2.1c.3-.3.8-.3 1.1 0 .3.3.4.7.4 1.1v17.6c0 .4-.1.8-.4 1.1-.3.3-.8.3-1.1 0l-8-7.3 8-12.5z" fill="#1F9CF0" />
      </svg>
    )
  }

  if (normalized === 'c') {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#A8B9CC" />
        <path d="M15.5 8.5a4.5 4.5 0 00-7 3.5 4.5 4.5 0 007 3.5" stroke="#1E293B" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    )
  }

  if (normalized.includes('algorithm') || normalized.includes('oop') || normalized.includes('logic')) {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="6" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="18" r="3" />
        <path d="M8.7 10.7l6.6-3.4M8.7 13.3l6.6 3.4" />
      </svg>
    )
  }

  if (normalized.includes('c++') || normalized.includes('arduino')) {
    return (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#00599C" />
        <path d="M11 7a5 5 0 00-5 5 5 5 0 005 5h1v-2h-1a3 3 0 01-3-3 3 3 0 013-3h1V7h-1zm3 3h1.5v1.5H17v1h-1.5V14h-1v-1.5H13v-1h1.5V10zm4.5 0H20v1.5h1.5v1H20V14h-1v-1.5h-1.5v-1H19V10z" fill="#FFFFFF" />
      </svg>
    )
  }

  // Default fallback badge
  return (
    <svg className="w-5 h-5 shrink-0 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  )
}
