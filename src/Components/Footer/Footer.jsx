

const Footer = () => {
    return (
        <footer className="bg-[#0B0F1A] text-gray-400 px-6 md:px-16 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">


                <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-purple-600 rounded-sm flex items-center justify-center">
                        <span className="text-white text-xs font-bold">A</span>
                    </div>
                    <span className="text-white font-semibold">
                        NEXUS
                    </span>
                </div>


                <div className="text-sm text-gray-500 text-center">
                    © 2025 Nexus Creative Agency. All rights reserved.
                </div>


                <div className="flex gap-6 text-sm">
                    <a href="#" className="hover:text-white ">
                        Twitter
                    </a>
                    <a href="#" className="hover:text-white ">
                        Instagram
                    </a>
                    <a href="#" className="hover:text-white ">
                        Dribbble
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;