import React, { useReducer, useEffect } from 'react';

const initialState = {
  text: '',
  darkMode: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TEXT':
      return { ...state, text: action.payload };
    case 'TOGGLE_MODE':
      return { ...state, darkMode: !state.darkMode };
    case 'CLEAR_TEXT':
      return { ...state, text: '' };
    case 'REMOVE_SPACES':
      return { ...state, text: state.text.replace(/\s+/g, ' ').trim() };
    default:
      return state;
  }
};

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [state.darkMode]);

  const handleCopy = () => {
    navigator.clipboard.writeText(state.text);
  };

  const wordCount = state.text.split(/\s+/).filter(word => word.length > 0).length;
  const charCount = state.text.length;
  const readingTime = (wordCount / 200).toFixed(2); // Assuming average reading speed

  return (
    <div className="p-5">
      <textarea
        className={`w-full mt-5 p-3 border rounded ${state.darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
        rows="5"
        value={state.text}
        onChange={(e) => dispatch({ type: 'SET_TEXT', payload: e.target.value })}
        placeholder="Start typing..."
      ></textarea>

      <textarea
        className={`w-full mt-5 p-3 border rounded ${state.darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
        rows="5"
        value={state.text}
        readOnly
        placeholder="Preview of your text..."
      ></textarea>

      <div className="mt-5 flex space-x-2">
        <button onClick={() => dispatch({ type: 'REMOVE_SPACES' })} className="btn">Remove Extra Spaces</button>
        <button onClick={() => dispatch({ type: 'SET_TEXT', payload: state.text.toUpperCase() })} className="btn">Uppercase</button>
        <button onClick={() => dispatch({ type: 'SET_TEXT', payload: state.text.toLowerCase() })} className="btn">Lowercase</button>
        <button onClick={handleCopy} className="btn">Copy to Clipboard</button>
        <button onClick={() => dispatch({ type: 'CLEAR_TEXT' })} className="btn">Clear Text</button>
      </div>

      <div className="mt-5">
        <p>Word Count: {wordCount}</p>
        <p>Character Count: {charCount}</p>
        <p>Estimated Reading Time: {readingTime} minutes</p>
      </div>
    </div>
  );
};

export default Home;
