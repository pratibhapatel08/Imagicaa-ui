import Events from '../components/home/Events.jsx'
import Experience from '../components/home/Experience.jsx'
import Hero from '../components/home/Hero.jsx'
import Offers from '../components/home/Offers.jsx'
import Testimonials from '../components/home/Testimonials.jsx'

function Home() {
  return (
    <main className="flex-1">
      // trigger workflow
      <Hero />
      <Experience />
      <Offers />
      <Events />
      <Testimonials />
    </main>
  )
}

export default Home
