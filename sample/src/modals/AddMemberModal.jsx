import React, { useState } from 'react';

function AddMemberModal({ isOpen, onClose, onAddMember }) {
  const [memberName, setMemberName] = useState('');

  const handleAdd = () => {
    if (memberName.trim()) {
      onAddMember(memberName);
      onClose(); // Close modal after adding
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-[300px]">
        <h2 className="text-xl font-semibold mb-4">Add New Member</h2>
        <input
          type="text"
          placeholder="Enter Member Name"
          value={memberName}
          onChange={(e) => setMemberName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        />
        <div className="flex justify-end space-x-2">
          <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={onClose}>
            Cancel
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddMemberModal;
