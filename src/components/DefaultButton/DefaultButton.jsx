/* eslint-disable react/prop-types */
import styles from "./defaultbutton.module.css";
import { TbPlayCardStarFilled } from "react-icons/tb";
import { RiResetLeftLine } from "react-icons/ri";

function DefaultButton({ text, onClick, hasIcon, iconName }) {
  function getIcon() {
    let selectedIcon;
    switch (iconName) {
      case "playingCard":
        selectedIcon = (
          <TbPlayCardStarFilled size={20} className={styles.icon} />
        );
        break;
      case "reset":
        selectedIcon = <RiResetLeftLine size={20} className={styles.icon} />;
        break;
      default:
        selectedIcon = "";
    }
    return selectedIcon;
  }

  return (
    <button onClick={() => onClick()} className={styles.blackButton}>
      {" "}
      {hasIcon && getIcon()}
      {text.toLowerCase()}
    </button>
  );
}

export default DefaultButton;
