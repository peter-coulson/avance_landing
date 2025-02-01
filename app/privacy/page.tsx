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
          <p className="mb-4 text-gray-200">Last Updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p>
                Welcome to Avance Style ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose,
                and protect your information when you use our website and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. eBay Partner Network Participation</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>We earn commissions from qualifying purchases made through our links to eBay</li>
                <li>Your clicks on eBay product links are tracked for attribution purposes</li>
                <li>You will be redirected to eBay.com when clicking product links</li>
                <li>eBay's own Privacy Policy will apply once you're redirected to their platform</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">3.1 Information You Provide</h3>
                  <ul className="list-disc pl-6">
                    <li>Search queries and preferences</li>
                    <li>Contact information when provided</li>
                    <li>Feedback and correspondence</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">3.2 Automatically Collected Information</h3>
                  <ul className="list-disc pl-6">
                    <li>Device information (browser type, IP address)</li>
                    <li>Usage data (pages visited, time spent)</li>
                    <li>Cookies and tracking parameters</li>
                    <li>Click-through data for eBay affiliate links</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. How We Use Your Information</h2>
              <ul className="list-disc pl-6">
                <li>Provide personalized product recommendations</li>
                <li>Track affiliate attributions through ePN</li>
                <li>Improve our service and user experience</li>
                <li>Maintain site security and functionality</li>
                <li>Communicate with you when necessary</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Cookies and Tracking</h2>
              <p>We use:</p>
              <ul className="list-disc pl-6">
                <li>Essential cookies for site functionality</li>
                <li>eBay tracking parameters for affiliate attribution</li>
                <li>Analytics cookies to understand usage patterns</li>
                <li>You can control cookie settings through your browser</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Data Sharing and Disclosure</h2>
              <p>We share information with:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>eBay (through ePN tracking)</li>
                <li>Service providers who assist our operations</li>
                <li>Legal authorities when required by law</li>
              </ul>
              <p>We do not sell your personal information to third parties.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Data Security</h2>
              <p>We implement appropriate security measures to protect your information, including:</p>
              <ul className="list-disc pl-6">
                <li>Encryption of sensitive data</li>
                <li>Regular security assessments</li>
                <li>Limited access to personal information</li>
                <li>Secure data storage practices</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Opt-out of non-essential cookies</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent for processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Children's Privacy</h2>
              <p>
                Our service is not directed at children under 13. We do not knowingly collect information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically. We will notify you of any material changes by posting
                the new policy on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
              <p>
                For privacy-related questions or concerns, please use our <Link href="/contact" className="text-yellow-300 hover:underline">contact form</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Legal Basis for Processing</h2>
              <p>We process your information based on:</p>
              <ul className="list-disc pl-6">
                <li>Your consent</li>
                <li>Our legitimate business interests</li>
                <li>Legal obligations</li>
                <li>Contract performance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">13. International Data Transfers</h2>
              <p>
                Your information may be transferred and processed in countries where eBay operates. We ensure appropriate
                safeguards are in place for such transfers.
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

