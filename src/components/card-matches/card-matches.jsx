import React from "react";
import cardActiveBackground from "../../img/logo-star-active.svg";
import cardBackground from "../../img/logo-star.svg";

class CardMatches extends React.Component {
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
        } card--matches card-list__item`}
        // style={`background-image: ${
        //   this.state.cardActive ? cardActiveBackground : cardBackground
        // }`}
      >
        <div className="card__wrapper card__wrapper--top">
          <p className="card__name">Asia Minor: Play-Off</p>
          <a href="witch-link" className="card__status">
            <svg className="card__svg" height={35} width={35}>
              <use xlinkHref="./img/sprite.svg#live-icon" />
            </svg>
            <span className="card__live">WATCH LIVE!</span>
          </a>
        </div>
        <ul className="card__list card__list--logos">
          <li className="card__item">
            <img
              src="./img/logo-1.png"
              height={50}
              width={50}
              alt="team logo"
              className="card__img"
            />
          </li>
          <li className="card__item">
            <img
              src="./img/logo-2.png"
              height={50}
              width={50}
              alt="team logo"
              className="card__img"
            />
          </li>
        </ul>
        <ul className="card__list card__list--titles">
          <li className="card__item">
            <h3 className="card__title">Albert Warren</h3>
            <span className="card__coefficient">3.22</span>
          </li>
          <li className="card__item">
            <h3 className="card__title">Gloria Henry</h3>
            <span className="card__coefficient">53.22</span>
          </li>
        </ul>
        <div className="card__wrapper">
          <span className="card__system">Bо 3</span>
          <img
            src="./img/partner.png"
            height={15}
            width={62}
            alt="partner"
            className="card__partner"
          />
        </div>
      </li>
    );
  }
}

export default CardMatches;
