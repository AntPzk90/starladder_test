import React from "react";
import cardActiveBackground from "../../img/logo-star-active.svg";
import cardBackground from "../../img/logo-star.svg";

class CardBattles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardListMatches: false,
      cardActive: true,
      btnAnnouncement: true,
    };
  }
  render() {
    return (
      <li
        className={`card ${
          this.state.cardActive ? "card--active" : ""
        } card--battles card-list__item`}
        // style={`background-image: ${
        //   this.state.cardActive ? cardActiveBackground : cardBackground
        // }`}
      >
        <div>
          <div className="card__wrapper card__wrapper--top">
            <p className="card__name">Asia Minor: Play-Off</p>
            <a href="witch-link" className="card__status">
              <svg className="card__svg" height={35} width={35}>
                <use xlinkHref="./img/sprite.svg#live-icon" />
              </svg>
              <span className="card__live">WATCH LIVE!</span>
            </a>
          </div>
          <img
            src="./img/discipline.png"
            height={30}
            width={30}
            alt="discipline"
            className="card__discipline"
          />
          <div className="card__wrapper card__wrapper--group">
            <ul className="card__list card__list--titles">
              <li className="card__item">
                <b className="card__group">Group A</b>
              </li>
              <li className="card__item">
                <b className="card__group">Group B</b>
              </li>
            </ul>
            <div className="card__number">Match #1</div>
          </div>
          <div className="card__wrapper">
            <span className="card__map">Map: Erangel</span>
          </div>
        </div>
      </li>
    );
  }
}

export default CardBattles;
