import React, { useEffect, useState } from 'react';

const Capabilities = () => {

    const [capabilities, singleCapabilities] = useState([])
    useEffect(() => {

        fetch("capabilities.json").
            then(res => res.json()).
            then(data => singleCapabilities(data))
    }, [])
    return (
        <div>
            <section className="bg-[#0b1220] text-white py-20 px-6 md:px-16">

                <div className="text-center max-w-2xl mx-auto mb-14">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                        Our Capabilities
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base">
                        We are a multi-disciplinary studio leveraging future-ready technologies
                        to craft industry-leading platforms.
                    </p>
                </div>


                <div className="grid md:grid-cols-3 gap-6">
                    {capabilities.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="bg-[#0f172a] border border-white rounded-xl p-6 hover:border-purple-500/40 transition duration-300 group"
                            >

                                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-600/20 mb-5 group-hover:bg-purple-600/30 transition">
                                    <Icon className="text-purple-400 w-6 h-6" />
                                </div>


                                <h3 className="text-lg font-semibold mb-2">
                                    {item.title}
                                </h3>


                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

        </div>
    );
};

export default Capabilities;