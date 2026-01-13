{/*export default function Hero() {
    return (
        <section className="w-full bg-green-300 py-10 flex justify-center">
            <div className="flex flex-col items-center">
                <img
                    src="/logo.svg"
                    alt="PlanOurGrowth"
                    className="w-[420px]"
                />
                <p className="-mt-3 text-gray-800 text-lg tracking-widest">
                    Turning data into strategy, systems, and sustainable business growth.
                </p>
            </div>
          
        </section>
    )
} */}

export default function Hero() {
    return (
        <section className="relative w-full h-screen bg-green-300 flex items-center justify-center">

            {/* Centered content */}
            <div className="flex flex-col items-center text-center px-6">
                <img
                    src="/logo.svg"
                    alt="PlanOurGrowth"
                    className="w-[420px] md:w-[600px] lg:w-[720px] max-w-full"
                />

                <p className="mt-8 text-grey-800 text-lg md:text-2xl tracking-wide max-w-4xl">
                    Turning data into strategy, systems, and sustainable business growth.
                </p>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 text-xl text-gray-900 opacity-70">
                🖱️ Scroll ↓
            </div>

        </section>
    )
}


