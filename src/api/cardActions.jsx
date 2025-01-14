export function cardActions() {
  function isReverse() {
    let randomNum = Math.floor(Math.random() * 100) % 3;

    return randomNum === 0;
  }

  return {
    async getTarotCard(cardCount = 1) {
      try {
        const response = await fetch(
          `https://tarotapi.dev/api/v1/cards/random?n=${cardCount}`
        );
        let allCards = [];
        if (response.ok) {
          let fmtResponse = await response.json();

          if (cardCount === 1) {
            return {
              title: fmtResponse.cards[0].name,
              suit: fmtResponse.cards[0].suit,
              type: fmtResponse.cards[0].type,
              value: fmtResponse.cards[0].value,
              valueInt: fmtResponse.cards[0].value_int,
              isReverse: isReverse(),
              meaningRev: fmtResponse.cards[0].meaning_rev,
              meaningUp: fmtResponse.cards[0].meaning_up,
            };
          } else {
            for (let i = 0; i <= fmtResponse.cards.length; i++) {
              allCards.push({
                title: fmtResponse.cards[i].name,
                suit: fmtResponse.cards[i].suit,
                type: fmtResponse.cards[i].type,
                value: fmtResponse.cards[i].value,
                valueInt: fmtResponse.cards[i].value_int,
                isReverse: isReverse(),
                meaningRev: fmtResponse.cards[i].meaning_rev,
                meaningUp: fmtResponse.cards[i].meaning_up,
              });
            }

            return allCards;
          }
        }
      } catch (err) {
        return console.log(`Could not get card: ${err}`);
      }
    },
  };
}
