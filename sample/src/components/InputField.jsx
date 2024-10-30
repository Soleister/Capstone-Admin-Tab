import { useState } from 'react';
import { CiMail } from 'react-icons/ci';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import the FaEye and FaEyeSlash icons

function InputField({ type }) {
  // State to track password visibility
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="login bg-white inline-flex justify-center py-2 px-4 rounded">
      {/* Relative container */}
      <div className="relative w-full">
        {/* Conditionally render CiMail icon for email */}
        {type === 'email' && (
          <CiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-[23px] h-auto" />
        )}
        
        {/* Input Field */}
        <input
          type={type === 'eye' && !isPasswordVisible ? 'password' : 'text'}  // Toggle between 'password' and 'text' types
          name={type === 'email' ? 'email' : 'password'}
          placeholder={type === 'email' ? 'Email' : 'Password'}
          className="py-2 pl-10 pr-10 rounded-[4px] h-[40px] w-[300px] bg-[#F3F3F3] shadow-md"
        />

        {/* Conditionally render FaEye or FaEyeSlash for password visibility toggle */}
        {type === 'eye' && (
          <span 
            onClick={togglePasswordVisibility} 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          >
            {isPasswordVisible ? (
              <FaEyeSlash className="w-[23px] h-auto" />
            ) : (
              <FaEye className="w-[23px] h-auto" />
            )}
          </span>
        )}
      </div>
    </div>
  );
}

export default InputField;
