import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai'; // Check Icon

function MembershipCanceledModal({ isOpen, onClose }) {
  if (!isOpen) return null; // Don't render the modal if isOpen is false

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg w-[350px] md:w-[400px] lg:w-[500px] text-center">
        <AiOutlineCheckCircle className="text-blue-500 text-6xl mb-4 mx-auto" /> {/* Check Icon */}
        <h2 className="text-xl font-semibold mb-4">Membership Canceled</h2>
        <p className="text-gray-700 mb-6">The membership has been successfully canceled.</p>

        <div className="text-center">
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
            onClick={onClose} // Close the modal
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
}

export default MembershipCanceledModal;
