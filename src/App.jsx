import { useState } from "react";
import "./App.css";
import { cardActions } from "./api/cardActions";
import { aiActions } from "./api/aiActions";
import TarotCard from "./components/TarotCard.jsx/TarotCard";
import DefaultButton from "./components/DefaultButton/DefaultButton";
import DropdownField from "./components/DropdownField/DropdownField";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function App() {
  const { getTarotCard } = cardActions();
  const { getReading } = aiActions();

  const [drawnCards, setDrawnCards] = useState([]);
  const [readingType, setReadingType] = useState("Career");
  const [loading, setLoading] = useState(false);
  const [aiReading, setAiReading] = useState(undefined);
  const [showCards, setShowCards] = useState(true);
  const [isDrawCardClickable, setIsDrawCardClickable] = useState(true);

  const readingTypeOptions = [
    "Career",
    "Health",
    "Love",
    "Personal Growth",
    "Relationships",
    "Success",
  ];

  async function drawCard() {
    let currentCards = [...drawnCards];
    let card = await getTarotCard(1);
    currentCards.push(card);
    setDrawnCards(currentCards);
    setIsDrawCardClickable(true);
  }

  async function getAiReading() {
    setLoading(true);
    setShowCards(false);
    await getReading(drawnCards, readingType).then((response) => {
      setAiReading(response);
      setLoading(false);
    });
  }

  function resetReading() {
    setShowCards(true);
    setDrawnCards([]);
    setAiReading(undefined);
    setReadingType(readingTypeOptions[0]);
  }

  return (
    <>
      <div className="row">
        {aiReading === undefined && (
          <DefaultButton
            text={"Draw Card"}
            onClick={() => {
              setIsDrawCardClickable(false);
              drawCard();
            }}
            hasIcon
            iconName="playingCard"
            isDisabled={drawnCards.length > 5 || !isDrawCardClickable}
          />
        )}
        {drawnCards.length > 0 && (
          <>
            <DefaultButton
              text="restart reading"
              onClick={() => resetReading()}
              hasIcon
              iconName="reset"
              buttonColour="secondary"
            />
            {showCards ? (
              <FaEye
                className="icon"
                size={20}
                onClick={() => setShowCards(!showCards)}
              />
            ) : (
              <FaEyeSlash
                className="icon"
                size={22}
                onClick={() => setShowCards(!showCards)}
              />
            )}
          </>
        )}
      </div>

      <div className="row">
        {showCards &&
          drawnCards.length > 0 &&
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
      {loading && (
        <div className="row">
          <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDdmZ3Nmamltdzhud2ptdnZxeHNsM3d2eDRhdXQybGF0eDVrcXJ5diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/U4RfUbKPNbPSVMeKCb/giphy.gif" />
        </div>
      )}
      <div className="row">
        {aiReading != undefined &&
          aiReading.cards.map((item) => {
            return (
              <div key={aiReading.cards.indexOf(item)} className="infoCard">
                <h3 className="cardTitle" key={item.cardName}>
                  {item.cardName}
                </h3>
                <p key={item.readingResponse} className="cardContent">
                  {item.readingResponse}{" "}
                </p>
              </div>
            );
          })}
        {aiReading != undefined && (
          <div className="infoCard">
            <h3 className="cardTitle"> Summary </h3>
            <p className="cardContent">{aiReading.summary}</p>
          </div>
        )}
      </div>

      {drawnCards.length > 2 && aiReading === undefined && !loading && (
        <div className={"row"}>
          <DropdownField
            label="Reading Type"
            value={readingType}
            options={readingTypeOptions}
            handleChange={setReadingType}
            defaultValue={readingTypeOptions[0]}
          />
          <DefaultButton
            text={"Generate Reading"}
            onClick={() => getAiReading()}
            hasIcon
            iconName="crystalBall"
            isDisabled={readingType === ""}
          />
        </div>
      )}
    </>
  );
}

export default App;
