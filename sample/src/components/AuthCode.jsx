import React from 'react';
import { CiStopwatch } from "react-icons/ci"; // Importing the stopwatch icon

function AuthCode() {
  return (
    <div className="flex items-center w-full py-4 px-6 bg-gray-700 text-white cursor-pointer hover:bg-black rounded-lg mb-1"> {/* Adjusted mb-1 */}
      {/* Icon on the left */}
      <CiStopwatch className="text-[22px] mr-2" />

      {/* Text on the right */}
      <span className="font-semibold text-sm">AUTHENTICATION CODE</span>
    </div>
  );
}

export default AuthCode;
