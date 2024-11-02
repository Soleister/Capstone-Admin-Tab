import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { CiMail } from 'react-icons/ci';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function EnterBox() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  // List of authorized sample emails
  const authorizedEmails = ["jasonemailtestemailtest@gmail.com", "jasonpasswordtest"]; // Replace with actual emails

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleLogin = async () => {
    try {
      // Attempt to sign in with Firebase
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const userEmail = userCredential.user.email;

      // Check if the email is authorized
      if (authorizedEmails.includes(userEmail)) {
        navigate('/main'); // Navigate to MainPage on successful login
      } else {
        setError("Access denied: Unauthorized email.");
      }
    } catch (error) {
      setError("Invalid email or password."); // Set error message on failed login
    }
  };

  return (
    <div className="flex justify-center mt-4 flex-col items-center">
      <div className="login bg-white inline-flex justify-center py-2 px-4 rounded w-[300px] mb-2">
        <div className="relative w-full">
          <CiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-[23px] h-auto" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-2 pl-10 pr-10 rounded-[4px] h-[40px] w-full bg-[#F3F3F3] shadow-md"
          />
        </div>
      </div>

      <div className="login bg-white inline-flex justify-center py-2 px-4 rounded w-[300px] mb-2">
        <div className="relative w-full">
          <input
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="py-2 pl-10 pr-10 rounded-[4px] h-[40px] w-full bg-[#F3F3F3] shadow-md"
          />
          <span 
            onClick={togglePasswordVisibility} 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          >
            {isPasswordVisible ? <FaEyeSlash className="w-[23px] h-auto" /> : <FaEye className="w-[23px] h-auto" />}
          </span>
        </div>
      </div>

      <button
        className="bg-black text-white py-2 px-8 rounded"
        onClick={handleLogin}
      >
        Enter
      </button>

      {/* Error message */}
      {error && (
        <div className="mt-4 text-red-600 text-sm">
          {error}
        </div>
      )}
    </div>
  );
}

export default EnterBox;
