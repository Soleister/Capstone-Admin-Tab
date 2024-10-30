import React, { useState } from 'react';

function EditMemberModal({ isOpen, onClose, onSave, member }) {
  const [showMore, setShowMore] = useState(false); // Toggle for showing membership info
  const [firstName, setFirstName] = useState(member?.name.split(' ')[0] || ''); // Input state for first name
  const [lastName, setLastName] = useState(member?.name.split(' ')[1] || ''); // Input state for last name
  const [contactNumber, setContactNumber] = useState(member?.contact || ''); // Input state for contact number
  const [address, setAddress] = useState(member?.address || ''); // Input state for address
  const [dateOfBirth, setDateOfBirth] = useState(member?.dob || ''); // Input state for DOB
  const [age, setAge] = useState(member?.age || ''); // Input state for age
  const [gender, setGender] = useState(member?.gender || ''); // Input state for gender

  const [membershipType, setMembershipType] = useState(member?.membershipType || ''); // Input state for membership type
  const [membershipStartDate, setMembershipStartDate] = useState(member?.membershipStartDate || ''); // Input state for membership start date
  const [membershipExpirationDate, setMembershipExpirationDate] = useState(member?.membershipExpirationDate || ''); // Input state for membership expiration date
  const [membershipStatus, setMembershipStatus] = useState(member?.membershipStatus || ''); // Input state for membership status

  if (!isOpen) return null; // Modal will not render unless isOpen is true

  const handleSave = () => {
    const updatedMember = {
      ...member,
      name: `${firstName} ${lastName}`,
      contact: contactNumber,
      address,
      dob: dateOfBirth,
      age,
      gender,
      membershipType,
      membershipStartDate,
      membershipExpirationDate,
      membershipStatus,
    };
    onSave(updatedMember); // Save the data
  };

  // Function to ensure only alphabetic characters for names
  const handleNameChange = (setter) => (e) => {
    setter(e.target.value.replace(/[^A-Za-z]/g, ''));
  };

  // Function to ensure only numeric values for contact number and age
  const handleNumericChange = (setter) => (e) => {
    setter(e.target.value.replace(/[^0-9]/g, ''));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[400px] md:w-[600px] lg:w-[700px] rounded-lg p-6 shadow-lg relative">
        <h2 className="text-lg font-semibold mb-4">Edit Member</h2>

        {/* Personal Info */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold">First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={handleNameChange(setFirstName)}
                className="border border-gray-300 p-2 w-full rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold">Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={handleNameChange(setLastName)}
                className="border border-gray-300 p-2 w-full rounded"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold">Contact Number</label>
              <input
                type="text"
                value={contactNumber}
                onChange={handleNumericChange(setContactNumber)}
                className="border border-gray-300 p-2 w-full rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold">Address</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="border border-gray-300 p-2 w-full rounded"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold">Date of Birth</label>
              <input
                type="text"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                className="border border-gray-300 p-2 w-full rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold">Age</label>
              <input
                type="text"
                value={age}
                onChange={handleNumericChange(setAge)}
                className="border border-gray-300 p-2 w-full rounded"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold">Gender</label>
              <input
                type="text"
                value={gender}
                onChange={handleNameChange(setGender)}
                className="border border-gray-300 p-2 w-full rounded"
              />
            </div>
          </div>
        </div>

        {/* Show More Button */}
        {!showMore && (
          <div className="text-center mt-4">
            <button
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
              onClick={() => setShowMore(true)}
            >
              Show more
            </button>
          </div>
        )}

        {/* Membership Info - Expanded Section */}
        {showMore && (
          <div className="mt-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold">Membership Type</label>
                <input
                  type="text"
                  value={membershipType}
                  onChange={(e) => setMembershipType(e.target.value)}
                  className="border border-gray-300 p-2 w-full rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold">Membership Start Date</label>
                <input
                  type="text"
                  value={membershipStartDate}
                  onChange={(e) => setMembershipStartDate(e.target.value)}
                  className="border border-gray-300 p-2 w-full rounded"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold">Membership Expiration Date</label>
                <input
                  type="text"
                  value={membershipExpirationDate}
                  onChange={(e) => setMembershipExpirationDate(e.target.value)}
                  className="border border-gray-300 p-2 w-full rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold">Membership Status</label>
                <input
                  type="text"
                  value={membershipStatus}
                  onChange={(e) => setMembershipStatus(e.target.value)}
                  className="border border-gray-300 p-2 w-full rounded"
                />
              </div>
            </div>
            <div className="text-center mt-4">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
                onClick={() => setShowMore(false)}
              >
                Hide
              </button>
            </div>
          </div>
        )}

        {/* Modal Buttons */}
        <div className="mt-6 flex justify-end space-x-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={onClose}
          >
            Discard Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditMemberModal;
