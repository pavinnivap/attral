import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/attrallogo.png";
import google from "../../assets/google.png";
import apple from "../../assets/apple.png";
import facebook from "../../assets/facebook.png";
import "./Signuppage.css";

const Signuppage = () => {
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => {
    setExpanded(!expanded);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [createpassword, setCreatepassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!name) {
      newErrors.name = "Name is required";
    }

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/@/(email)) {
      newErrors.email = "Email is invalid";
    }

    if (!phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/d{10}/(phone)) {
      newErrors.phone = "Phone number is invalid";
    }

    if (!createpassword) {
      newErrors.createpassword = "Password is required";
    } else if (createpassword.length < 6) {
      newErrors.createpassword = "Password must be at least 6 characters";
    }

    if (createpassword !== confirmpassword) {
      newErrors.confirmpassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted");
     
    } else {
      console.log("Form has errors");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="Signuppage">
        <img className="signup-attral" src={logo} alt="attral" />
        <a href="https://techbrainnetworks.com/" className="signup-Poweredby">
          Powered by <span className="signup-techbrain">TechBrain Networks</span>
        </a>
      </div>

      <div className={`signup-container ${expanded ? "expanded" : ""}`}>
        <h1 className="signup-tittle">Sign up</h1>

        <div className="signup-input-box">
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="signup-input-box">
          <input
            type="email"
            placeholder="Enter your email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="signup-input-box">
          <input
            type="text"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <div className="signup-input-box">
          <input
            type="password"
            placeholder="Create password"
            value={createpassword}
            onChange={(e) => setCreatepassword(e.target.value)}
          />
          {errors.createpassword && (
            <span className="error">{errors.createpassword}</span>
          )}
        </div>

        <div className="signup-input-box">
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          {errors.confirmpassword && (
            <span className="error">{errors.confirmpassword}</span>
          )}
        </div>

        <div className="signup-input-box">
          <button type="submit" className="signup-button">
            Sign up
          </button>
        </div>

        <div>
          <p className="or-signup">or sign up with</p>
          <div className="signup-social-icon">
            <a href="https://accounts.google.com/">
              <img src={google} alt="google-login" />
            </a>
            <a href="https://account.apple.com/sign-in">
              <img src={apple} alt="apple-logo" />
            </a>
            <a href="https://www.facebook.com/">
              <img src={facebook} alt="facebook-logo" />
            </a>
          </div>

          <span className="already">
            Already have an account?{" "}
            <Link to="/Signinpage" className="signin" onClick={handleClick}>
              {expanded ? "Close" : "Sign in"}
            </Link>
          </span>
        </div>
      </div>
    </form>
  );
};

export default Signuppage;
