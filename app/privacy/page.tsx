import Link from "next/link"

export default function Privacy() {
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
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you create an account, participate in
                our AI interview, or use our services. This may include your name, email address, and style preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services, to develop new ones,
                and to protect Avance Style and our users.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Sharing of Information</h2>
              <p>
                We do not share personal information with companies, organizations, or individuals outside of Avance
                Style except in the following cases: with your consent, for external processing, or for legal reasons.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
              <p>
                We work hard to protect Avance Style and our users from unauthorized access to or unauthorized
                alteration, disclosure, or destruction of information we hold.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Changes to This Policy</h2>
              <p>
                We may change this privacy policy from time to time. We will post any privacy policy changes on this
                page and, if the changes are significant, we will provide a more prominent notice.
              </p>
            </section>
          </div>
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

