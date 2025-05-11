import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!email || !password || !confirm) return alert("Fill all fields");
    if (password !== confirm) return alert("Passwords don't match");

    // Dummy signup logic
    alert("Signup successful!");
    navigate("/home");
  };

  return (
    <div style={formContainer}>
      <h2>Sign Up</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={inputStyle}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={inputStyle}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        style={inputStyle}
      />
      <button onClick={handleSignup} style={buttonStyle}>Sign Up</button>
    </div>
  );
}

const formContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "2rem"
};

const inputStyle = {
  marginBottom: "1rem",
  padding: "10px",
  width: "250px"
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#6200ee",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

export default SignupForm;