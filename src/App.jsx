import { useState } from "react";
import "./App.css";
import { cardActions } from "./api/cardActions";
import TarotCard from "./components/TarotCard.jsx/TarotCard";

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
      <button onClick={() => drawCard()}>Draw Card</button>

      {drawnCards.length > 0 && (
        <button onClick={() => setDrawnCards([])}>Restart Reading</button>
      )}

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
