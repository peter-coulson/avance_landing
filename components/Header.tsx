import Link from "next/link"

export function Header() {
    return (
        <header>
            <div className="bg-gradient-to-r from-yellow-400/10 to-purple-600/10 border-b border-yellow-400/20">
                <div className="container mx-auto px-4 py-2 text-center text-sm">
                    <span className="inline-flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-yellow-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span className="text-yellow-400/90">
                            This is a demonstration website. Full functionality will be implemented upon eBay API approval.
                        </span>
                    </span>
                </div>
            </div>
            <div className="border-b border-white/20">
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
            </div>
        </header>
    )
} 