// About.jsx

import React from 'react';
import Stats from '../stats/Stats';

export default function About() {
    return (
        <div className="relative isolate px-6 pt-14 lg:px-8 mt-20">
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">About Us</h1>

                <div className="flex flex-col lg:flex-row lg:space-x-12">
                    <div className="lg:w-1/2">
                        <img src="https://t3.ftcdn.net/jpg/01/35/70/90/360_F_135709080_2XHH0eeTGZ6rAaxgyuLKKdTaUCZAgPCZ.jpg " alt="Company Image" className="rounded-lg shadow-lg" />
                    </div>
                    <div className="lg:w-1/2 mt-6 lg:mt-0">
                        <p className="text-lg text-gray-700 leading-relaxed">
                        Our journey began with a simple idea: to revolutionize how people interact with technology. From our humble beginnings in a garage to becoming a global leader, innovation and customer satisfaction have always been at the heart of everything we do.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mt-4">
                        Dedicated to excellence, we strive to exceed expectations in every project we undertake. With a commitment to integrity and quality, we build lasting partnerships and deliver results that make a difference.
                        </p>
                    </div>
                </div>

                
            </div>
            <Stats />
        </div>
    );
}
