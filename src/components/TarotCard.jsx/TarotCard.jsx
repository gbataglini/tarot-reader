/* eslint-disable react/prop-types */
import { formatCardName } from "../../utils/formatCardName";
import CardImage from "../CardImage/CardImage";
import styles from "./tarotcard.module.css";

function TarotCard({ card, meaning }) {
  return (
    <div className={styles.cardBackground}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <CardImage
            height={600}
            fileName={formatCardName(card.title)}
            cardName={card.title}
            isReversed={card.isReverse}
          />
        </div>

        <div className={styles.flipCardBack}>
          <CardImage
            height={600}
            fileName={"descriptionBG"}
            cardName={"Background"}
            isReversed={false}
          />
          <p className={styles.cardTitle}>{card.title}</p>
          {card.isReverse ? (
            <>
              <p className={styles.isReversed}>REVERSED</p>
              <p className={styles.cardDescriptionReversed}>{meaning}</p>
            </>
          ) : (
            <p className={styles.cardDescription}>{meaning}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TarotCard;
