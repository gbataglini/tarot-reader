export function aiActions() {
  return {
    async getReading(cards, readingType) {
      let cardNames = [];

      for (let i = 0; i <= cards.length; i++) {
        if (cards[i] != undefined && cards[i].title != undefined) {
          if (cards[i].isReverse) {
            cardNames.push(`${cards[i].title} reversed`);
          } else {
            cardNames.push(cards[i].title);
          }
        }
      }

      let body = {
        cards: cardNames,
        readingType: readingType,
      };

      try {
        const response = await fetch(`http://127.0.0.1:5001/ai-reading`, {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        });

        if (response.ok) {
          return response.json();
        }
      } catch (err) {
        return console.log(`Could not get reading: ${err}`);
      }
    },
    async consoleTest() {
      console.log("TEST");
    },
  };
}
