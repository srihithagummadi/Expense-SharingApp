// components/hackathon/ExpenseCalculator.jsx
import { useState } from "react";

function ExpenseCalculator() {
  const [totalAmount, setTotalAmount] = useState("");
  const [numPeople, setNumPeople] = useState("");
  const [result, setResult] = useState(null);

  const calculateShare = () => {
    if (!totalAmount || !numPeople || numPeople <= 0) {
      alert("Please enter valid inputs.");
      return;
    }
    const share = (parseFloat(totalAmount) / parseInt(numPeople)).toFixed(2);
    setResult(share);
  };

  return (
    <div style={styles.container}>
      <h2>Expense Calculator</h2>
      <input
        type="number"
        placeholder="Total Amount"
        value={totalAmount}
        onChange={(e) => setTotalAmount(e.target.value)}
        style={styles.input}
      />
      <input
        type="number"
        placeholder="Number of People"
        value={numPeople}
        onChange={(e) => setNumPeople(e.target.value)}
        style={styles.input}
      />
      <button onClick={calculateShare} style={styles.button}>
        Calculate
      </button>
      {result && (
        <p style={styles.result}>Each person should pay ₹{result}</p>
      )}
    </div>
  );
}

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
  input: {
    padding: "10px",
    margin: "10px",
    width: "250px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#6200ee",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px"
  },
  result: {
    marginTop: "20px",
    fontSize: "1.2rem",
    fontWeight: "bold"
  }
};

export default ExpenseCalculator;