import { Check, HelpCircle } from 'lucide-react'
import Link from 'next/link'

const tiers = [
  {
    name: 'Basic',
    price: 29,
    features: ['5 projects', '10GB storage', 'Basic support'],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Standard',
    price: 59,
    features: ['15 projects', '50GB storage', 'Priority support', 'Advanced analytics'],
    cta: 'Choose Plan',
    popular: true,
  },
  {
    name: 'Premium',
    price: 99,
    features: ['Unlimited projects', '250GB storage', '24/7 support', 'Custom integrations', 'Dedicated account manager'],
    cta: 'Contact Us',
    popular: false,
  },
]

const faqs = [
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers for our services.',
  },
  {
    question: 'Can I upgrade or downgrade my plan later?',
    answer: 'Yes, you can easily upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
  },
  {
    question: 'Is there a contract or minimum commitment?',
    answer: 'No, our services are provided on a month-to-month basis with no long-term contracts required.',
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-primary-color font-header sm:text-5xl sm:tracking-tight lg:text-6xl">
            Choose Your Plan
          </h1>
          {/* Increased subtitle text size */}
          <p className="mt-4 max-w-xl mx-auto text-2xl text-text font-body">
            Select the perfect plan for your needs and start growing your business today.
          </p>
        </div>

        <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {tiers.map((tier) => (
            <div 
              key={tier.name} 
              className={`relative p-8 bg-accent-color border rounded-2xl shadow-sm flex flex-col ${
                tier.popular ? 'border-primary-color ring-2 ring-primary-color' : 'border-border-color'
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-highlight text-accent-color px-4 py-1 rounded-full text-base font-semibold">
                  Most Popular
                </div>
              )}
              <div className="mb-4">
                {/* Increased tier name size */}
                <h3 className="text-xl font-semibold font-header text-primary-color leading-6">
                  {tier.name}
                </h3>
                <p className="mt-4 flex items-baseline text-text">
                  <span className="text-6xl font-extrabold tracking-tight">${tier.price}</span>
                  <span className="ml-1 text-2xl font-semibold">/month</span>
                </p>
              </div>
              {/* Increased features text size */}
              <ul className="mt-6 space-y-4 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex font-body text-lg">
                    <Check className="flex-shrink-0 w-6 h-6 text-highlight" />
                    <span className="ml-3 text-text">{feature}</span>
                  </li>
                ))}
              </ul>
              {/* Increased CTA button text size */}
              <Link
                href="#"
                className={`mt-8 block w-full py-4 px-6 border border-transparent rounded-md text-center font-medium text-lg ${
                  tier.popular
                    ? 'bg-primary-color text-accent-color hover:bg-highlight'
                    : 'bg-extra-accent text-primary-color hover:bg-highlight hover:text-accent-color'
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-extrabold text-primary-color font-header text-center">
            Frequently Asked Questions
          </h2>
          <div className="mt-12 space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-accent-color shadow overflow-hidden rounded-lg">
                <div className="px-6 py-6 sm:p-8">
                  {/* Increased FAQ question size */}
                  <dt className="text-xl font-medium text-primary-color flex items-center font-header">
                    <HelpCircle className="flex-shrink-0 mr-3 h-6 w-6 text-highlight" />
                    {faq.question}
                  </dt>
                  {/* Increased FAQ answer size */}
                  <dd className="mt-5 text-lg text-text font-body leading-relaxed">
                    {faq.answer}
                  </dd>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}