export default function JoinUs() {
    return (
        <section className="w-full bg-white py-24">
            <div className="max-w-4xl mx-auto px-6">

                {/* Title */}
                <h1 className="text-4xl font-semibold text-gray-900 mb-6">
                    Join Us
                </h1>

                {/* Intro */}
                <p className="text-lg text-gray-600 mb-10 max-w-3xl">
                    We collaborate with professionals, researchers, and specialists across
                    regions to support our projects and growth initiatives.
                </p>

                {/* Content */}
                <div className="space-y-6 text-gray-700 leading-relaxed max-w-3xl">
                    <p>
                        We recruit talent on a requirement basis across
                        <span className="font-semibold text-gray-900"> India and North America</span>.
                        Our opportunities span strategy, data analytics, marketing, technology,
                        research, and related disciplines.
                    </p>

                    <p>
                        If you are interested in being considered for future opportunities or
                        collaborations, we encourage you to share your resume with us.
                        We maintain a growing talent database and reach out as suitable roles
                        or projects become available.
                    </p>

                    <p>
                        <span className="font-semibold text-gray-900">Email your resume to:</span>
                        <br />
                        <a
                            href="mailto:planourgrowth@gmail.com"
                            className="text-green-700 font-semibold hover:underline"
                        >
                            planourgrowth@gmail.com
                        </a>
                    </p>
                </div>

                {/* Optional CTA box */}
                <div className="mt-16 bg-green-50 border border-green-200 rounded-xl p-8">
                    <p className="text-gray-800 text-sm">
                        We value curiosity, collaboration, and data-driven thinking.
                        If you are passionate about strategy, growth, and meaningful impact,
                        we would be happy to connect.
                    </p>
                </div>

            </div>
        </section>
    )
}

