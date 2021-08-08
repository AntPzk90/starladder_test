import React from "react";
import moment from "moment";
moment.locale("ru");

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
      (!this.props.card.active && (
        <li className="card card--battles card-list__item" tabIndex="0">
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
            <img
              src={`./img/${this.props.card.discipline}`}
              height={30}
              width={30}
              alt="discipline"
              className="card__discipline"
            />
            <div className="card__wrapper card__wrapper--group">
              <ul className="card__list card__list--titles">
                <li className="card__item">
                  <b className="card__group">
                    {this.props.card.firstTeam.title}
                  </b>
                </li>
                <li className="card__item">
                  <b className="card__group">
                    {this.props.card.secondTeam.title}
                  </b>
                </li>
              </ul>
              <div className="card__number">{`Match #${this.props.card.match}`}</div>
            </div>
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
                <span
                  className="card__system-inner"
                  style={{
                    display: this.props.card.active ? "inline" : "none",
                  }}
                >{`Map: ${this.props.card.map}`}</span>
              </span>
            </div>
          </div>
        </li>
      )) || (
        <li className="card card--active card--battles card-list__item">
          <a
            href={this.props.card.link}
            class="card__inner card__inner--link"
            aria-label={`Перейти к событию${this.props.card.title}`}
          >
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
            <img
              src={`./img/${this.props.card.discipline}`}
              height={30}
              width={30}
              alt="discipline"
              className="card__discipline"
            />
            <div className="card__wrapper card__wrapper--group">
              <ul className="card__list card__list--titles">
                <li className="card__item">
                  <b className="card__group">
                    {this.props.card.firstTeam.title}
                  </b>
                </li>
                <li className="card__item">
                  <b className="card__group">
                    {this.props.card.secondTeam.title}
                  </b>
                </li>
              </ul>
              <div className="card__number">{`Match #${this.props.card.match}`}</div>
            </div>
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
                <span
                  className="card__system-inner"
                  style={{
                    display: this.props.card.active ? "inline" : "none",
                  }}
                >{`Map: ${this.props.card.map}`}</span>
              </span>
            </div>
          </a>
        </li>
      )
    );
  }
}

export default CardBattles;
