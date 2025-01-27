export default function Testimonials() {
    const testimonials = [
      {
        quote: "As a bookseller, timely delivery is critical, and Rehbar Post has never disappointed. Their service is streamlined, professional, and customer-focused, making them the perfect partner for Lafz Book Store. Highly recommended!",
        author: "Haseeb Ashai",
      },
      {
        quote: "Rehbar Post has made logistics effortless for Vaadi. Their exceptional support and quick deliveries ensure that our customers enjoy their Kehwa without delay. Partnering with them was the best decision for our brand!",
        author: "Ifrah Farooq",
      },
      {
        quote: "Rehbar Post has truly transformed the way I manage shipping for Kashbites. Their reliable and efficient service ensures my products reach customers fresh and on time. Now they are an integral part of my business",
        author: " Muzaffar bin Aziz",
      },
    ]
  
    return (
      <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Words Of Trust From Our Client
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-4 text-center bg-white bg-opacity-50 backdrop-blur-sm p-6 rounded-lg shadow-lg"
              >
                <blockquote className="text-lg italic text-gray-700">&quot;{testimonial.quote}&quot;</blockquote>
                <p className="font-semibold text-blue-600">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }