import React, { useState, useEffect } from 'react';
import { FiCopy } from 'react-icons/fi';

const PasswordGenerator = () => {
    const [password, setPassword] = useState('');
    const [passwordLength, setPasswordLength] = useState(8);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
    const [copied, setCopied] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

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

        if (chars.length === 0) {
            setErrorMessage('* Please select at least one option for password generation');
            setPassword('');
            return;
        }

        let generatedPassword = '';
        for(let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            generatedPassword += chars[randomIndex];
        }
        setPassword(generatedPassword);
        setErrorMessage('');
    };

    useEffect(() => {
        generatePassword();
    }, [includeUppercase, includeLowercase, includeNumbers, includeSpecialChars, passwordLength]);

    const handleCopy = () => {
        navigator.clipboard.writeText(password);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
    };

    return (
        <div className="max-w-xl mx-auto mt-8 p-4 bg-[#ffffffe7] rounded-lg shadow-lg backdrop-blur-md">
        <h1 className="text-3xl font-bold mb-6">Password Generator</h1>
        <div className="mt-4 flex items-center">
            <input type="text" value={password} readOnly className="w-full p-2 border rounded-md mr-2" />
            <button onClick={handleCopy} className="bg-[#4299e1] text-white font-semibold px-4 py-2 rounded hover:bg-[#3182ce]">
            {copied ? 'Copied!' : <FiCopy />}
            </button>
        </div>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <div className="mb-4 mt-4">
            <label className="block mb-2">Password Length: {passwordLength}</label>
            <input
                type="range"
                min="4"
                max="50"
                value={passwordLength}
                onChange={(e) => setPasswordLength(parseInt(e.target.value))}
                className="w-full"
            />
        </div>
        <div className="mb-1 flex items-center">
            <label className="block mb-1 mr-4">
            <input
                type="checkbox"
                checked={includeUppercase}
                onChange={() => setIncludeUppercase(!includeUppercase)}
                className="ml-2"
            />
            &nbsp; Capital Letters (A-Z)
            </label>
        </div>
        <div className="mb-1 flex items-center">
            <label className="block mb-1 mr-4">
                <input
                    type="checkbox"
                    checked={includeLowercase}
                    onChange={() => setIncludeLowercase(!includeLowercase)}
                    className="ml-2"
                />
                &nbsp; Small Letters (a-z)
            </label>
        </div>
        <div className="mb-1 flex items-center">
            <label className="block mb-1 mr-4">
            <input
                type="checkbox"
                checked={includeNumbers}
                onChange={() => setIncludeNumbers(!includeNumbers)}
                className="ml-2"
            />
            &nbsp; Numbers (0-9)
            </label>
        </div>
        <div className="mb-1 flex items-center">
            <label className="block mb-1 mr-4">
            <input
                type="checkbox"
                checked={includeSpecialChars}
                onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
                className="ml-2"
            />
            &nbsp; Special Characters (!@#$%...)
            </label>
        </div>
        <button onClick={generatePassword} className="mt-4 bg-[#4299e1] text-white font-semibold tracking-wide px-28 py-2 rounded hover:bg-[#3182ce]">
        Generate Password
        </button>
        </div>
    );
};

export default PasswordGenerator;
