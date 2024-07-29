import axios from 'axios';

const API_URL = 'https://text-translator2.p.rapidapi.com/translate';
const API_KEY = 'b8bb314eb8msh5bcb832919161fdp12af72jsn4c6c655daa90';

export const translateText = async (sourceLanguage, targetLanguage, text) => {
  const encodedParams = new URLSearchParams();
  encodedParams.append('source_language', sourceLanguage);
  encodedParams.append('target_language', targetLanguage);
  encodedParams.append('text', text);

  const options = {
    method: 'POST',
    url: API_URL,
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
    },
    data: encodedParams.toString(),
  };

  try {
    const response = await axios.request(options);
    return response.data.data.translatedText;
  } catch (error) {
    console.error('Error translating text:', error);
    throw new Error('Translation failed');
  }
};

