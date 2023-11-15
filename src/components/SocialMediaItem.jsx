import { useIcon } from "../contexts/IconSelector";
import styles from "./SocialMediaItem.module.css";

export default function SocialMediaItem({
  platform,
  id,
  followers,
  statics,
  status,
}) {
  const { cardTopColor, iconSelecter } = useIcon();

  return (
    <div
      className={styles.card}
      style={{ borderColor: `${cardTopColor(platform)}` }}
    >
      <div className={styles["card-header"]}>
        <img src={`${iconSelecter(platform)}`} alt="" />
        <p>{id}</p>
      </div>
      <div className={styles["card-body"]}>
        <h5>{followers}</h5>
        <p>{platform == "youtube" ? "subscribers" : "followers"}</p>
      </div>
      <div className={styles["card-footer"]}>
        <img
          src={`${status == "up" ? "icon-up.svg" : "icon-down.svg"}`}
          alt=""
        />
        <span
          style={{
            color:
              status === "up"
                ? "var(--increase-trend)"
                : "var(--decrease-trend)",
          }}
        >
          {statics} Today
        </span>
      </div>
    </div>
  );
}
