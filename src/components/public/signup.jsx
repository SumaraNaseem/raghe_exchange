// eslint-disable-next-line react/prop-types
import { IoCloseSharp } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import ButtonSeconadry from "../common/button-secondary";
import { useRegisterMutation } from '../../auth/authApi'; // Ensure this import is correct

// eslint-disable-next-line react/prop-types
const Signup = ({ title, onClose }) => {
  const [showPwd, setShowPwd] = useState(false);
  const [userId, setUserId] = useState(''); // State for User ID
  const [password, setPassword] = useState(''); // State for Password
  const [confirmPassword, setConfirmPassword] = useState(''); // State for Confirm Password
  const [register, { isLoading, error }] = useRegisterMutation(); // Use register mutation

  const handleShowPassword = () => {
    setShowPwd((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    if (password !== confirmPassword) {
      alert("Passwords do not match"); // Basic password match check
      return;
    }

    try {
      const userData = { userId, password }; // Prepare user data
      await register(userData).unwrap(); // Call the API
      // Handle successful registration (e.g., close the modal, show a message)
      onClose(); // Optional: close the modal on success
    } catch (err) {
      console.error('Registration failed: ', err); // Handle errors
    }
  };

  return (
    <div className="lg:w-[30vw] w-[80vw] ">
      <div className="flex justify-between items-center mb-4 py-3">
        <h3 className="text-xl flex-grow font-bold text-center">{title}</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <IoCloseSharp className="text-text-dark text-lg font-extrabold " />
        </button>
      </div>
      <form onSubmit={handleSubmit} className="mb-4 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="font-bold text-text-light">User ID</label>
          <input
            type="text"
            placeholder="user id"
            value={userId} // Set the value from state
            onChange={(e) => setUserId(e.target.value)} // Update state on change
            className="py-2 px-2 rounded-lg outline-none border-2 border-text-dark"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-bold text-text-light">Password</label>
          <div className="relative">
            <input
              type={showPwd ? "text" : "password"}
              placeholder="password"
              value={password} // Set the value from state
              onChange={(e) => setPassword(e.target.value)} // Update state on change
              className="py-2 px-2 w-full rounded-lg outline-none border-2 border-text-dark"
            />
            {showPwd ? (
              <FaEyeSlash
                onClick={handleShowPassword}
                className="absolute right-4 cursor-pointer top-3"
              />
            ) : (
              <FaEye
                onClick={handleShowPassword}
                className="absolute right-4 cursor-pointer top-3"
              />
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-bold text-text-light">Confirm Password</label>
          <div className="relative">
            <input
              type={showPwd ? "text" : "password"}
              placeholder="confirm password"
              value={confirmPassword} // Set the value from state
              onChange={(e) => setConfirmPassword(e.target.value)} // Update state on change
              className="py-2 px-2 w-full rounded-lg outline-none border-2 border-text-dark"
            />
            {showPwd ? (
              <FaEyeSlash
                onClick={handleShowPassword}
                className="absolute right-4 cursor-pointer top-3"
              />
            ) : (
              <FaEye
                onClick={handleShowPassword}
                className="absolute right-4 cursor-pointer top-3"
              />
            )}
          </div>
        </div>

        {error && <p className="text-red-500">{error.data.message || "Registration failed"}</p>} {/* Error handling */}
        
        <ButtonSeconadry type="submit" disabled={isLoading}>
          <span>{isLoading ? 'Registering...' : 'Register'}</span>
        </ButtonSeconadry>
      </form>
    </div>
  );
};

export default Signup;
