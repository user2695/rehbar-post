
import { Button } from "@/app/ui/button"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Simplify Shipping Amplify Success
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl dark:text-gray-300">
            Affordable rates, faster deliveries, and zero hassles for your business. Scale smarter with us!
            </p>
          </div>
          <div className="space-x-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Get Solution
            </Button>
            <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}