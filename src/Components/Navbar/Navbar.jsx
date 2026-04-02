
const Navbar = () => {
    return (

        <div className="w-full flex justify-center py-4">
            <div className="w-[95%] max-w-6xl border border-blue-500/40 rounded-xl px-6 py-3 flex items-center justify-between backdrop-blur-md shadow-lg">

                <div className="flex items-center gap-2 text-white font-semibold text-lg">
                    <div className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold">
                        <img src="../../../public/Background.png" alt="" srcset="" />                   </div>
                    NEXUS
                </div>


                <div className="hidden md:flex  gap-8 text-sm text-gray-300">
                    <button>Work</button>
                    <button>Studio</button>
                    <button>Services</button>
                </div>
                <div>
                    <button className='rounded-4xl'>Let's Talk</button>
                </div>

            </div>
        </div>

    );
};

export default Navbar;