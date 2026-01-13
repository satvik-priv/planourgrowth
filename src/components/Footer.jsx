import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer className="bg-green-900 text-green-50">
            <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-5 gap-10">

                {/* Brand */}
                <div className="md:col-span-2">
                    <h2 className="text-2xl font-semibold mb-4">PlanOurGrowth </h2>
                  
                    <p className="text-green-200 max-w-md">
                        Data-driven strategy, marketing intelligence, and growth technology systems
                        for modern businesses.
                    </p>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-sm uppercase text-green-300 mb-4">Services</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/services" className="hover:text-white">Data Marketing</Link></li>
                        <li><Link to="/services" className="hover:text-white">Growth Strategy</Link></li>
                        <li><Link to="/services" className="hover:text-white">Analytics & Reporting</Link></li>
                        <li><Link to="/services" className="hover:text-white">Youth Engagement</Link></li>
                        <li><Link to="/services" className="hover:text-white">Software Systems</Link></li>
                        <li><Link to="/services" className="hover:text-white">Brand Strategy</Link></li>
                        <li><Link to="/services" className="hover:text-white">Content Systems</Link></li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h3 className="text-sm uppercase text-green-300 mb-4">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/about" className="hover:text-white">About</Link></li>
                        <li><Link to="/team" className="hover:text-white">Team</Link></li>
                        <li><Link to="/services" className="hover:text-white">What We Do</Link></li>
                        <li><Link to="/work" className="hover:text-white">Our Work</Link></li>
                        <li><Link to="/join" className="hover:text-white">Careers</Link></li>
                        <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                    </ul>
                </div>

                {/* Connect */}
                <div>
                    <h3 className="text-sm uppercase text-green-300 mb-4">Connect</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a
                                href="mailto:planourgrowth@gmail.com"
                                className="hover:text-white"
                            >
                                planourgrowth@gmail.com
                            </a>
                        </li>
                        <li>
                            <a
                                href="tel:+919701400799"
                                className="hover:text-white"
                            >
                                🇮🇳 +91 9701400799
                            </a>
                        </li>
                        <li>
                            <a
                                href="tel:+19192403554"
                                className="hover:text-white"
                            >
                                🇺🇸 +1 9192403554 (WhatsApp)
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-green-800 py-6 text-center text-sm text-green-300">
                © {new Date().getFullYear()} PlanOurGrowth. All rights reserved.
            </div>
        </footer>
    )
}
