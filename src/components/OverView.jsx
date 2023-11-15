import styles from "./OverView.module.css";
import data from "../../data/data-2.json";
import { useIcon } from "../contexts/IconSelector";

export default function OverView() {
  return (
    <div className={styles.container}>
      <h2>Overview - Today</h2>
      <div>
        {data.map((item, i) => (
          <OverViewItem
            key={i}
            text={item.text}
            followers={item.followers}
            platform={item.platform}
            status={item.status}
            statics={item.statics}
          />
        ))}
      </div>
    </div>
  );
}

function OverViewItem({ text, followers, platform, status, statics }) {
  const { iconSelecter } = useIcon();
  return (
    <div className={styles.card}>
      <div className={styles["card-top"]}>
        <p>{text}</p>
        <img src={`${iconSelecter(platform)}`} alt="" />
      </div>
      <div className={styles["card-bottom"]}>
        <p>{text}</p>
        <span
          style={{
            color:
              status === "up"
                ? "var(--increase-trend)"
                : "var(--decrease-trend)",
          }}
        >
          {statics}%
        </span>
      </div>
    </div>
  );
}
