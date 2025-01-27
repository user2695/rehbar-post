
import { Check } from "lucide-react"

export default function Pricing() {
  const plans = [
    {
      name: "Domestic",
      features: ["Fast. Reliable. Nationwide: Deliver your packages across India with speed and precision. We ensure hassle-free shipping to every corner of the country at competitive rates"],
    },
    {
      name: "Forward",
      price: "$299",
      features: ["From Your Store to Their Door: Seamlessly ship products to your customers anywhere in India. Our reliable forward shipping service guarantees timely deliveries to boost customer satisfaction."],
    },
    {
      name: "Return",
      price: "Custom",
      features: ["Easy Returns, Hassle-Free Process: Handle customer returns effortlessly with our streamlined return shipping service. We make returns simple, fast, and cost-effective for your business"],
    },
  ]

  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
        Transport and Logistics Solution
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div key={index} className="flex flex-col p-6 bg-white bg-opacity-50 backdrop-blur-sm rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{plan.name}</h3>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}