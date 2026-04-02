import React, { useEffect, useState } from 'react';
import SingleFeatured from './SingleFeatured';

const FeaturedSection = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("projects.json")
            .then(res => res.json())
            .then(data => setProjects(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <section className="bg-[#050816] text-white px-6 py-20">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Selected <br /> Masterpieces
                    </h2>

                    <p className="text-gray-400 max-w-md">
                        A curated collection of our latest 3D visualizations, spatial
                        computing interfaces, and premium brand identities.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
                    {projects.map((item, index) => (
                        <SingleFeatured key={index} index={index} item={item} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default FeaturedSection;