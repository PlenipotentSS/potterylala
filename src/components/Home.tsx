import AboutSection from './AboutSection'
import CreationsGrid from './CreationsGrid'
import LeahAvailable from './LeahAvailable'
import InstagramFeed from './InstagramFeed'
import ContactSection from './ContactSection'
import Hero from './Hero'

function WaveDivider() {
  return (
    <div className="wave-divider" aria-hidden="true">
      <svg viewBox="0 0 1440 140" preserveAspectRatio="none" height="140">
        <path d="M0,140 C900,140 1250,50 1440,0 L1440,140 L0,140Z" fill="#284139" />
      </svg>
    </div>
  )
}

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <AboutSection />
      <WaveDivider />
      <CreationsGrid />
      <LeahAvailable />
      <InstagramFeed />
      <ContactSection />
    </div>
  )
}
