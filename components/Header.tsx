import Link from "next/link"

export function Header() {
    return (
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
    )
} 