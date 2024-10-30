import React from 'react';
import { RiErrorWarningLine } from "react-icons/ri"; // Warning Icon

function CancelMembershipModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null; // Don't render the modal if isOpen is false

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg w-[350px] md:w-[400px] lg:w-[500px] text-center">
        <RiErrorWarningLine className="text-red-500 text-6xl mb-4 mx-auto" /> {/* Warning Icon */}
        <h2 className="text-xl font-semibold mb-4">Cancel Membership</h2>
        <p className="text-gray-700 mb-6">Do you want to proceed?</p>

        <div className="flex justify-center space-x-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={onClose}
          >
            Go Back
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={onConfirm} // Confirm cancellation
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}

export default CancelMembershipModal;
