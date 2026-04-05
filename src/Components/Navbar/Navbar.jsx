
const Navbar = () => {
    return (
        <div className="bg-[#050816] p-4 flex justify-center">

            <div className="w-full max-w-6xl rounded-xl  bg-linear-to-r from-purple-600 via-blue-500 to-cyan-400">


                <div className="bg-[#0B0F1A] rounded-xl px-6 py-4 flex items-center justify-between">

                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-purple-600 rounded-md flex items-center justify-center">
                            <span className="text-white text-xs font-bold">A</span>
                        </div>
                        <span className="text-white font-semibold tracking-wide">
                            NEXUS
                        </span>
                    </div>


                    <div className="hidden md:flex items-center gap-8 text-gray-400 text-sm">
                        <a href="#" className="hover:text-white transition">Work</a>
                        <a href="#" className="hover:text-white transition">Studio</a>
                        <a href="#" className="hover:text-white transition">Services</a>
                        <a href="#" className="hover:text-white transition">Insights</a>
                    </div>


                    <button className="border border-gray-600 text-white text-sm px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
                        Let’s Talk
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Navbar;