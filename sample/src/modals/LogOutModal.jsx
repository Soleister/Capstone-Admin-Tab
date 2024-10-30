import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RiErrorWarningLine } from 'react-icons/ri'; // Import the red warning icon

function LogOutModal({ isOpen, onClose }) {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate('/'); // Redirect to the root (App.jsx or login page)
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-[300px]">
        {/* Red Warning Icon */}
        <div className="flex justify-center items-center text-red-500 text-6xl mb-4">
          <RiErrorWarningLine /> {/* Use the new red warning icon */}
        </div>
        <h2 className="text-xl font-semibold text-center mb-4 text-red-500">You are about to logout</h2>
        <p className="text-center mb-6">Do you want to proceed?</p>
        <div className="flex justify-between">
          <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={onClose}>
            Go Back
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogOutModal;
