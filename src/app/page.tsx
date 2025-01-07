import { Metadata } from 'next'
import { siteConfig } from './config/seo'
import { Header } from './components/header'
import { Features } from './components/features'
import { Benefits } from './components/benefits'
import { Testimonials } from './components/testimonials'
import { Pricing } from './components/pricing'
import { FAQ } from './components/faq'
import { CTASection } from './components/cta-section'
import { CaseStudies } from './components/case-studies'
import { ComparisonTable } from './components/comparison-table'
import { StatsShowcase } from './components/stats-showcase'
import { Footer } from './components/footer'

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <div className="relative isolate">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
              <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                Transform Your Marketing with ViralSweep's Powerful Platform
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Create engaging sweepstakes, contests, and giveaways that drive real results. Our platform helps you:
              </p>
              <ul className="mt-4 space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Grow your email list exponentially
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Boost social media engagement
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Drive viral referrals
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Increase sales and ROI
                </li>
              </ul>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="https://viralsweep.com/?via=maxime-emmanuel"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Start Your Free Trial
                </a>
                <a href="#features" className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
                  See How It Works <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Showcase */}
        <StatsShowcase />

        {/* Benefits Section */}
        <section id="benefits">
          <Benefits />
        </section>

        {/* Features Section */}
        <section id="features">
          <Features />
        </section>

        {/* Case Studies */}
        <section id="case-studies">
          <CaseStudies />
        </section>

        {/* Comparison Table */}
        <section id="comparison">
          <ComparisonTable />
        </section>

        {/* CTA Section */}
        <CTASection />

        {/* Testimonials Section */}
        <section id="testimonials">
          <Testimonials />
        </section>

        {/* Pricing Section */}
        <section id="pricing">
          <Pricing />
        </section>

        {/* FAQ Section */}
        <section id="faq">
          <FAQ />
        </section>

        {/* Final CTA */}
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
