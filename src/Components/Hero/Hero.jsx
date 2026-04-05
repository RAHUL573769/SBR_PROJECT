export default function Hero() {
    return (
        <div className="min-h-screen bg-linear-to-b from-black via-[#050816] to-[#0a0f2c] flex items-center justify-center px-6">

            <div className="text-center max-w-3xl">

                <div className="inline-block px-4 py-1 mb-6 text-sm text-gray-300 border border-gray-700 rounded-full">
                    Award-Winning Design Agency
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                    We Build Iconic <br />
                    Brands
                </h1>


                <p className="mt-6 text-gray-400 text-base md:text-lg">
                    A creative agency designing digital experiences for tomorrow.
                    We blend high-end aesthetics with powerful strategy to craft
                    legendary digital products.
                </p>


                <div className="mt-8 flex justify-center gap-4">


                    <button className="px-6 py-3 bg-linear-to-r from-purple-500 to-indigo-500 text-white rounded-lg hover:opacity-90 transition">
                        View Projects →
                    </button>


                    <button className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition">
                        Our Expertise
                    </button>

                </div>
            </div>
        </div>
    );
}