import styles from "./SocialMedia.module.css";
import SocialMediaItem from "./SocialMediaItem";
import data from "../../data/data-1.json";

export default function SocialMedia() {
  return (
    <div className={styles.container}>
      {data.map((info) => (
        <SocialMediaItem
          key={info.id} // Key eklemeyi unutmayın
          platform={info.platform}
          id={info.id}
          followers={info.followers}
          statics={info.statics}
          status={info.status}
        />
      ))}
    </div>
  );
}
