import { BookOpen, Truck, MapPin, ClipboardList } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <BookOpen className="h-10 w-10 text-blue-500" />,
      title: "Easy Booking",
      description: "Streamlined booking process for quick and efficient shipment arrangements.",
    },
    {
      icon: <Truck className="h-10 w-10 text-blue-500" />,
      title: "Smart Dispatching",
      description: "Optimize routes and allocate resources efficiently with our intelligent dispatching system.",
    },
    {
      icon: <MapPin className="h-10 w-10 text-blue-500" />,
      title: "Real-time Tracking",
      description: "Track your shipments in real-time with precise location updates and ETAs.",
    },
    {
      icon: <ClipboardList className="h-10 w-10 text-blue-500" />,
      title: "NDR Management",
      description: "Efficiently handle non-delivery reports with automated workflows and quick resolution tools.",
    },
  ]

  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
        The way we work at Rehbar Post
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 text-center bg-white bg-opacity-50 backdrop-blur-sm rounded-lg p-6 shadow-lg"
            >
              {feature.icon}
              <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}