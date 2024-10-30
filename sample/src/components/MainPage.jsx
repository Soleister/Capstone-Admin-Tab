import React, { useState } from 'react';
import { IoPersonOutline } from 'react-icons/io5'; // Icon for Manage Members
import { BsPersonLinesFill } from 'react-icons/bs'; // Icon for Members Archive
import { CiStopwatch } from 'react-icons/ci'; // Icon for Authentication Code
import LfgImage from './LfgImage';
import CirclePerson from './CirclePerson';
import ManageMemberClicked from './ManageMemberClicked'; // Main content component for Manage Members
import MembersArchive from './MembersArchive'; // Import Members Archive component
import AuthenticationCode from './AuthenticationCode'; // Import Authentication Code component
import SignOut from './SignOut'; // Import SignOut component
import LogOutModal from '../modals/LogOutModal'; // Import LogOutModal

function MainPage() {
  const [selectedPage, setSelectedPage] = useState('manage-members');
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);

  // Conditionally render the right-side content based on the selected page
  const renderContent = () => {
    switch (selectedPage) {
      case 'manage-members':
        return <ManageMemberClicked />;
      case 'members-archive':
        return <MembersArchive />;
      case 'authentication-code':
        return <AuthenticationCode />;
      default:
        return <ManageMemberClicked />;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Side Panel (Navigation Bar) */}
      <div className="w-1/6 bg-gray-700 flex flex-col items-center py-10">
        <LfgImage />
        <CirclePerson />

        {/* Manage Members Button */}
        <button
          className={`w-full text-white py-2 px-6 hover:bg-gray-800 text-center flex items-center ${selectedPage === 'manage-members' ? 'bg-black' : ''}`}
          onClick={() => setSelectedPage('manage-members')}
        >
          <IoPersonOutline className="text-[16px] mr-2" />
          Manage Members
        </button>

        {/* Members Archive Button */}
        <button
          className={`w-full text-white py-2 px-6 hover:bg-gray-800 text-center flex items-center ${selectedPage === 'members-archive' ? 'bg-black' : ''}`}
          onClick={() => setSelectedPage('members-archive')}
        >
          <BsPersonLinesFill className="text-[16px] mr-2" />
          Members Archive
        </button>

        {/* Authentication Code Button */}
        <button
          className={`w-full text-white py-2 px-5 hover:bg-gray-800 text-center flex items-center ${selectedPage === 'authentication-code' ? 'bg-black' : ''}`}
          onClick={() => setSelectedPage('authentication-code')}
        >
          <CiStopwatch className="text-[22px] mr-2" />
          Authentication Code
        </button>

        {/* Sign Out Button */}
        <button
          className="w-full text-white py-0.1 px-0.2 hover:bg-gray-800"
          onClick={() => setIsLogOutModalOpen(true)}
        >
          <SignOut />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="w-5/6 p-6">
        {renderContent()} {/* Conditionally render content based on selectedPage */}
      </div>

      {/* Log Out Modal */}
      <LogOutModal
        isOpen={isLogOutModalOpen}
        onClose={() => setIsLogOutModalOpen(false)}
      />
    </div>
  );
}

export default MainPage;
