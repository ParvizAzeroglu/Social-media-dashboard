import styles from "./SocialMediaItem.module.css";

export default function SocialMediaItem({
  platform,
  id,
  followers,
  statics,
  status,
}) {
  function cardTopColor(platform) {
    switch (platform) {
      case "facebook":
        return "var(--facebook)";
      case "twitter":
        return "var(--twitter)";
      case "youtube":
        return "var(--youtube)";
      case "instagram":
        return "var(--instagram-1)";
      default:
        return "black";
    }
  }

  // console.log(platform, id, followers, statics);

  return (
    <div
      className={styles.card}
      style={{ borderColor: `${cardTopColor(platform)}` }}
    >
      <div className={styles["card-header"]}>
        <img src="icon-facebook.svg" alt="" />
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

// icon-up.svg
