import {
    TrendingUp,
    BarChart3,
    Palette,
    FileText,
    PieChart,
    Zap,
    BookOpen,
    Globe,
    Rocket,
    Code,
    Layers
} from "lucide-react"

export default function Services() {
    const services = [
        {
            icon: TrendingUp,
            title: "Growth & Marketing Strategy",
            description:
                "Strategic growth and marketing frameworks grounded in data, market behavior, and business objectives."
        },
        {
            icon: BarChart3,
            title: "Data Marketing",
            description:
                "Data-driven insights guiding audience targeting, performance measurement, and optimization."
        },
        {
            icon: Layers,
            title: "Bridging Organizations & Generations",
            description:
                "Aligning brand messaging, platforms, and strategy with evolving generational behaviors."
        },
        {
            icon: Rocket,
            title: "Strategic Development Solutions",
            description:
                "Strategic ideas and solutions supporting expansion, efficiency, and sustainable growth."
        },
        {
            icon: Palette,
            title: "Brand Identity & Visual Design",
            description:
                "Logos, visual assets, and design systems that reflect strategy, culture, and audience insight."
        },
        {
            icon: FileText,
            title: "Content Strategy",
            description:
                "Content strategies aligning storytelling with data, platforms, and business goals."
        },
        {
            icon: PieChart,
            title: "Reporting & Analytics",
            description:
                "Clear dashboards and analytics to understand performance and identify growth opportunities."
        },
        {
            icon: Zap,
            title: "Startup & Investment Support",
            description:
                "Strategic guidance for startups, validation, collaboration, and growth planning."
        },
        {
            icon: BookOpen,
            title: "Academic & Youth Collaboration",
            description:
                "Innovation partnerships with universities and young professionals."
        },
        {
            icon: Globe,
            title: "Region-Specific Growth Strategies",
            description:
                "Localized strategies based on cultural and regional market insights."
        },
        {
            icon: Globe,
            title: "Global Strategy & Management",
            description:
                "Planning and managing growth across regions with aligned execution."
        },
        {
            icon: Code,
            title: "Web, App & Digital Solutions",
            description:
                "Websites and applications integrating strategy, UX, and analytics."
        }
    ]

    return (
        <section className="w-full bg-gray-50 py-24">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-semibold text-gray-900 mb-4">
                        Our Services
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Data-driven growth and marketing solutions designed to help
                        organizations adapt, scale, and stay relevant.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition"
                            >
                                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-6">
                                    <Icon className="text-green-700" size={24} />
                                </div>

                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}
