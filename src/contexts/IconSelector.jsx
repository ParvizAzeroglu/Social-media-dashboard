import { useContext } from "react";
import { createContext } from "react";
const IconContext = createContext();

function IconProvider({ children }) {
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

  function iconSelecter(platform) {
    switch (platform) {
      case "instagram":
        return "icon-instagram.svg";
      case "facebook":
        return "icon-facebook.svg";
      case "twitter":
        return "icon-twitter.svg";
      case "youtube":
        return "icon-youtube.svg";
    }
  }

  return (
    <IconContext.Provider value={{ cardTopColor, iconSelecter }}>
      {children}
    </IconContext.Provider>
  );
}

function useIcon() {
  const context = useContext(IconContext);
  if (!context) throw new Error("useIcon must be used within an IconProvider");
  return context;
}

export { IconProvider, useIcon };
