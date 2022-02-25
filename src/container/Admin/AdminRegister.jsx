import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerInitiate } from "../../features/action";
import { CgProfile } from "react-icons/cg";
import { MdMailOutline } from "react-icons/md";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { toast } from "react-toastify";

const AdminRegister = () => {
  const [revealPassword, setRevealPassword] = useState(false);

  const [revealPassword2, setRevealPassword2] = useState(false);
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const toggleBtn = (e) => {
    e.preventDefault();
    setRevealPassword((prevState) => !prevState);
  };

  const toggleBtn2 = (e) => {
    e.preventDefault();
    setRevealPassword2((prevState) => !prevState);
  };

  const { currentUser } = useSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      toast.info("Logout Current User and try again!");
      navigate("/");
    }
  }, [currentUser, navigate]);

  const dispatch = useDispatch();

  const { email, password, displayName, passwordConfirm } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return;
    }
    dispatch(registerInitiate(email, password, displayName));
    setState({ email: "", displayName: "", password: "", passwordConfirm: "" });
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <>
      <div className="admin-form">
        <form className="form-signin" onSubmit={handleSubmit}>
          <h1 className="heading-secondary">Register another Admin</h1>
          <div className="input__container">
            <input
              type="text"
              className="user__input"
              placeholder="Display Name"
              name="displayName"
              onChange={handleChange}
              value={displayName}
              required
            />
            <span className="icon__container">
              <CgProfile className="profile__icon" />
            </span>
          </div>

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
          <div className="input__container">
            <input
              type={revealPassword2 ? "text" : "password"}
              className="user__input"
              placeholder="Repeat Password"
              name="passwordConfirm"
              onChange={handleChange}
              value={passwordConfirm}
              required
            />
            <button className="icon__container" onClick={toggleBtn2}>
              {revealPassword2 ? (
                <AiOutlineEyeInvisible className="profile__icon" />
              ) : (
                <AiOutlineEye className="profile__icon" />
              )}
            </button>
          </div>
          <button className="btn btn-primary btn-block" type="submit">
            Sign up
          </button>
          {/* <Link to="/login">
             Back
          </Link> */}
        </form>
      </div>
    </>
  );
};

export default AdminRegister;
