import React from 'react';

const MovieCard = ({ title, subtitle, description, imageUrl, rating, duration, category, poster }) => {
    return (
        <div className="max-w-full mx-auto bg-[#0f0f0f] rounded-xl shadow-md overflow-hidden md:max-w-2xl flex mb-6">
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
            <div className="hidden md:block md:w-1/2">
                <img className="h-96 w-full object-cover" src={poster} alt={`${title} Character`} />
            </div>
        </div>
    );
};

export default MovieCard;
