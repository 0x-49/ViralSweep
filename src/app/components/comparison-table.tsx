const features = [
  {
    name: 'Campaign Types',
    viralsweep: ['Sweepstakes', 'Contests', 'Giveaways', 'Instant Win', 'Photo Contests', 'Video Contests', 'Essay Contests', 'Referral Programs'],
    others: ['Basic Sweepstakes', 'Simple Contests', 'Limited Giveaways'],
  },
  {
    name: 'Entry Methods',
    viralsweep: ['Email Signup', 'Social Media Follow', 'Social Share', 'Website Visit', 'Purchase Entry', 'Custom Actions', 'Viral Referrals', 'Newsletter Subscription'],
    others: ['Email Signup', 'Basic Social Actions', 'Limited Customization'],
  },
  {
    name: 'Customization',
    viralsweep: ['Full Brand Customization', 'Custom CSS', 'White Label Options', 'Custom Domain', 'Embedded Forms', 'Mobile Responsive', 'Multiple Languages'],
    others: ['Basic Branding', 'Limited Design Options', 'No White Label'],
  },
  {
    name: 'Analytics & Reporting',
    viralsweep: ['Real-time Analytics', 'Entry Source Tracking', 'Conversion Tracking', 'ROI Measurement', 'Social Media Metrics', 'Custom Reports', 'Data Export'],
    others: ['Basic Statistics', 'Limited Reporting', 'No Advanced Metrics'],
  },
  {
    name: 'Integration Options',
    viralsweep: ['Email Marketing Platforms', 'CRM Systems', 'E-commerce Platforms', 'Social Media APIs', 'Custom Webhooks', 'REST API Access'],
    others: ['Limited Email Integration', 'Basic Platform Connect'],
  },
]

export function ComparisonTable() {
  return (
    <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Why Choose ViralSweep?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            See how ViralSweep compares to other platforms in the market. We offer more features, better customization, 
            and superior results for your marketing campaigns.
          </p>
        </div>
        <div className="mt-16 flow-root">
          <div className="mx-auto max-w-7xl">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-white sm:pl-0">
                    Feature Category
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    ViralSweep
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    Other Platforms
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, featureIdx) => (
                  <tr key={feature.name} className={featureIdx % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : ''}>
                    <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-white sm:pl-0">
                      {feature.name}
                    </td>
                    <td className="px-3 py-4">
                      <ul className="list-disc list-inside text-sm text-green-600 dark:text-green-400">
                        {feature.viralsweep.map((item) => (
                          <li key={item} className="mb-1">{item}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-3 py-4">
                      <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-400">
                        {feature.others.map((item) => (
                          <li key={item} className="mb-1">{item}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-8 text-center">
              <a
                href="https://viralsweep.com/?via=maxime-emmanuel"
                className="inline-flex items-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get Started with ViralSweep
                <span className="ml-2" aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
