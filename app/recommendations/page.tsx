import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Header } from "@/app/components/Header"
import { Footer } from "@/app/components/Footer"

const categories = [
  {
    name: "Tops",
    items: [
      { id: 1, name: "Casual T-Shirt", price: 19.99, image: "/placeholder.svg" },
      { id: 2, name: "Elegant Blouse", price: 39.99, image: "/placeholder.svg" },
      { id: 3, name: "Cozy Sweater", price: 49.99, image: "/placeholder.svg" },
    ],
  },
  {
    name: "Bottoms",
    items: [
      { id: 4, name: "Slim Fit Jeans", price: 59.99, image: "/placeholder.svg" },
      { id: 5, name: "Tailored Trousers", price: 69.99, image: "/placeholder.svg" },
      { id: 6, name: "Comfortable Shorts", price: 29.99, image: "/placeholder.svg" },
    ],
  },
  {
    name: "Dresses",
    items: [
      { id: 7, name: "Summer Sundress", price: 79.99, image: "/placeholder.svg" },
      { id: 8, name: "Cocktail Dress", price: 99.99, image: "/placeholder.svg" },
      { id: 9, name: "Maxi Dress", price: 89.99, image: "/placeholder.svg" },
    ],
  },
  {
    name: "Accessories",
    items: [
      { id: 10, name: "Statement Necklace", price: 24.99, image: "/placeholder.svg" },
      { id: 11, name: "Leather Belt", price: 34.99, image: "/placeholder.svg" },
      { id: 12, name: "Sunglasses", price: 44.99, image: "/placeholder.svg" },
    ],
  },
]

export default function Recommendations() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800 text-white">
      <Header />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">Your Personalized Recommendations</h1>
          <p className="text-sm text-center text-white/80 mb-8">
            As an eBay Partner Network participant, Avance Style may earn commissions from qualifying purchases when you click on links to eBay.com
          </p>

          {categories.map((category) => (
            <section key={category.name} className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">{category.name}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item) => (
                  <div key={item.id} className="bg-white/10 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{item.name}</h3>
                      <p className="text-yellow-300 mb-4">${item.price.toFixed(2)}</p>
                      <Button className="w-full bg-yellow-400 text-purple-900 hover:bg-yellow-300">View on eBay</Button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

