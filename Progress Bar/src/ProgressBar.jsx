import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < 100) {
      // Set a timeout to increment the progress state by 1 every 370(any) milliseconds
      const timer = setTimeout(() => setProgress(progress + 1), 370);
      return () => clearTimeout(timer); // Clear the timeout when the component unmounts or progress changes
    }
  }, [progress]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Progress Bar</h1>
      {/* Progress bar container with relative positioning for centering the percentage text  <relative> */}
      <div className="w-full max-w-xl bg-gray-200 rounded-full h-6">

        {/* Progress bar fill with dynamic width based on progress state */}
        <div
          className={`bg-blue-400 h-full rounded-full transition-all duration-300`}
          style={{ width: `${progress}%` }}
        ></div>

          {/* Percentage text centered inside the progress bar */}
        {/* <div className="absolute inset-0 flex items-center justify-center text-black font-bold">
          {progress}%
        </div> */}

      </div>
      <div className="mt-2 text-lg font-medium">
        {/* Display "Loading" with percentage if progress is less than 100%, otherwise "Complete" */}
        {progress < 100 ? `Loading... ${progress}%` : 'Complete!'}
      </div>
    </div>
  );
};

export default ProgressBar;
