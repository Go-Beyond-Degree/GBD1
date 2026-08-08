import Footer from '@/components/layout/Footer'
import Navigation from '@/components/layout/Navigation'
import LandingContent from '@/components/sections/LandingContent'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-primary-bg text-primary-text antialiased">
      <Navigation />
      <LandingContent />
      <Footer />
    </div>
  )
}
