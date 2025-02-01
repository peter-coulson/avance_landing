"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { Footer } from "@/app/components/Footer"
import { Header } from "@/app/components/Header"

// Add the interface for the form data
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null,
    message: string
  }>({ type: null, message: '' })

  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      const formData = new FormData()
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value)
      })

      const response = await fetch("https://formspree.io/f/xgvoyyzy", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thanks for your submission!'
        })
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: `Oops! There was a problem submitting your form: ${error instanceof Error ? error.message : 'Unknown error'}`
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800 text-white">
      <Header />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 max-w-md">
          <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                {...register("name", { required: "Name is required" })}
                className="w-full bg-white/10 text-white"
              />
              {errors.name && (
                <p className="text-red-300 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <Input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                className="w-full bg-white/10 text-white"
              />
              {errors.email && (
                <p className="text-red-300 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <Textarea
                id="message"
                {...register("message", { required: "Message is required" })}
                className="w-full bg-white/10 text-white"
                rows={4}
              />
              {errors.message && (
                <p className="text-red-300 text-sm mt-1">{errors.message.message}</p>
              )}
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

      <Footer />
    </div>
  )
}

