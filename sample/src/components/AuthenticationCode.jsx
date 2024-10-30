import React, { useState, useEffect } from 'react';
import { IoCopyOutline } from 'react-icons/io5'; // For the copy icon

function AuthenticationCode() {
  const [code, setCode] = useState('');

  // Function to generate a random 8-digit code
  const generateCode = () => {
    const newCode = Math.floor(10000000 + Math.random() * 90000000).toString().replace(/(\d{4})(\d{4})/, '$1-$2');
    setCode(newCode);
  };

  // Generate code when component mounts
  useEffect(() => {
    generateCode();
  }, []);

  // Function to handle copying the code to the clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    alert('Code copied to clipboard');
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      {/* Title */}
      <h1 className="text-2xl font-semibold mb-4">Authentication code</h1>

      {/* Authentication Code Display */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center bg-gray-400 text-white px-4 py-2 rounded-lg text-lg">
          {/* Placeholder for an icon */}
          <div className="flex items-center justify-center mr-2">
            <div className="bg-blue-500 rounded-full w-6 h-6"></div>
          </div>
          <span>{code}</span>
        </div>

        {/* Copy Icon */}
        <button onClick={handleCopy}>
          <IoCopyOutline className="text-3xl cursor-pointer" />
        </button>
      </div>

      {/* Regenerate Code Button */}
      <button
        onClick={generateCode}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Regenerate Code
      </button>
    </div>
  );
}

export default AuthenticationCode;
