// LfgLogo.jsx
import React from 'react';

// Import the image
import LFGLogo from 'C:/Capstone-Admin-Tab/sample/src/assets/LFG.png'; // Adjust path if needed

function LfgLogo() {
  return (
    <div className="flex flex-col items-center text-center">
      {/* WELCOME TO */}
      <div className="text-lg font-bold mb-2">
        WELCOME TO
      </div>

      {/* LFG Image */}
      <div className="mb-2">
        <img src={LFGLogo} alt="LFG Logo" className="w-[200px] h-auto" /> {/* Adjust width as necessary */}
      </div>

      {/* Lifestyle Fitness Gym */}
      <div className="text-lg font-bold">
        Lifestyle Fitness Gym
      </div>
    </div>
  );
}

export default LfgLogo;
