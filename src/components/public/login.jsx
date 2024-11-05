// eslint-disable-next-line react/prop-types
import { IoCloseSharp } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import ButtonSeconadry from "../common/button-secondary";
import { useDispatch, useSelector } from "react-redux";
import { handleAuthState } from "../../redux-slice/user-state-slice";
import { handleModalVisibility } from "../../redux-slice/modal-state-slice";
import { useLoginMutation } from '../../auth/authApi'; // Import the login mutation hook

// eslint-disable-next-line react/prop-types
const Login = ({ title, onClose }) => {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.modalStateSlice);
  const { loginModal } = data || {};

  const handleLoginModal = () => {
    dispatch(handleModalVisibility({ key: "loginModal", value: !loginModal }));
    dispatch(handleModalVisibility({ key: "homepageModal", value: true }));
  };

  const [showPwd, setShowPwd] = useState(false);
  const handleShowPassword = () => {
    setShowPwd((prev) => !prev);
  };

  // State to store user input
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  // Use the login mutation
  const [login, { isLoading, error }] = useLoginMutation();

  const handleLogin = async () => {
    try {
      const response = await login({ userId, password }).unwrap(); // Post login data
      localStorage.setItem('token', response.token); // Store token in local storage
      dispatch(handleAuthState({ isLoggedIn: true })); // Update auth state
      if (loginModal) {
        handleLoginModal();
      }
    } catch (err) {
      console.error('Login failed:', err); // Handle error (you may want to show an error message to the user)
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
      <div className="mb-4 flex flex-col gap-6">
        <div className="flex flex-col relative gap-2">
          <label className="font-bold text-text-light">User ID</label>
          <input
            type="text"
            placeholder="user id"
            value={userId}
            onChange={(e) => setUserId(e.target.value)} // Update user ID state
            className="py-2 px-2 rounded-lg outline-none border-2 border-text-dark"
          />
          <div className="flex absolute right-0 bottom-[-30px] justify-end">
            <div className="flex justify-center items-center gap-3">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-bold text-text-light">Password</label>
          <div className="relative">
            <input
              type={showPwd ? "text" : "password"}
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
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
        <div className="w-full py-4">
          <ButtonSeconadry onClick={handleLogin} disabled={isLoading}>
            <span>{isLoading ? 'Logging in...' : 'Login'}</span>
          </ButtonSeconadry>
        </div>
        {error && <p className="text-red-500">{error.message}</p>} {/* Display error message if login fails */}
      </div>
    </div>
  );
};

export default Login;
