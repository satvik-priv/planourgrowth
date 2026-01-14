import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    const location = useLocation()

    const isHome = location.pathname === "/"

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    let headerClasses = ""

    // 3 CONDITIONS
    if (!isHome) {
        // 3️⃣ Sub pages
        headerClasses =
            "bg-green-300 text-gray-900 shadow-sm border-b border-gray-200"
    } else if (scrolled) {
        // 2️⃣ Home + scrolled
        headerClasses =
            "bg-white text-gray-900 shadow-sm border-b border-gray-200"
    } else {
        // 1️⃣ Home + top
        headerClasses =
            "bg-white text-green-900"
    }

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300
    ${isHome && !scrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}
    ${headerClasses}
  `}
        >

            <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
                <Link to="/" className="text-xl font-semibold text-green-700">
                    PlanOurGrowth
                    <img 
                        src="/header.svg"
                        alt="PlanOurGrowth"
                    />
                </Link>

                <nav className="hidden md:flex space-x-6 text-md text-gray-700">
                    <Link className="font-semibold" to="/about">About</Link>
                    <Link className="font-semibold" to="/team">Team</Link>
                    <Link className="font-semibold" to="/services">What We Do</Link>
                    <Link className="font-semibold" to="/work">Our Work</Link>
                    <Link className="font-semibold" to="/join">Join Us</Link>
                    <Link className="font-semibold" to="/contact">Contact</Link>
                </nav>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col space-y-4">
                    <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                    <Link to="/team" onClick={() => setMenuOpen(false)}>Team</Link>
                    <Link to="/services" onClick={() => setMenuOpen(false)}>What We Do</Link>
                    <Link to="/work" onClick={() => setMenuOpen(false)}>Our Work</Link>
                    <Link to="/join" onClick={() => setMenuOpen(false)}>Join Us</Link>
                    <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                </div>
            )}
        </header>
    )
}
