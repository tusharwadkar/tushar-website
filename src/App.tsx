import MinimalistHeroDemo from './components/ui/demo'
import { ModernProjects } from './components/ui/modern-projects'
import { SplineSceneBasic } from './components/ui/spline-section'
import { Footer } from './components/ui/footer'

function App() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="home">
        <MinimalistHeroDemo />
      </section>

      {/* 3D Interaction Section */}
      <SplineSceneBasic />

      {/* Projects Section */}
      <ModernProjects />

      {/* Footer */}
      <Footer />
    </main>
  )
}

export default App
