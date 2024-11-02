import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InputField from './components/inputfield';
import RemForPass from './components/RemForPass';
import EnterBox from './components/EnterBox';
import LfgLogo from './components/LfgLogo';
import MainPage from './components/MainPage';
import ManageMemberClicked from './components/ManageMemberClicked'; // Import ManageMemberClicked
import MembersArchive from './components/MembersArchive';
import AuthenticationCode from './components/AuthenticationCode';
import { useState } from 'react';

function App() {
  const [archivedMembers, setArchivedMembers] = useState([]); // Store archived members

  // Function to move a member to the archive
  const moveToArchive = (member) => {
    setArchivedMembers((prev) => [...prev, member]);
  };

  return (
    <Router>
      <Routes>
        {/* Login Page */}
        <Route
          path="/"
          element={
            <div className="flex justify-center items-center h-screen">
              <div className="flex flex-row justify-center w-full max-w-5xl px-4">
                <div className="flex items-center mr-4">
                  <LfgLogo />
                </div>
                <div className="flex flex-col items-center ml-4">
                  <h1 className="text-[30px] font-bold mb-[2rem]">LOGIN</h1>
                  
                  <EnterBox />
                  <br />
                  <RemForPass />
                </div>
              </div>
            </div>
          }
        />

        {/* Main Page */}
        <Route path="/main" element={<MainPage />} />

        {/* Route for Manage Members */}
        <Route path="/main/manage-members" element={<ManageMemberClicked moveToArchive={moveToArchive} />} />

        {/* Route for Members Archive */}
        <Route path="/main/members-archive" element={<MembersArchive archivedMembers={archivedMembers} />} />

        {/* Route for Authentication Code */}
        <Route path="/main/authentication-code" element={<AuthenticationCode />} />
      </Routes>
    </Router>
  );
}

export default App;
