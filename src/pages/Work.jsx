import { Link } from "react-router-dom"


export default function Work() {
    return (
        <section className="max-w-4xl mx-auto px-6 pt-32 pb-16">
            <h1 className="text-3xl font-semibold mb-6">
                Our Work
            </h1>

            <p className="text-gray-700 leading-relaxed max-w-3xl">
                We operate with a strong commitment to privacy, security, and confidentiality
                across all collaborations. Every business has its own goals, challenges, and
                vision, and our work is designed to respect those differences while delivering
                tailored, data-driven solutions.
            </p>

            <div className="mt-8">

                <Link
                    to="/contact"
                    className="inline-block rounded-lg bg-green-600 px-6 py-3 text-white font-medium hover:bg-green-700 transition"
                >
                    Schedule a call
                </Link>
            </div>
        </section>
    )
}
