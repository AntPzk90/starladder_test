import React from "react";
import CardBattles from "../card-battles/card-battles";
import CardMatches from "../card-matches/card-matches";

class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardListMatches: true,
      cards: [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    };
  }
  render() {
    return (
      <ul
        className={`card-list ${
          this.state.cardListMatches ? "card-list--matches" : ""
        } schedule-results__cards`}
      >
        {this.state.cards.map((card) => {
          return <CardMatches key={card.id} card={card} />;
        })}

        {this.state.cards.map((card) => {
          return <CardBattles key={card.id} card={card} />;
        })}
      </ul>
    );
  }
}

export default CardList;
