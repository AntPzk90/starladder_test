import React from "react";
import CardBattles from "../card-battles/card-battles";
import CardMatches from "../card-matches/card-matches";
import PropTypes from "prop-types";

class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.activeTab,
    };
  }

  render() {
    return (
      <ul
        className={`card-list ${
          this.state.activeTab === "matches"
            ? "card-list--matches"
            : "card-list--battles"
        } schedule-results__cards`}
      >
        {this.props.cards.map((card) => {
          if (this.props.activeTab === "matches") {
            return <CardMatches key={card.id} card={card} />;
          } else {
            return <CardBattles key={card.id} card={card} />;
          }
        })}
      </ul>
    );
  }
}

CardList.propTypes = {
  matches: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
      firstTeam: PropTypes.shape({
        title: PropTypes.string,
        img: PropTypes.string,
        coef: PropTypes.number,
      }),
      secondTeam: PropTypes.shape({
        title: PropTypes.string,
        img: PropTypes.string,
        coef: PropTypes.number,
      }),
      system: PropTypes.string,
      active: PropTypes.bool,
      date: PropTypes.number,
    })
  ),
  battles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
      firstTeam: PropTypes.shape({
        title: PropTypes.string,
      }),
      secondTeam: PropTypes.shape({
        title: PropTypes.string,
      }),
      discipline: PropTypes.string,
      match: PropTypes.number,
      map: PropTypes.string,
      active: PropTypes.bool,
      date: PropTypes.number,
    })
  ),
};

export default CardList;
