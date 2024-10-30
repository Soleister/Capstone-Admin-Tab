import React, { useState } from 'react';
import { IoPersonOutline } from 'react-icons/io5'; // Member Icon
import { AiOutlineSearch, AiOutlinePlus } from 'react-icons/ai'; // Search and Plus Icon
import { FiSettings } from 'react-icons/fi'; // Gear Icon
import { AiOutlineBars } from 'react-icons/ai'; // Sorting Icon (similar to drop icon)
import { FaPencilAlt, FaTrash, FaSortAlphaDown, FaSortAlphaUp, FaSortNumericDownAlt } from 'react-icons/fa'; // Edit and delete icons and Sorting Icons
import EditMemberModal from '../modals/EditMemberModal'; // Edit modal
import ViewMemberModal from '../modals/ViewMemberModal'; // View-only modal
import EditMembershipDurationModal from '../modals/EditMembershipDurationModal'; // Membership Duration Modal
import CancelMembershipModal from '../modals/CancelMembershipModal'; // Cancel Membership Modal
import MembershipCanceledModal from '../modals/MembershipCanceledModal'; // Membership Canceled Confirmation Modal

function ManageMemberClicked() {
  const [isGearClicked, setIsGearClicked] = useState(false); // Toggle for showing/hiding icons
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Toggle for dropdown visibility
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // Toggle for edit modal visibility
  const [isViewModalOpen, setIsViewModalOpen] = useState(false); // Toggle for view-only modal visibility
  const [selectedMember, setSelectedMember] = useState(null); // Track the selected member
  const [isDurationModalOpen, setIsDurationModalOpen] = useState(false); // Toggle for membership duration modal
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false); // Toggle for cancel membership modal
  const [isCanceledModalOpen, setIsCanceledModalOpen] = useState(false); // Toggle for membership canceled confirmation
  const [members, setMembers] = useState([
    { id: 1, name: 'John Doe', contact: '0987654321', age: '25', daysLeft: 30 },
    { id: 2, name: 'Jane Doe', contact: '0912345678', age: '28', daysLeft: 20 },
    { id: 3, name: 'Sam Smith', contact: '0911223344', age: '30', daysLeft: 10 },
  ]);

  const [sortOrder, setSortOrder] = useState(''); // Track sorting type

  // Function to add a new member
  const addMember = () => {
    const newMember = {
      id: members.length + 1,
      name: 'New Member',
      contact: '',
      age: '',
      daysLeft: 30,
    };
    setMembers([...members, newMember]);
  };

  // Open the edit modal and set the selected member
  const handleEditClick = (member) => {
    setSelectedMember(member);
    setIsEditModalOpen(true);
  };

  // Open the view-only modal when clicking outside the icons
  const handleViewClick = (member) => {
    setSelectedMember(member);
    setIsViewModalOpen(true);
  };

  // Update member details after saving from the modal
  const handleSave = (updatedMember) => {
    setMembers(
      members.map((member) =>
        member.id === updatedMember.id ? updatedMember : member
      )
    );
    setIsEditModalOpen(false); // Close the modal after saving
  };

  // Handle membership duration save
  const handleDurationSave = (updatedMember) => {
    setMembers(
      members.map((member) =>
        member.id === updatedMember.id ? updatedMember : member
      )
    );
    setIsDurationModalOpen(false); // Close modal after saving duration
  };

  // Handle cancel membership
  const handleCancelMembership = (id) => {
    setMembers(members.filter((member) => member.id !== id)); // Remove member
    setIsCancelModalOpen(false); // Close cancel modal
    setIsCanceledModalOpen(true); // Open the canceled confirmation modal
  };

  // Sorting functions
  const sortByNameAsc = () => {
    setSortOrder('asc');
    const sortedMembers = [...members].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setMembers(sortedMembers);
  };

  const sortByNameDesc = () => {
    setSortOrder('desc');
    const sortedMembers = [...members].sort((a, b) =>
      b.name.localeCompare(a.name)
    );
    setMembers(sortedMembers);
  };

  const sortByDaysLeft = () => {
    setSortOrder('days');
    const sortedMembers = [...members].sort((a, b) => a.daysLeft - b.daysLeft);
    setMembers(sortedMembers);
  };

  return (
    <div className="p-6 ml-20">
      {/* Top Section: Manage Members and Search */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <IoPersonOutline className="text-[24px] mr-2" />
          <h1 className="text-[21px] font-semibold" style={{ fontFamily: 'Archivo, sans-serif' }}>
            Manage Members
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

      {/* Members Section */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <h2 className="text-lg font-semibold" style={{ fontFamily: 'Archivo, sans-serif' }}>
            Members
          </h2>
          <button
            className="ml-2 bg-black text-white rounded-full p-1 flex items-center"
            onClick={addMember}
          >
            <AiOutlinePlus className="text-lg" />
          </button>
        </div>

        {/* Sorting Dropdown and Gear Icon */}
        <div className="flex items-center space-x-2">
          <div className="relative inline-block text-left">
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
                  onClick={sortByNameAsc} // Sort by A to Z
                >
                  <FaSortAlphaDown className="mr-2" /> Sort A to Z
                </button>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-200 flex items-center"
                  onClick={sortByNameDesc} // Sort by Z to A
                >
                  <FaSortAlphaUp className="mr-2" /> Sort Z to A
                </button>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-200 flex items-center"
                  onClick={sortByDaysLeft} // Sort by Days Left
                >
                  <FaSortNumericDownAlt className="mr-2" /> Sort Days Left
                </button>
              </div>
            )}
          </div>

          <button
            className="flex items-center bg-gray-100 p-2 rounded-md hover:bg-gray-200"
            onClick={() => setIsGearClicked(!isGearClicked)}
          >
            <FiSettings className="text-xl" />
          </button>
        </div>
      </div>

      {/* Member List */}
      <div className="grid grid-cols-3 gap-4">
        {members.map((member) => (
          <div
            key={member.id}
            className="bg-gray-600 bg-opacity-40 text-white p-4 rounded-lg flex justify-between items-center"
            onClick={() => handleViewClick(member)} // View member info when clicking outside the icons
          >
            <div>
              <h3 className="font-semibold">{member.name}</h3>
              <p onClick={(e) => {
                e.stopPropagation(); // Prevent view modal from triggering
                setSelectedMember(member);
                setIsDurationModalOpen(true); // Open duration modal
              }}>
                {member.daysLeft} days left
              </p>
            </div>

            {isGearClicked && (
              <div className="flex space-x-2">
                <button
                  className="bg-white p-2 rounded-lg hover:bg-gray-100"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering view modal
                    handleEditClick(member);
                  }}
                >
                  <FaPencilAlt className="text-black" />
                </button>
                <button
                  className="bg-red-500 p-2 rounded-lg hover:bg-red-600"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering view modal
                    setSelectedMember(member);
                    setIsCancelModalOpen(true); // Open cancel membership modal
                  }}
                >
                  <FaTrash />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Edit Member Modal */}
      <EditMemberModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        member={selectedMember}
        onSave={handleSave} // Save updated information
      />

      {/* View Member Modal */}
      <ViewMemberModal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        member={selectedMember} // View-only member info
      />

      {/* Edit Membership Duration Modal */}
      <EditMembershipDurationModal
        isOpen={isDurationModalOpen}
        onClose={() => setIsDurationModalOpen(false)}
        member={selectedMember}
        onSave={handleDurationSave} // Save updated duration
      />

      {/* Cancel Membership Modal */}
      <CancelMembershipModal
        isOpen={isCancelModalOpen}
        onClose={() => setIsCancelModalOpen(false)}
        onConfirm={() => handleCancelMembership(selectedMember.id)} // Remove member on confirmation
      />

      {/* Membership Canceled Confirmation Modal */}
      <MembershipCanceledModal
        isOpen={isCanceledModalOpen}
        onClose={() => setIsCanceledModalOpen(false)} // Close confirmation modal
      />
    </div>
  );
}

export default ManageMemberClicked;
