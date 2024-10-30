import React, { useState } from 'react';
import { IoPersonOutline } from 'react-icons/io5'; // Member Icon
import { AiOutlineSearch } from 'react-icons/ai'; // Search Icon
import { AiOutlineBars } from 'react-icons/ai'; // Sorting Icon (similar to drop icon)
import { FiSettings } from 'react-icons/fi'; // Gear Icon
import { FaSortAlphaDown, FaSortAlphaUp } from 'react-icons/fa'; // Sorting Icons

function MembersArchive() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Toggle for dropdown visibility
  const [isGearClicked, setIsGearClicked] = useState(false); // Toggle for select all / delete all
  const [selectedMembers, setSelectedMembers] = useState([]); // Track selected members
  const [members, setMembers] = useState([
    { id: 1, name: 'Lorem Ipsum' },
    { id: 2, name: 'Lorem Ipsum' },
    { id: 3, name: 'Lorem Ipsum' },
  ]);

  // Sorting functions
  const sortAToZ = () => {
    const sortedMembers = [...members].sort((a, b) => a.name.localeCompare(b.name));
    setMembers(sortedMembers);
  };

  const sortZToA = () => {
    const sortedMembers = [...members].sort((a, b) => b.name.localeCompare(a.name));
    setMembers(sortedMembers);
  };

  // Select All functionality
  const handleSelectAll = () => {
    if (selectedMembers.length === members.length) {
      setSelectedMembers([]); // Deselect all if already selected
    } else {
      setSelectedMembers(members.map((member) => member.id)); // Select all
    }
  };

  // Toggle individual selection
  const handleSelect = (id) => {
    setSelectedMembers((prev) =>
      prev.includes(id) ? prev.filter((memberId) => memberId !== id) : [...prev, id]
    );
  };

  // Delete selected members
  const handleDeleteSelected = () => {
    setMembers((prev) => prev.filter((member) => !selectedMembers.includes(member.id)));
    setSelectedMembers([]); // Clear selection after delete
  };

  return (
    <div className="p-6 ml-20">
      {/* Top Section: Members Archive and Search */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <IoPersonOutline className="text-[24px] mr-2" />
          <h1 className="text-[21px] font-semibold" style={{ fontFamily: 'Archivo, sans-serif' }}>
            Members Archive
          </h1>
        </div>

        <div className="flex-grow"></div>

        <div className="flex items-center border rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="Search name"
            className="border-none outline-none"
            style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px' }}
          />
          <AiOutlineSearch className="ml-2 text-lg" />
        </div>
      </div>

      {/* Sorting and Gear Section */}
      <div className="flex justify-end items-center mb-6 space-x-4">
        <button
          className="flex items-center bg-gray-100 p-2 rounded-md hover:bg-gray-200"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <AiOutlineBars className="text-xl" />
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
            <button
              className="w-full text-left px-4 py-2 hover:bg-gray-200 flex items-center"
              onClick={sortAToZ}
            >
              <FaSortAlphaDown className="mr-2" /> Sort A to Z
            </button>
            <button
              className="w-full text-left px-4 py-2 hover:bg-gray-200 flex items-center"
              onClick={sortZToA}
            >
              <FaSortAlphaUp className="mr-2" /> Sort Z to A
            </button>
          </div>
        )}

        <button
          className="flex items-center bg-gray-100 p-2 rounded-md hover:bg-gray-200"
          onClick={() => setIsGearClicked(!isGearClicked)}
        >
          <FiSettings className="text-xl" />
        </button>
      </div>

      {/* Archived Members List */}
      <div className="grid grid-cols-1 gap-4 max-w-lg">
        {members.map((member) => (
          <div
            key={member.id}
            className={`bg-gray-600 bg-opacity-40 text-white p-4 rounded-lg flex justify-between items-center ${
              selectedMembers.includes(member.id) ? 'ring-2 ring-blue-500' : ''
            }`}
            style={{ minWidth: '250px' }}
          >
            <h3 className="font-semibold">{member.name}</h3>
            {isGearClicked && (
              <input
                type="checkbox"
                checked={selectedMembers.includes(member.id)}
                onChange={() => handleSelect(member.id)}
              />
            )}
          </div>
        ))}
      </div>

      {/* Select and Delete Buttons */}
      {isGearClicked && (
        <div className="flex justify-end mt-6 space-x-4">
          <button
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
            onClick={handleSelectAll}
          >
            {selectedMembers.length === members.length ? 'Deselect All' : 'Select All'}
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            onClick={handleDeleteSelected}
          >
            Delete All
          </button>
        </div>
      )}
    </div>
  );
}

export default MembersArchive;
