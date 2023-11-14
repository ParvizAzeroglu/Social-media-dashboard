import styles from "./ToggleButton.module.css";

export default function ToggleButton() {
  return (
    <label className={styles.switch}>
      <input type="checkbox" />
      <span className={`${styles.slider} ${styles.round}`}></span>
    </label>
  );
}
