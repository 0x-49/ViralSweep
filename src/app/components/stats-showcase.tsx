const stats = [
  { id: 1, name: 'Successful Campaigns', value: '100,000+', icon: '🏆' },
  { id: 2, name: 'Email Subscribers', value: '50M+', icon: '📧' },
  { id: 3, name: 'Social Followers', value: '100M+', icon: '🌟' },
  { id: 4, name: 'Average ROI', value: '800%', icon: '💰' },
  { id: 5, name: 'Happy Clients', value: '10,000+', icon: '😊' },
  { id: 6, name: 'Countries', value: '150+', icon: '🌎' },
]

export function StatsShowcase() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),theme(colors.white))] dark:bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.900),theme(colors.gray.900))] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white dark:bg-gray-900 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 dark:ring-indigo-900" />
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Proven Results That Speak for Themselves
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Join thousands of successful businesses who have transformed their marketing with ViralSweep's powerful platform.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:gap-x-16">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col gap-y-3 border-l border-gray-200 dark:border-gray-800 pl-6">
              <dt className="text-sm leading-6 text-gray-600 dark:text-gray-400 flex items-center gap-2">
                <span className="text-xl">{stat.icon}</span>
                {stat.name}
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-primary dark:text-primary">
                {stat.value}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
