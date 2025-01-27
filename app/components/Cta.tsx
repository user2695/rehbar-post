import { Button } from "@/app/ui/button"

export default function Cta() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 bg-opacity-90 backdrop-blur-sm">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
              Ready to Optimize Your Logistics?
            </h2>
            <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl">
              Lets co-create the right digital Logistic solution for your business
            </p>
          </div>
          <div className="space-x-4">
            <Button size="lg" variant="secondary">
              Lets Discuss
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
