import React from 'react';
import MovieCard from './assets/components/MovieCard';
import moviesData from './assets/components/moviesData';

const App = () => {
  return (
      <div className="container mx-auto px-4 py-14">
        <img className='h-14 w-14 pt-0' src="https://cdn-icons-png.freepik.com/256/1179/1179069.png?semt=ais_hybrid" />
          <div className="grid grid-cols-1">
              {moviesData.map(movie => (
                  <div key={movie.id} className="mb-6">
                      <MovieCard
                          title={movie.title}
                          subtitle={movie.subtitle}
                          description={movie.description}
                          imageUrl={movie.imageUrl}
                          poster={movie.poster}
                          rating={movie.rating}
                          duration={movie.duration}
                          category={movie.category}
                      />
                  </div>
              ))}
          </div>
      </div>
  );
};

export default App;
