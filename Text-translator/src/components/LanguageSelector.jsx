import React from 'react';
import languages from '../Language';

const LanguageSelector = ({ selectedLanguage, handleChange }) => {
  return (
    <select value={selectedLanguage} onChange={(e) => handleChange(e.target.value)}>
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;
