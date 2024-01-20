import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useDispatch } from "react-redux";
import { loginAsync, signUpAsync } from "../../Reducer/authSlice";
// import { useNavigate } from "react-router-dom";

const Auth = () => {

  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(true);
  const [data, setData] = useState({
    firstName: "",
    lastname: "",
    password: "",
    confirmpass: "",
    email: "",
  });
  // const loading = useSelector((state) => state.authReducer.loading);
  // const navigate = useNavigate();
  const [confirmPassword, setConfirmPassword] = useState(true);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
   // Form Submission
   const handleSubmit = (e) => {
    setConfirmPassword(true);
    e.preventDefault();
    if (isSignUp) {
      data.password === data.confirmpass
        ? dispatch(signUpAsync(data))
        : setConfirmPassword(false);
    } else {
      dispatch(loginAsync(data));
    }
  };
  const resetForm = () => {
    setConfirmPassword(true);
    setData({
      firstName: "",
      lastname: "",
      password: "",
      confirmpass: "",
      email: "",
    });
  };
  return (
    <div className="Auth">
      {/* left side */}
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="webname">
          <h1>MG Social</h1>
          <h6>Explore the idea throughout the world</h6>
        </div>
      </div>
      {/* Right Side */}
      <div className="a-right">
        <form className="infoForm auth-form" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign up" : "Log In"}</h3>
          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                className="infoInput"
                onChange={handleChange}
                value={data.firstName}
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastname"
                className="infoInput"
                onChange={handleChange}
                value={data.lastname}
              />
            </div>
          )}
          <div>
            <input
              type="text"
              placeholder="email"
              name="email"
              className="infoInput"
              onChange={handleChange}
              value={data.email}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="infoInput"
              onChange={handleChange}
              value={data.password}
            />
            {isSignUp && (
              <input
                type="password"
                placeholder="confirm Password"
                name="confirmpass"
                className="infoInput"
                onChange={handleChange}
                value={data.confirmpass}
              />
            )}
          </div>
          <span
            style={{
              display: confirmPassword ? "none" : "block",
              color: "red",
              alignSelf: "flex-end",
              marginRight: "5px",
            }}
          >
            * Confirm password is not same
          </span>
          <div>
            <span
              style={{ fontSize: "12px", cursor: "pointer",color:"blue" }}
              onClick={() => {setIsSignUp((prev) => !prev);resetForm()}}
            >
              {isSignUp
                ? "Already have an Account Login!"
                : "Don't Have an Account! Sign Up"}
            </span>
          </div>
          <button className="button sign-button">
            {isSignUp ? "Signup" : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
