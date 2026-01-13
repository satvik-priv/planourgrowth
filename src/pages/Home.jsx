import Hero from "../components/Hero"
import { CheckCircle, Target, Eye, Users } from "lucide-react"

export default function Home() {
    return (
        <>
            <Hero />

            <section className="max-w-5xl mx-auto px-6 py-20 space-y-12">

                {/* Why Businesses Choose Us */}
                <div className="max-w-3xl mr-auto rounded-2xl bg-green-50 p-8 flex gap-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-60">
                        <CheckCircle className="h-6 w-6 text-red" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">
                            Why Businesses Choose Us
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                           We eliminate the need for multiple vendors by offering an integrated
                            approach to <strong>strategy, applications, marketing, media, and technology</strong>.
                            Our solutions help businesses stay relevant to today’s market realities
                            and connect with the next generation of consumers.
                        </p>
                    </div>
                </div>

                {/* Mission */}
                <div className="max-w-3xl ml-auto rounded-2xl bg-blue-50 p-8 flex gap-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600/10">
                        <Target className="h-6 w-6 text-blue" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">
                            Our Mission
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            To help businesses grow through <strong>data, applications, analysis
                                and strategy</strong>, enabling smarter decisions, stronger systems,
                            and sustainable outcomes.
                        </p>
                    </div>
                </div>

                {/* Vision */}
                <div className="max-w-3xl mr-auto rounded-2xl bg-purple-50 p-8 flex gap-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600/10">
                        <Eye className="h-6 w-6 text-green-700" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">
                            Our Vision
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            To build a <strong>growth intelligence ecosystem</strong> that empowers
                            businesses in India and globally to scale with confidence, clarity,
                            and ethical data-driven decision-making—guided and owned by the
                            organizations themselves.
                        </p>
                    </div>
                </div>

                <div className="max-w-3xl ml-auto rounded-2xl bg-green-300 p-8 flex gap-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600/10">
                        <Users className="h-6 w-6 text-green-700" />
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">
                            Collaborators
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            We collaborate with a diverse ecosystem that includes universities and research institutions,
                            hospitality and food & beverage businesses (such as cafés, restaurants, breweries, pubs, and bars), startups, product-based companies, and youth leadership and civic organizations.
                        </p>
                    </div>
                </div>

            </section>
        </>
    )
}
