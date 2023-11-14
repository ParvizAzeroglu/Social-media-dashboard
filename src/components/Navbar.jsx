import styles from "./Navbar.module.css";
import ToggleButton from "./ToggleButton";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles["text-area"]}>
        <h1>Social Media Dashboard</h1>
        <p>Total Followers: 23,004</p>
      </div>
      <div className={styles["dark-mode"]}>
        <p>Dark Mode</p>
        <ToggleButton />
      </div>
    </div>
  );
}
