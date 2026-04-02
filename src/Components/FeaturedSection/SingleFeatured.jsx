import React from 'react';

const SingleFeatured = ({ item }) => {
    return (
        <div
            className={`relative group rounded-xl overflow-hidden
            ${item?.highlight ? "border border-pink-500 shadow-[0_0_20px_rgba(255,0,150,0.4)]" : ""}`}
        >

            <img
                src={item?.img}
                alt={item?.title}
                className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />

            <div className="absolute bottom-4 left-4">
                <h3 className="text-lg font-semibold">{item?.title}</h3>
                <p className="text-sm text-gray-300">{item?.subtitle}</p>
            </div>

            <div className="absolute bottom-4 right-4">
                <div className="w-8 h-8 flex items-center justify-center bg-white/10 backdrop-blur rounded-full group-hover:bg-white/20 transition">
                    →
                </div>
            </div>

        </div>
    );
};

export default SingleFeatured;