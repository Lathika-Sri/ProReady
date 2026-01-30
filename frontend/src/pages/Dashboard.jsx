import ThemeToggle from "../components/ThemeToggle";

const Dashboard = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "/";
    return null;
  }

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h2>ProReady Dashboard</h2>
        <ThemeToggle />
      </div>

      {/* Cards Section */}
      <div style={styles.cards}>
        <div style={styles.card}>
          <h3>📘 Practice</h3>
          <p>Track LeetCode & GFG progress</p>
        </div>

        <div style={styles.card}>
          <h3>⏱ Time Tracking</h3>
          <p>Analyze daily study time</p>
        </div>

        <div style={styles.card}>
          <h3>🎯 Goals</h3>
          <p>Set placement preparation goals</p>
        </div>
      </div>

      {/* Logout */}
      <button
        style={styles.logout}
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/";
        }}
      >
        Logout
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginTop: "30px",
  },
  card: {
    padding: "20px",
    borderRadius: "12px",
    background: "var(--primary-color)",
    color: "white",
  },
  logout: {
    marginTop: "30px",
  },
};

export default Dashboard;
