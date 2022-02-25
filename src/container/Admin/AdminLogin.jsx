import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginInitiate } from "../../features/action";
import { MdMailOutline } from "react-icons/md";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import "./admin.css";
import { toast } from "react-toastify";

const AdminLogin = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [revealPassword, setRevealPassword] = useState(false);

  const toggleBtn = (e) => {
    e.preventDefault();
    setRevealPassword((prevState) => !prevState);
  };

  const { email, password } = state;

  const { currentUser } = useSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      toast.info("You are currently Signed in");
      navigate("/");
    }
  }, [currentUser, navigate]);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    dispatch(loginInitiate(email, password));
    setState({ email: "", password: "" });
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <>
      <div className="admin-form">
        <form className="form-signin" onSubmit={handleSubmit}>
          <h1 className="heading-secondary">Sign in</h1>
          <div className="input__container">
            <input
              type="email"
              className="user__input"
              placeholder="Email Address"
              name="email"
              onChange={handleChange}
              value={email}
              required
            />
            <span className="icon__container">
              <MdMailOutline className="profile__icon" />
            </span>
          </div>
          <div className="input__container">
            <input
              type={revealPassword ? "text" : "password"}
              className="user__input"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={password}
              required
            />
            <button className="icon__container" onClick={toggleBtn}>
              {revealPassword ? (
                <AiOutlineEyeInvisible className="profile__icon" />
              ) : (
                <AiOutlineEye className="profile__icon" />
              )}
            </button>
          </div>
          <button className="btn" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </>
  );
};

export default AdminLogin;
