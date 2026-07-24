import Header from './components/Header'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Milestones from './components/Milestones'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Milestones />
        <Portfolio />
      </main>
      <Footer />
    </div>
  )
}

export default App
