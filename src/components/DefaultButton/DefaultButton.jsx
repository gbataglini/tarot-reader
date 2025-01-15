/* eslint-disable react/prop-types */
import styles from "./defaultbutton.module.css";
import { TbPlayCardStarFilled } from "react-icons/tb";
import { RiResetLeftLine } from "react-icons/ri";
import { TbCrystalBall } from "react-icons/tb";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function DefaultButton({
  text,
  onClick,
  hasIcon,
  iconName,
  isDisabled = false,
  buttonColour = "primary",
}) {
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
      case "crystalBall":
        selectedIcon = <TbCrystalBall size={20} className={styles.icon} />;
        break;
      case "show":
        selectedIcon = <FaEye size={20} className={styles.icon} />;
        break;
      case "hide":
        selectedIcon = <FaEyeSlash size={20} className={styles.icon} />;
        break;
      default:
        selectedIcon = "";
    }
    return selectedIcon;
  }

  return (
    <button
      disabled={isDisabled}
      onClick={() => onClick()}
      className={styles[buttonColour]}
    >
      {" "}
      {hasIcon && getIcon()}
      {text.toLowerCase()}
    </button>
  );
}

export default DefaultButton;
