const testimonials = [
  {
    body: 'ViralSweep has surpassed our expectations with their results. We\'ve seen ROIs of over 1000%!',
    author: {
      name: 'Sarah Johnson',
      handle: 'Marketing Director',
      company: 'TechStart Inc.',
      imageUrl: '/testimonials/sarah.jpg',
    },
  },
  {
    body: 'The platform is incredibly easy to use and the support team is amazing. We\'ve grown our email list by 300% in just 3 months.',
    author: {
      name: 'Michael Chen',
      handle: 'Growth Lead',
      company: 'EcoStyle',
      imageUrl: '/testimonials/michael.jpg',
    },
  },
  {
    body: 'ViralSweep is one of the best tools we use for running sweepstakes and giveaways. The results speak for themselves.',
    author: {
      name: 'Emily Rodriguez',
      handle: 'Social Media Manager',
      company: 'Brand Solutions',
      imageUrl: '/testimonials/emily.jpg',
    },
  },
]

export function Testimonials() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600 dark:text-indigo-400">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Trusted by Industry Leaders
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author.name}
                className="flex flex-col justify-between bg-white dark:bg-gray-900 p-8 shadow-lg ring-1 ring-gray-900/5 rounded-lg"
              >
                <blockquote className="text-lg leading-6 text-gray-900 dark:text-white">
                  "{testimonial.body}"
                </blockquote>
                <div className="mt-6 flex items-center gap-x-4">
                  <img
                    className="h-10 w-10 rounded-full bg-gray-50"
                    src={testimonial.author.imageUrl}
                    alt=""
                  />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.author.name}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      {testimonial.author.handle} at {testimonial.author.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
