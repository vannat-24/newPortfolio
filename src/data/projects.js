import smsPreview from '../assets/student-management.png'
import luminaBooksPreview from '../assets/lumina-books.png'

export const projects = [
  {
    id: 1,
    slug: 'student-management-system',
    title: 'Student Management System',
    subtitle: 'Full-Stack School & Classroom Administration Portal',
    category: 'Web Application',
    year: '2025 - 2026',
    shortDescription:
      'Streamlined school portal for automated attendance, grade recording, and student academic performance.',
    description:
      'A comprehensive School Management System engineered to streamline campus administration. It simplifies student attendance tracking, automated grade recording, academic performance monitoring, and real-time school announcements across customizable user portals with high data integrity and responsive UX.',
    image: smsPreview,
    imageAlt: 'Student Management System SMS Portal Dashboard Showcase',
    liveUrl: 'https://student-management-system-two-phi.vercel.app/',
    githubUrl: 'https://github.com/vannat-24/student-management-system2.git',
    techStack: [
      'Vue.js',
      'Nuxt.js',
      'Tailwind CSS',
      'Vue Router',
      'REST API / JSON Server',
      'Kantumruy Pro & Inter'
    ],
    features: [
      'Role-Based Access Control (Admin, Teacher & Student)',
      'Class Attendance Tracking & Grade Recording',
      'Academic Progress Monitoring & Analytics',
      'School-wide Announcement & Notice Board',
      'Secure Authentication & Responsive Design'
    ],
    demoAccounts: [
      { role: 'Student', email: 'STU-1', pass: 'student123' },
      { role: 'Teacher', email: 'TEA-1', pass: 'teacher123' },
      { role: 'Admin', email: 'admin', pass: 'admin123' }
    ]
  },
  {
    id: 2,
    slug: 'lumina-books',
    title: 'Lumina Books',
    subtitle: 'Online Book Platform & E-Commerce Management System',
    category: 'E-Commerce Platform',
    year: '2026',
    shortDescription:
      'Digital bookstore with instant book cataloging, sales analytics, and role-based staff administration.',
    description:
      'An intuitive online bookstore designed for seamless digital shopping and inventory control. Features automated book additions via live image URLs, robust role separation for customers and administrators, LocalStorage account authentication, and sales analytics tracking.',
    image: luminaBooksPreview,
    imageAlt: 'Lumina Books Online Platform & Staff Portal Showcase',
    liveUrl: 'https://book-shop-2026.vercel.app/',
    githubUrl: 'https://github.com/vannat-24/Book-Store-',
    techStack: [
      'HTML5',
      'Tailwind CSS',
      'JavaScript (ES6+)',
      'JSON Seed Data',
      'LocalStorage API',
      'Font Awesome'
    ],
    features: [
      'Add Products Dynamically via Image URL',
      'Role-Based Access (User & Admin/Staff Portal)',
      'Client-Side Authentication via LocalStorage',
      'Sales Revenue Analytics & Live Charts',
      'Admin Inventory Management & User Controller',
      'Fully Responsive & Modern Clean UI'
    ],
    demoAccounts: null
  }
]
