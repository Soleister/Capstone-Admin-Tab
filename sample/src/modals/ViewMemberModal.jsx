import React from 'react';

function ViewMemberModal({ isOpen, onClose, member }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[400px] md:w-[600px] lg:w-[700px] rounded-lg p-8 shadow-lg relative">
        <h2 className="text-xl font-bold mb-6">Member Information</h2>

        {/* Personal Info Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold border-b pb-2 mb-4">Personal Information</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <p className="text-sm font-semibold text-gray-700">First Name:</p>
              <p className="text-sm text-gray-900">{member?.name.split(' ')[0] || 'N/A'}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm font-semibold text-gray-700">Last Name:</p>
              <p className="text-sm text-gray-900">{member?.name.split(' ')[1] || 'N/A'}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm font-semibold text-gray-700">Contact Number:</p>
              <p className="text-sm text-gray-900">{member?.contact || 'N/A'}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm font-semibold text-gray-700">Address:</p>
              <p className="text-sm text-gray-900">{member?.address || 'N/A'}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm font-semibold text-gray-700">Date of Birth:</p>
              <p className="text-sm text-gray-900">{member?.dob || 'N/A'}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm font-semibold text-gray-700">Age:</p>
              <p className="text-sm text-gray-900">{member?.age || 'N/A'}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm font-semibold text-gray-700">Gender:</p>
              <p className="text-sm text-gray-900">{member?.gender || 'N/A'}</p>
            </div>
          </div>
        </div>

        {/* Membership Info Section */}
        <div>
          <h3 className="text-lg font-semibold border-b pb-2 mb-4">Membership Information</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <p className="text-sm font-semibold text-gray-700">Membership Type:</p>
              <p className="text-sm text-gray-900">{member?.membershipType || 'N/A'}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm font-semibold text-gray-700">Start Date:</p>
              <p className="text-sm text-gray-900">{member?.membershipStartDate || 'N/A'}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm font-semibold text-gray-700">Expiration Date:</p>
              <p className="text-sm text-gray-900">{member?.membershipExpirationDate || 'N/A'}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm font-semibold text-gray-700">Status:</p>
              <p className="text-sm text-gray-900">{member?.membershipStatus || 'N/A'}</p>
            </div>
          </div>
        </div>

        {/* Modal Buttons */}
        <div className="mt-6 flex justify-end space-x-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewMemberModal;
