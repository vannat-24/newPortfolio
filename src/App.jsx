import React, { useState, useEffect } from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Tools from './Components/Tools'
import Projects from './Components/Projects'
import EducationAndCertificates from './Components/EducationAndCertificates'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import ProjectDetail from './Components/ProjectDetail'
import { projects } from './data/projects'

export const App = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash
      if (hash.startsWith('#project/')) {
        const slug = hash.replace('#project/', '')
        const found = projects.find((p) => p.slug === slug || String(p.id) === slug)
        if (found) {
          setSelectedProject(found)
          return
        }
      } else if (hash.startsWith('#project-')) {
        const slug = hash.replace('#project-', '')
        const found = projects.find((p) => p.slug === slug || String(p.id) === slug)
        if (found) {
          setSelectedProject(found)
          return
        }
      }

      // If hash does not specify a project and we were in detail view, reset
      if (!hash.includes('project')) {
        setSelectedProject(null)
      }
    }

    syncFromHash()
    window.addEventListener('hashchange', syncFromHash)
    return () => window.removeEventListener('hashchange', syncFromHash)
  }, [])

  const handleSelectProject = (project) => {
    setSelectedProject(project)
    window.location.hash = `project/${project.slug}`
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackToPortfolio = () => {
    setSelectedProject(null)
    window.location.hash = 'projects'
    setTimeout(() => {
      const el = document.getElementById('projects')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }, 50)
  }

  const handleNavigateHome = (targetHash) => {
    if (selectedProject) {
      setSelectedProject(null)
    }
    if (targetHash) {
      window.location.hash = targetHash
      setTimeout(() => {
        const el = document.querySelector(targetHash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 50)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      {selectedProject ? (
        <div>
          <ProjectDetail
            project={selectedProject}
            onBack={handleBackToPortfolio}
            onSelectProject={handleSelectProject}
            allProjects={projects}
          />
          <Footer onNavigateHome={handleNavigateHome} />
        </div>
      ) : (
        <>
          <Header />
          <main className="grow">
            <Hero />
            <Tools />
            <Projects onSelectProject={handleSelectProject} />
            <EducationAndCertificates />
            <About />
            <Contact />
          </main>
          <Footer onNavigateHome={handleNavigateHome} />
        </>
      )}
    </div>
  )
}

export default App
