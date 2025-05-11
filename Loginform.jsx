import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) return alert("Please fill all fields");

    // Dummy check
    if (email === "test@example.com" && password === "password") {
      alert("Login successful!");
      navigate("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={formContainer}>
      <h2>Login</h2>
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
      <button onClick={handleLogin} style={buttonStyle}>Login</button>
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

export default LoginForm;