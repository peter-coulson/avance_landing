import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800 text-white">
      <Header />

      <main className="flex-grow">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">Elevate Your Style with AI-Powered Recommendations</h1>
              <p className="text-xl mb-8">
                Avance Style uses cutting-edge AI to understand your unique fashion preferences and deliver personalized
                eBay product recommendations.
              </p>
              <Link href="/recommendations">
                <Button size="lg" className="bg-yellow-400 text-purple-900 hover:bg-yellow-300">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white/10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How Avance Style Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-yellow-400 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-10 h-10 text-purple-900"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Interview</h3>
                <p>We conduct an AI-powered interview to understand your style preferences</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-400 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-10 h-10 text-purple-900"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">User Testing</h3>
                <p>We analyze your eBay browsing and purchase history</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-400 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-10 h-10 text-purple-900"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Personalized Recommendations</h3>
                <p>Discover curated eBay products tailored just for you</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Experience the Avance Style Difference</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <Image
                  src="/ai-fashion-assistant.jpg"
                  alt="AI Fashion Assistant showcasing personalized style recommendations"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">AI-Powered Fashion Insights</h3>
                <p className="mb-4">
                  Our advanced AI doesn&apos;t just look at what you&apos;ve bought - it understands your style preferences
                  through interactive interviews and user testing.
                </p>
                <p className="mb-4">
                  By combining this deep understanding with your eBay history, we create a unique style profile that
                  evolves with you.
                </p>
                <Link href="/recommendations">
                  <Button className="bg-yellow-400 text-purple-900 hover:bg-yellow-300">Learn More</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

