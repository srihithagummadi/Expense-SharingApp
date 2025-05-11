import { useNavigate } from "react-router-dom";
import { useEffect, useState} from "react" ;     // ✅ Add this
import axios from "axios";                     // ✅ Import Axios

function HomePage() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");     // ✅ State to show API response (example)

  // ✅ Axios call when component mounts
  useEffect(() => {
    axios.get("http://localhost:8080/api/expenses") // 🔁 Replace with your actual API URL
      .then((response) => {
        setMessage(response.data.message);       // 🔁 Adjust based on response shape
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to SplitSmart Home</h1>
      {/* ✅ Show API message if available */}
      {message && <p>{message}</p>}

      <div style={styles.buttonGroup}>
        <button style={styles.button} onClick={() => navigate("/calculator")}>
          Expense Calculator
        </button>
        <button style={styles.button} onClick={() => navigate("/groups")}>
          Make Groups
        </button>
        <button style={styles.button} onClick={() => navigate("/analysis")}>
          Spending Analysis
        </button>
      </div>
    </div>
  );
}

// (styles stay the same)
const styles = {
  container: {
    backgroundColor: "#1b0044",
    color: "white",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    padding: "2rem",
    textAlign: "center"
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "2rem"
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
    gap: "1.5rem"
  },
  button: {
    padding: "12px 24px",
    backgroundColor: "#6200ee",
    color: "white",
    fontSize: "1rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default HomePage;