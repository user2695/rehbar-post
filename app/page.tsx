import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Testimonials from "./components/Testimonials"
import Pricing from "./components/Pricing"
import Cta from "./components/Cta"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-logistics">
      <div className="bg-pattern-logistics bg-opacity-50 w-full">
        <Header />
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <Cta />
        <Footer />
      </div>
    </main>
  )
}