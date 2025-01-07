const caseStudies = [
  {
    company: 'Fashion Brand X',
    logo: '/images/fashion-brand-x.png',
    results: {
      emailGrowth: { value: '10,000+', label: 'new subscribers', icon: '📧' },
      socialGrowth: { value: '50,000+', label: 'social followers', icon: '🌟' },
      engagement: { value: '300%', label: 'increase', icon: '📈' },
      roi: { value: '1200%', label: 'ROI', icon: '💰' },
    },
    description: "Fashion Brand X used ViralSweep to run a series of Instagram giveaways, resulting in massive list growth and social media engagement.",
    strategy: 'Monthly Instagram giveaways with influencer partnerships',
    duration: '3 months',
    bgGradient: 'from-pink-500 to-rose-500',
  },
  {
    company: 'Tech Startup Y',
    logo: '/images/tech-startup-y.png',
    results: {
      emailGrowth: { value: '25,000+', label: 'new subscribers', icon: '📧' },
      socialGrowth: { value: '100,000+', label: 'social followers', icon: '🌟' },
      engagement: { value: '500%', label: 'increase', icon: '📈' },
      roi: { value: '2000%', label: 'ROI', icon: '💰' },
    },
    description: "Tech Startup Y leveraged ViralSweep's contest platform to launch their new product, creating a viral referral campaign.",
    strategy: 'Pre-launch referral contest with tiered rewards',
    duration: '6 weeks',
    bgGradient: 'from-blue-500 to-cyan-500',
  },
  {
    company: 'E-commerce Store Z',
    logo: '/images/ecommerce-store-z.png',
    results: {
      emailGrowth: { value: '50,000+', label: 'new subscribers', icon: '📧' },
      socialGrowth: { value: '150,000+', label: 'social followers', icon: '🌟' },
      engagement: { value: '800%', label: 'increase', icon: '📈' },
      roi: { value: '3000%', label: 'ROI', icon: '💰' },
    },
    description: "E-commerce Store Z used ViralSweep's purchase-based entries to incentivize sales during their holiday campaign.",
    strategy: 'Holiday shopping sweepstakes with purchase entries',
    duration: '2 months',
    bgGradient: 'from-violet-500 to-purple-500',
  },
]

export function CaseStudies() {
  return (
    <div className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Success Stories
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            See how businesses like yours achieved remarkable growth with ViralSweep
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {caseStudies.map((study) => (
            <div
              key={study.company}
              className="relative isolate flex flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-b dark:bg-gradient-to-t dark:from-gray-800 dark:to-gray-900 px-8 pb-8 pt-10 sm:pt-6 shadow-2xl"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-b dark:bg-gradient-to-t from-white/95 to-white/25 dark:from-gray-900/95 dark:to-gray-900/25" />
              <div>
                <time className="text-sm leading-6 text-gray-600 dark:text-gray-400">{study.duration}</time>
                <h3 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">{study.company}</h3>
                
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {Object.entries(study.results).map(([key, { value, label, icon }]) => (
                    <div key={key} className="bg-white/10 dark:bg-gray-800/50 rounded-lg p-4">
                      <dt className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                        <span className="text-xl">{icon}</span>
                        {label}
                      </dt>
                      <dd className="mt-1 text-2xl font-semibold text-primary dark:text-primary">
                        {value}
                      </dd>
                    </div>
                  ))}
                </div>
                
                <p className="mt-6 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  {study.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-primary dark:text-primary">
                  <span className="font-semibold">Strategy:</span> {study.strategy}
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-primary dark:text-primary hover:text-primary/80 dark:hover:text-primary/80"
                >
                  View Case Study <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
