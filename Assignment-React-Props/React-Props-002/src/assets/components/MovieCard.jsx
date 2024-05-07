import React from 'react';

const MovieCard = ({ title, subtitle, description, imageUrl, rating, duration, category, poster }) => {
    return (
        <div className="h-auto max-w-full mx-auto bg-[#0f0f0f] rounded-xl shadow-md overflow-hidden md:max-w-4xl flex mb-6 shadow-2 shadow-white/50 hover:scale-105 transition duration-300 cursor-pointer">
            <div className="md:w-1/2">
                <img className="h-64 w-full object-cover" src={imageUrl} alt={title} />
            </div>
            <div className="md:w-full p-8">
                <a href="#" className="block mt-1 text-lg leading-tight font-medium text-white hover:underline">{title}</a>
                <div className="tracking-wide text-sm text-blue-500 font-semibold">{subtitle}</div>
                <div className="mt-4">
                    <span className="text-teal-500 font-semibold">{rating}</span>
                    <span className="ml-2 text-gray-400">/ 10</span>
                </div>
                <div className="mt-4">
                    <span className="text-gray-300 outline outline-1 outline-offset-1 p-0.5">{duration}</span>
                </div>
                <div className="mt-2">
                    <span className="text-gray-300">Category: {category}</span>
                </div>
                <p className="mt-2 text-gray-300">{description}</p>

            </div>
            <div className="hidden md:block md:w-4/5 relative">
                <img className="w-full h-full" src={poster} alt={`${title} Character`} />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,0.9))' }}></div>
            </div>
        </div>
    );
};

export default MovieCard;
