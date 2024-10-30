import React from 'react';

function DeleteMemberModal({ isOpen, onClose, onDelete }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-[300px]">
        <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
        <p>Are you sure you want to delete this member?</p>
        <div className="flex justify-end space-x-2 mt-4">
          <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={onClose}>
            Cancel
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteMemberModal;
