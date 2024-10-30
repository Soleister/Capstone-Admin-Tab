import React, { useState } from 'react';

function EditMembershipDurationModal({ isOpen, onClose, member, onSave }) {
  const [daysLeft, setDaysLeft] = useState(member?.daysLeft || 30); // Initialize with the member's days left or 30 by default

  if (!isOpen) return null;

  const handleSave = () => {
    // Trigger the onSave callback and pass the updated member object
    onSave({ ...member, daysLeft });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[400px] rounded-lg p-6 shadow-lg relative">
        <h2 className="text-lg font-semibold mb-4">Edit Membership Duration</h2>

        <div className="space-y-4">
          <label className="block text-sm font-semibold">How many days would you like to add?</label>
          <input
            type="number"
            className="border border-gray-300 p-2 w-full rounded"
            value={daysLeft}
            onChange={(e) => setDaysLeft(e.target.value)}
          />
        </div>

        <div className="mt-6 flex justify-end space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={handleSave}>
            Save
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={onClose}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditMembershipDurationModal;
