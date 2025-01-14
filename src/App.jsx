import { useState } from "react";
import "./App.css";
import { cardActions } from "./api/cardActions";
import TarotCard from "./components/TarotCard.jsx/TarotCard";
import DefaultButton from "./components/DefaultButton/DefaultButton";

function App() {
  const { getTarotCard } = cardActions();

  const [drawnCards, setDrawnCards] = useState([]);

  async function drawCard() {
    let currentCards = [...drawnCards];
    let card = await getTarotCard(1);
    currentCards.push(card);
    setDrawnCards(currentCards);
  }

  return (
    <>
      <div className="row">
        <DefaultButton
          text={"Draw Card"}
          onClick={() => drawCard()}
          hasIcon
          iconName="playingCard"
        />
        {drawnCards.length > 0 && (
          <DefaultButton
            text="restart reading"
            onClick={() => setDrawnCards([])}
            hasIcon
            iconName="reset"
          />
        )}
      </div>

      <div className="row">
        {drawnCards.length > 0 &&
          drawnCards.map((card) => {
            return (
              <>
                <TarotCard
                  key={card.title}
                  card={card}
                  meaning={card.isReverse ? card.meaningRev : card.meaningUp}
                />
              </>
            );
          })}
      </div>
    </>
  );
}

export default App;
