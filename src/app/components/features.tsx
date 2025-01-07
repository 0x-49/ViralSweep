const features = [
  {
    name: 'Sweepstakes App',
    description: 'Transform your audience into loyal customers. Grow your email and SMS lists, boost social engagement, and drive sales by offering exciting prizes.',
    icon: '🎉',
  },
  {
    name: 'Giveaway App',
    description: 'Create irresistible giveaways that encourage customers to take action, share your brand, and become repeat buyers.',
    icon: '🎁',
  },
  {
    name: 'Contest Software',
    description: 'Collect, curate, and showcase beautiful user-generated content. Build trust and authenticity by letting your customers tell your brand\'s story.',
    icon: '🏆',
  },
  {
    name: 'Instant Win App',
    description: 'Keep your audience hooked with instant rewards. Create a sense of urgency and boost engagement with immediate gratification.',
    icon: '⚡',
  },
  {
    name: 'Purchases App',
    description: 'Turn every purchase into an opportunity. Award entries for every dollar spent and boost your average order value.',
    icon: '🛍️',
  },
  {
    name: 'Waitlist App',
    description: 'Create excitement and anticipation for your product launches. Encourage referrals to move up the waitlist.',
    icon: '📝',
  },
]

export function Features() {
  return (
    <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
            Powerful Features
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Everything you need to succeed
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Our comprehensive suite of tools helps you engage your audience, drive growth, and achieve measurable results.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <span className="text-2xl">{feature.icon}</span>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
