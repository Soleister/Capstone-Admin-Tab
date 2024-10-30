import { useState } from 'react';

function RemForPass() {
  const [isChecked, setIsChecked] = useState(false);

  // Toggle checkbox state
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex justify-center items-center mt-4 w-full"> {/* Centered content */}
      {/* Remember me section */}
      <div className="flex items-center mr-16"> {/* Add margin-right to separate from link */}
        <input
          type="checkbox"
          id="rememberMe"
          checked={isChecked}
          onChange={toggleCheckbox}
          className="w-4 h-4 border-2 border-gray-300 rounded-sm cursor-pointer mr-2"
        />
        <label htmlFor="rememberMe" className="text-gray-600 text-sm cursor-pointer">
          Remember me
        </label>
      </div>

      {/* Forget Password link */}
      <a href="#" className="text-gray-600 text-sm underline cursor-pointer">
        Forget Password?
      </a>
    </div>
  );
}

export default RemForPass;
