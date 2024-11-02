import React from 'react';
import { IoMdExit } from "react-icons/io"; // Importing the exit icon

function SignOut() {
  return (
    <div className="flex items-center w-full py-4 px-6 bg-gray-700 text-white cursor-pointer hover:bg-black rounded-lg mb-1">
      {/* Icon on the left */}
      <IoMdExit className="text-[22px] mr-2" />

      {/* Text on the right */}
      <span className="font-semibold text-sm">Sign Out</span>
    </div>
  );
}

export default SignOut;
