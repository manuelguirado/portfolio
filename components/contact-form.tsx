"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { sendEmail } from "../actions/send-email"
import { Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setSubmitResult(null)

    try {
      const result = await sendEmail(formData)
      setSubmitResult(result)

      // Reset form if successful
      if (result.success) {
        const form = document.getElementById("contact-form") as HTMLFormElement
        form?.reset()
      }
    } catch (error) {
      setSubmitResult({
        success: false,
        message: "Sorry, there was an error sending your message. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="bg-slate-900/50 border-slate-800 shadow-2xl">
      <CardContent className="p-8">
        <form id="contact-form" action={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-slate-300">
                Name *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                className="bg-slate-800 border-slate-700 text-slate-100 placeholder:text-slate-400 focus:border-blue-500"
                placeholder="Your full name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-300">
                Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="bg-slate-800 border-slate-700 text-slate-100 placeholder:text-slate-400 focus:border-blue-500"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject" className="text-slate-300">
              Subject *
            </Label>
            <Input
              id="subject"
              name="subject"
              type="text"
              required
              className="bg-slate-800 border-slate-700 text-slate-100 placeholder:text-slate-400 focus:border-blue-500"
              placeholder="What's this about?"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-slate-300">
              Message *
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              rows={5}
              className="bg-slate-800 border-slate-700 text-slate-100 placeholder:text-slate-400 focus:border-blue-500 resize-none"
              placeholder="Tell me about your project or what you'd like to discuss..."
            />
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
        </form>

        {submitResult && (
          <div
            className={`mt-6 p-4 rounded-lg ${
              submitResult.success
                ? "bg-green-900/20 border border-green-800 text-green-300"
                : "bg-red-900/20 border border-red-800 text-red-300"
            }`}
          >
            <div className="flex items-center">
              {submitResult.success && <CheckCircle className="mr-2 h-5 w-5" />}
              <p>{submitResult.message}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
