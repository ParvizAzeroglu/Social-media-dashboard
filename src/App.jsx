import styles from "./App.module.css";
import Main from "./components/Main";
import { IconProvider } from "./contexts/IconSelector";

export default function App() {
  return (
    <IconProvider>
      <div className={styles.container}>
        <Main />
      </div>
    </IconProvider>
  );
}
