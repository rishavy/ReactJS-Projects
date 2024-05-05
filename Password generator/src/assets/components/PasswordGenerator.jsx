import React, { useState } from 'react';
import { FiCopy } from 'react-icons/fi';

const PasswordGenerator = () => {
    const [password, setPassword] = useState('');
    const [passwordLength, setPasswordLength] = useState(8);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
    const [copied, setCopied] = useState(false);

    const generatePassword = () => {
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const numberChars = '0123456789';
        const specialChars = '!@#$%^&*()_+{}[]<>?';

        let chars = '';
        if(includeUppercase) chars += uppercaseChars;
        if(includeLowercase) chars += lowercaseChars;
        if(includeNumbers) chars += numberChars;
        if(includeSpecialChars) chars += specialChars;

        let generatedPassword = '';
        for(let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            generatedPassword += chars[randomIndex];
        }
        setPassword(generatedPassword);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(password);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-4 bg-[#f7f7f7] rounded-lg shadow-lg backdrop-blur-md">
        <h1 className="text-3xl font-bold mb-4">Password Generator</h1>
        <div className="mb-4">
            <label className="block mb-2">Password Length: {passwordLength}</label>
            <input
                type="range"
                min="1"
                max="50"
                value={passwordLength}
                onChange={(e) => setPasswordLength(parseInt(e.target.value))}
                className="w-full"
            />
        </div>
        <div className="mb-4 flex items-center">
            <label className="block mb-2 mr-4">
            <input
                type="checkbox"
                checked={includeUppercase}
                onChange={() => setIncludeUppercase(!includeUppercase)}
                className="ml-2"
            />
            &nbsp; Capital Letters (A-Z)
            </label>
        </div>
        <div className="mb-4 flex items-center">
            <label className="block mb-2 mr-4">
                <input
                    type="checkbox"
                    checked={includeLowercase}
                    onChange={() => setIncludeLowercase(!includeLowercase)}
                    className="ml-2"
                />
                &nbsp; Small Letters (a-z)
            </label>
        </div>
        <div className="mb-4 flex items-center">
            <label className="block mb-2 mr-4">
            <input
                type="checkbox"
                checked={includeNumbers}
                onChange={() => setIncludeNumbers(!includeNumbers)}
                className="ml-2"
            />
            &nbsp; Numbers (0-9)
            </label>
        </div>
        <div className="mb-4 flex items-center">
            <label className="block mb-2 mr-4">
            <input
                type="checkbox"
                checked={includeSpecialChars}
                onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
                className="ml-2"
            />
            &nbsp; Special Characters (!@#$%...)
            </label>
        </div>
        <button onClick={generatePassword} className="bg-[#4299e1] text-white px-4 py-2 rounded hover:bg-[#3182ce] *:-600">
        Generate Password
        </button>
        <div className="mt-4 flex items-center">
            <input type="text" value={password} readOnly className="w-full p-2 border rounded-md mr-2" />
            <button onClick={handleCopy} className="bg-[#4299e1] text-white px-4 py-2 rounded hover:bg-[#3182ce]">
            {copied ? 'Copied!' : <FiCopy />}
            </button>
        </div>
        </div>
    );
};

export default PasswordGenerator;
