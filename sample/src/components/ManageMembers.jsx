import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { IoPersonOutline } from "react-icons/io5";

function ManageMembers() {
  return (
    <Link to="/main/manage-members" className="w-full">
      <div className="flex items-center w-full py-4 px-6 bg-gray-700 text-white cursor-pointer hover:bg-black rounded-lg mb-1">
        <IoPersonOutline className="text-[16px] mr-2" />
        <span className="font-semibold text-sm">MANAGE MEMBERS</span>
      </div>
    </Link>
  );
}

export default ManageMembers;
