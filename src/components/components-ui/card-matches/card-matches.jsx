import React from "react";
import moment from "moment";
moment.locale("ru");

class CardMatches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardListMatches: false,
      date: Date.now(),
    };
  }
  render() {
    return (
      (!this.props.card.active && (
        <li className="card card--matches card-list__item" tabIndex="0">
          <span className="vis-hidd">
            Событие турнира {this.props.card.title}. Событие состонится, время:{" "}
            {moment(this.props.card.date).format("hh:mm")}, дата:{" "}
            {moment(this.props.card.date).locale("ru").format("DD MMMM")}
          </span>
          <div class="card__inner card__inner--link">
            <div className="card__wrapper card__wrapper--top">
              <p className="card__name">{this.props.card.title}</p>
              <div
                className="card__status"
                style={{ display: this.props.card.active ? "block" : "none" }}
              >
                <svg className="card__svg" height={35} width={35}>
                  <use xlinkHref="./img/sprite.svg#live-icon" />
                </svg>
                <span className="card__live">WATCH LIVE!</span>
              </div>
              <div
                className="card__status card__status--time-date"
                style={{ display: !this.props.card.active ? "block" : "none" }}
              >
                <time className="card__time">
                  {moment(this.props.card.date).format("hh:mm")}
                </time>
                <span className="card__date">
                  {moment(this.props.card.date).locale("ru").format("DD MMMM")}
                </span>
              </div>
            </div>
            <ul className="card__list card__list--logos">
              <li className="card__item">
                <img
                  src={`./img/${this.props.card.firstTeam.img}`}
                  height={50}
                  width={50}
                  alt="team logo"
                  className="card__img"
                />
              </li>
              <li className="card__item">
                <img
                  src={`./img/${this.props.card.secondTeam.img}`}
                  height={50}
                  width={50}
                  alt="team logo"
                  className="card__img"
                />
              </li>
            </ul>
            <ul className="card__list card__list--titles">
              <li className="card__item">
                <h3 className="card__title">
                  {this.props.card.firstTeam.title}
                </h3>
                <span className="card__coefficient">
                  {this.props.card.firstTeam.coef}
                </span>
              </li>
              <li className="card__item">
                <h3 className="card__title">
                  {this.props.card.secondTeam.title}
                </h3>
                <span className="card__coefficient">
                  {this.props.card.secondTeam.coef}
                </span>
              </li>
            </ul>
            <div className="card__wrapper">
              <span className="card__system">
                <span
                  className="card__system-inner"
                  style={{
                    display: !this.props.card.active ? "inline" : "none",
                  }}
                >
                  Starts in: &#8194;
                  <span className="card__counter">5 hours 39 min</span>
                  &#8194;
                </span>
                • {this.props.card.system}
              </span>
              <img
                src={`./img/${this.props.card.partner}`}
                height={15}
                width={62}
                alt="partner"
                className="card__partner"
              />
            </div>
          </div>
        </li>
      )) || (
        <li
          className="card card--active : card--matches card-list__item"
          aria-label={`Перейти к событию${this.props.card.title}`}
        >
          <a href={this.props.card.link} class="card__inner card__inner--link">
            <div className="card__wrapper card__wrapper--top">
              <p className="card__name">{this.props.card.title}</p>
              <div
                className="card__status"
                style={{ display: this.props.card.active ? "block" : "none" }}
              >
                <svg className="card__svg" height={35} width={35}>
                  <use xlinkHref="./img/sprite.svg#live-icon" />
                </svg>
                <span className="card__live">WATCH LIVE!</span>
              </div>
              <div
                className="card__status card__status--time-date"
                style={{ display: !this.props.card.active ? "block" : "none" }}
              >
                <time className="card__time">
                  {moment(this.props.card.date).format("hh:mm")}
                </time>
                <span className="card__date">
                  {moment(this.props.card.date).locale("ru").format("DD MMMM")}
                </span>
              </div>
            </div>
            <ul className="card__list card__list--logos">
              <li className="card__item">
                <img
                  src={`./img/${this.props.card.firstTeam.img}`}
                  height={50}
                  width={50}
                  alt="team logo"
                  className="card__img"
                />
              </li>
              <li className="card__item">
                <img
                  src={`./img/${this.props.card.secondTeam.img}`}
                  height={50}
                  width={50}
                  alt="team logo"
                  className="card__img"
                />
              </li>
            </ul>
            <ul className="card__list card__list--titles">
              <li className="card__item">
                <h3 className="card__title">
                  {this.props.card.firstTeam.title}
                </h3>
                <span className="card__coefficient">
                  {this.props.card.firstTeam.coef}
                </span>
              </li>
              <li className="card__item">
                <h3 className="card__title">
                  {this.props.card.secondTeam.title}
                </h3>
                <span className="card__coefficient">
                  {this.props.card.secondTeam.coef}
                </span>
              </li>
            </ul>
            <div className="card__wrapper">
              <span className="card__system">
                <span
                  className="card__system-inner"
                  style={{
                    display: !this.props.card.active ? "inline" : "none",
                  }}
                >
                  Starts in: &#8194;
                  <span className="card__counter">5 hours 39 min</span>
                  &#8194;
                </span>
                • {this.props.card.system}
              </span>
              <img
                src={`./img/${this.props.card.partner}`}
                height={15}
                width={62}
                alt="partner"
                className="card__partner"
              />
            </div>
          </a>
        </li>
      )
    );
  }
}

export default CardMatches;
