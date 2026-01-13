export default function About() {
    return (
        <section className="w-full bg-white py-24">
            <div className="max-w-5xl mx-auto px-6">

                {/* Title */}
                <h1 className="text-4xl font-semibold text-gray-900 mb-6">
                    About Us
                </h1>

                {/* Intro line */}
                <p className="text-lg text-gray-600 mb-12 max-w-3xl">
                    We help businesses grow with clarity, strategy, and measurable outcomes.
                </p>

                {/* Main content */}
                <div className="space-y-6 text-gray-700 leading-relaxed text-base max-w-4xl">
                    <p>
                        We are a <span className="font-semibold text-gray-900">data-driven growth and strategy group</span>
                        focused on helping businesses grow with purpose and precision.
                        In a market filled with noise, trends, and short-term tactics, we believe
                        growth should never be based on guesswork.
                    </p>

                    <p>
                        Instead, it should be informed by data, guided by strategy,
                        and supported by systems that scale. Our speciality lies in
                        connecting data with real business decisions.
                    </p>

                    <p>
                        Before designing content, software, campaigns, or creative assets,
                        we study audience behavior, regional insights, market signals,
                        and performance data. This allows us to build strategies that are
                        not only creative, but also purposeful, efficient, and results-oriented.
                    </p>

                    <p>
                        Unlike traditional agencies that focus only on execution,
                        we partner with our clients to build
                        <span className="font-semibold text-gray-900"> long-term growth frameworks</span>.
                        Our approach is collaborative, transparent, and measurable -
                        ensuring every effort contributes to sustainable progress.
                    </p>

                    <p>
                        By combining strategy, data, and scalable software solutions,
                        our goal remains the same:
                        <span className="font-semibold text-green-700">
                            {" "}turn data into confident growth decisions.
                        </span>
                    </p>
                </div>

            </div>
        </section>
    )
}
