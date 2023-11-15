import styles from "./ToggleButton.module.css";

export default function ToggleButton() {
  function setDarkMode() {
    document.querySelector("body").setAttribute("theme-mode", "dark");
    localStorage.setItem("selected", "dark");
  }

  function setLightMode() {
    document.querySelector("body").setAttribute("theme-mode", "light");
    localStorage.setItem("selected", "light");
  }

  const selectedTheme = localStorage.getItem("selected");

  if (selectedTheme == "dark") {
    setDarkMode();
  }

  function toggleTheme(e) {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  }
  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        onChange={toggleTheme}
        defaultChecked={selectedTheme === "dark"}
      />

      <span className={`${styles.slider} ${styles.round}`}></span>
    </label>
  );
}
