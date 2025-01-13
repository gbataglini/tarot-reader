/* eslint-disable react/prop-types */
import useImage from "../../hooks/useImage";
import styles from "./cardImage.module.css";

const CardImage = ({ fileName, cardName, height, isReversed }) => {
  const { loading, error, image } = useImage(fileName);

  if (error) return <p>Could not get image for {cardName}</p>;

  return (
    <>
      {loading ? (
        <p>Getting card...</p>
      ) : (
        <img
          height={height}
          src={image}
          className={isReversed ? styles.reverseImage : styles.none}
        />
      )}
    </>
  );
};

export default CardImage;
