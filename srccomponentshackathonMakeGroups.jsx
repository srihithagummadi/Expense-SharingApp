// src/components/hackathon/MakeGroups.jsx
import React, { useState } from "react";
import { BarChart,Bar, XAxis, YAxis,CartesianGrid, Tooltip, Legend} from "recharts";
function MakeGroups() {
  const [groupName, setGroupName] = useState("");
  const [memberName, setMemberName] = useState("");
  const [spending, setSpending] = useState("");
  const [groups, setGroups] = useState({});
  const [selectedGroup, setSelectedGroup] = useState(null);

  const handleCreateGroup = () => {
    if (!groupName) return;
    setGroups((prev) => ({ ...prev, [groupName]: [] }));
    setGroupName("");
  };

  const handleAddMember = () => {
    if (!selectedGroup || !memberName || isNaN(spending)) return;
    const newMember = { name: memberName, spending: parseFloat(spending) };
    setGroups((prev) => ({
      ...prev,
      [selectedGroup]: [...prev[selectedGroup], newMember]
    }));
    setMemberName("");
    setSpending("");
  };

  return (
    <div style={styles.container}>
      <h2>Make Groups</h2>

      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Group Name"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleCreateGroup} style={styles.button}>Create Group</button>
      </div>

      <div style={styles.groupList}>
        {Object.keys(groups).map((group) => (
          <button
            key={group}
            onClick={() => setSelectedGroup(group)}
            style={selectedGroup === group ? styles.activeGroupButton : styles.groupButton}
          >
            {group}
          </button>
        ))}
      </div>

      {selectedGroup && (
        <>
          <h3>Group: {selectedGroup}</h3>
          <div style={styles.inputContainer}>
            <input
              type="text"
              placeholder="Member Name"
              value={memberName}
              onChange={(e) => setMemberName(e.target.value)}
              style={styles.input}
            />
            <input
              type="number"
              placeholder="Spending Amount"
              value={spending}
              onChange={(e) => setSpending(e.target.value)}
              style={styles.input}
            />
            <button onClick={handleAddMember} style={styles.button}>Add Member</button>
          </div>

          {groups[selectedGroup].length > 0 && (
            <>
              <h4>Spending Analysis</h4>
              <BarChart width={500} height={300} data={groups[selectedGroup]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="spending" fill="#8884d8" />
              </BarChart>
            </>
          )}
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "2rem",
    backgroundColor: "#1b0044",
    color: "white",
    minHeight: "100vh",
    fontFamily: "Roboto, sans-serif",
    textAlign: "center"
  },
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "1rem",
    flexWrap: "wrap"
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    minWidth: "200px"
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#6200ee",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },
  groupList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "1rem"
  },
  groupButton: {
    padding: "8px 16px",
    backgroundColor: "#333",
    border: "1px solid #888",
    borderRadius: "4px",
    color: "white",
    cursor: "pointer"
  },
  activeGroupButton: {
    padding: "8px 16px",
    backgroundColor: "#6200ee",
    border: "1px solid #fff",
    borderRadius: "4px",
    color: "white",
    cursor: "pointer"
  }
};

export default MakeGroups;