import React from 'react';
import { FaPencilAlt, FaTrash } from 'react-icons/fa'; // Import edit and delete icons

function MemberCard({ member, onEdit }) {
  return (
    <div className="bg-gray-400 text-white p-4 rounded-lg flex justify-between items-center">
      <div>
        <h3 className="font-semibold">{member.name}</h3>
        <p>{member.daysLeft} days left</p>
      </div>
      <div className="flex space-x-2">
        <button onClick={onEdit} className="bg-blue-500 p-2 rounded-lg hover:bg-blue-600">
          <FaPencilAlt />
        </button>
        <button className="bg-red-500 p-2 rounded-lg hover:bg-red-600">
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default MemberCard;
