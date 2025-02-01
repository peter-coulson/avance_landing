"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null,
    message: string
  }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const form = e.target as HTMLFormElement
      const response = await fetch("https://formspree.io/f/xgvoyyzy", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thanks for your submission!'
        })
        form.reset()
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Oops! There was a problem submitting your form'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800 text-white">
      <header className="border-b border-white/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold text-white">
            Avance Style
          </Link>
          <nav>
            <Link href="/recommendations" className="hover:text-yellow-300 transition-colors">
              Your Recommendations
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 max-w-md">
          <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {submitStatus.message && (
              <div className={`p-4 rounded-md ${submitStatus.type === 'success' ? 'bg-green-500/20' : 'bg-red-500/20'
                }`}>
                {submitStatus.message}
              </div>
            )}
            <div>
              <label htmlFor="name" className="block mb-2">
                Name
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-white/10 text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-white/10 text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                required
                className="w-full bg-white/10 text-white"
                rows={4}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-yellow-400 text-purple-900 hover:bg-yellow-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </main>

      <footer className="bg-purple-900 mt-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            <p>&copy; 2025 Avance Style. All rights reserved.</p>
            <div>
              <Link href="/privacy" className="mr-4 hover:text-yellow-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/contact" className="hover:text-yellow-300 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

