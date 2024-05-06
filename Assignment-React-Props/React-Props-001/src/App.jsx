import React from 'react';
import ColorPicker from './assets/components/ColorPicker';
import colors from './assets/components/colors';

const App = () => {
  return (
    <div className="container mx-auto mt-8">
      {/* <h1 className="text-4xl font-semibold text-center mb-4">Color Picker</h1> */}
      <h1 className="text-5xl font-semibold text-center my-12">
        <span className="text-red-500 border-solid border-black border-2 px-2">C</span>
        <span className="text-green-500 border-solid border-black border-2 px-2">o</span>
        <span className="text-blue-500 border-solid border-black border-2 px-2">l</span>
        <span className="text-yellow-500 border-solid border-black border-2 px-2">o</span>
        <span className="text-purple-500 border-solid border-black border-2 px-2">r</span>
        <span className="text-indigo-500 border-solid border-2 px-2"> </span>
        <span className="text-pink-500 border-solid border-black border-2 px-2">P</span>
        <span className="text-orange-500 border-solid border-black border-2 px-2">i</span>
        <span className="text-teal-500 border-solid border-black border-2 px-2">c</span>
        <span className="text-cyan-500 border-solid border-black border-2 px-2">k</span>
        <span className="text-orange-500 border-solid border-black border-2 px-2">e</span>
        <span className="text-lime-500 border-solid border-black border-2 px-2">r</span>
      </h1>
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;
