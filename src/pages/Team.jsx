export default function Team() {
    return (
        <section className="w-full bg-white py-24">
            <div className="max-w-5xl mx-auto px-6">

                {/* Title */}
                <h1 className="text-4xl font-semibold text-gray-900 mb-6">
                    Our Team
                </h1>

                {/* Intro */}
                <p className="text-lg text-gray-600 mb-12 max-w-3xl">
                    A collaborative network of professionals, researchers, and strategists
                    working at the intersection of data, technology, and growth.
                </p>

                {/* Content */}
                <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
                    <p>
                        We are a <span className="font-semibold text-gray-900">diverse group of professionals, researchers, and strategists</span>{" "}
                        with backgrounds spanning data analytics, marketing strategy,
                        computer science, and technology.
                    </p>

                    <p>
                        Our team includes contributors from universities and institutions
                        across <span className="font-semibold text-gray-900">North America and India</span>,
                        bringing together global perspectives with strong regional understanding.
                        We collaborate closely with professors, researchers, and industry
                        practitioners to ensure our work is grounded in both academic rigor
                        and real-world application.
                    </p>

                    <p>
                        In addition, we actively work with students and early-career
                        professionals from multiple universities and disciplines.
                        This collaborative model fosters innovation, fresh thinking,
                        and hands-on learning, while helping us stay aligned with emerging
                        technologies and evolving market behavior.
                    </p>

                    <p>
                        By combining research-driven insights, practical experience,
                        and cross-generational collaboration, we deliver solutions that are
                        <span className="font-semibold text-green-700">
                            {" "}thoughtful, adaptive, and built for long-term impact.
                        </span>
                    </p>
                </div>

            </div>
        </section>
    )
}
