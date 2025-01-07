const tiers = [
  {
    name: 'Starter',
    id: 'tier-starter',
    href: 'https://viralsweep.com/?via=maxime-emmanuel',
    price: { monthly: '$49' },
    description: 'Perfect for small businesses and startups.',
    features: [
      'Up to 5 active campaigns',
      'Email & SMS list building',
      'Social media integration',
      'Basic analytics',
      'Standard support',
    ],
    featured: false,
  },
  {
    name: 'Professional',
    id: 'tier-professional',
    href: 'https://viralsweep.com/?via=maxime-emmanuel',
    price: { monthly: '$99' },
    description: 'Ideal for growing businesses.',
    features: [
      'Up to 15 active campaigns',
      'Advanced analytics',
      'Custom branding',
      'API access',
      'Priority support',
      'Fraud prevention',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: 'https://viralsweep.com/?via=maxime-emmanuel',
    price: { monthly: 'Custom' },
    description: 'For large organizations with custom needs.',
    features: [
      'Unlimited active campaigns',
      'Enterprise-grade security',
      'Custom integrations',
      'Dedicated account manager',
      '24/7 phone support',
      'SLA guarantees',
    ],
    featured: false,
  },
]

export function Pricing() {
  return (
    <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Choose the perfect plan for your needs
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600 dark:text-gray-300">
          Start growing your business today with our flexible pricing options.
        </p>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={`
                flex flex-col justify-between rounded-3xl bg-white dark:bg-gray-800 p-8 ring-1 ring-gray-200 dark:ring-gray-700 xl:p-10
                ${tier.featured ? 'lg:z-10 lg:rounded-b-none' : ''}
                ${tierIdx === 0 ? 'lg:rounded-r-none' : ''}
                ${tierIdx === tiers.length - 1 ? 'lg:rounded-l-none' : ''}
              `}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className={`text-lg font-semibold leading-8 ${
                      tier.featured ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-900 dark:text-white'
                    }`}
                  >
                    {tier.name}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {tier.price.monthly}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-300">
                    /month
                  </span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={`
                  mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                  ${
                    tier.featured
                      ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600'
                      : 'bg-gray-50 dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 ring-1 ring-inset ring-indigo-200 dark:ring-indigo-700 hover:ring-indigo-300 dark:hover:ring-indigo-600'
                  }
                `}
              >
                Get started today
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
