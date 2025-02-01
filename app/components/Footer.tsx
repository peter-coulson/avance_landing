import Link from "next/link"

export function Footer() {
    return (
        <footer className="bg-purple-900 mt-auto">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col space-y-4">
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
                    <p className="text-sm text-white/80">
                        As an eBay Partner Network participant, Avance Style may earn commissions from qualifying purchases when you click on links to eBay.com
                    </p>
                </div>
            </div>
        </footer>
    )
} 