import React, { useState } from 'react';
import { BiTransferAlt } from "react-icons/bi";
import { translateText } from './api';
import LanguageSelector from './components/LanguageSelector';

function App() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('Translation');
  const [sourceLanguage, setSourceLanguage] = useState('en');
  const [targetLanguage, setTargetLanguage] = useState('hi');

  const handleTranslate = async () => {
    if (!targetLanguage) {
      alert('Please select a target language.');
      return;
    }

    try {
      const translatedText = await translateText(sourceLanguage, targetLanguage, query);
      setResult(translatedText);
    } catch (error) {
      setResult('Translation Error');
    }
  };

  return (
    <div className="app">
      <div className='header'>
        <img src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/language-translation-icon.png" alt="logo" />
        <h1>Universal Language Translator</h1>
        <p></p>
      </div>
      <div className="selectors">
        <div>
          {/* <label>Source Language: </label> */}
          <LanguageSelector selectedLanguage={sourceLanguage} handleChange={setSourceLanguage} />
        </div>
        <BiTransferAlt />
        <div>
          {/* <label>Target Language: </label> */}
          <LanguageSelector selectedLanguage={targetLanguage} handleChange={setTargetLanguage} />
        </div>
      </div>
      <div className='container'>
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter text to translate"
        ></textarea>
        <div className="result">{result}</div>
      </div>
      <button onClick={handleTranslate}>Translate</button>
    </div>
  );
}

export default App;
