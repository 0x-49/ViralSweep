const benefits = [
  {
    title: 'Grow Your Email List',
    description: 'Build your email list faster with engaging sweepstakes and contests that people love to join and share.',
    icon: '📧',
  },
  {
    title: 'Increase Social Engagement',
    description: 'Drive more likes, shares, and follows across all your social media platforms with viral campaigns.',
    icon: '🔄',
  },
  {
    title: 'Drive More Sales',
    description: 'Convert participants into customers with targeted promotions and exclusive offers.',
    icon: '💰',
  },
  {
    title: 'Save Time',
    description: 'Automate winner selection, email notifications, and social media posting with our easy-to-use platform.',
    icon: '⏰',
  },
]

export function Benefits() {
  return (
    <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
            Why Choose ViralSweep?
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Everything you need to succeed
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Our platform provides all the tools and features you need to create successful marketing campaigns.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <span className="text-2xl">{benefit.icon}</span>
                  {benefit.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">{benefit.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
