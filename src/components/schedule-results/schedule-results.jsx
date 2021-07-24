import React from "react";
import CardList from "../card-list/card-list";

class ScheduleResult extends React.Component {
  render() {
    return (
      <section className="schedule-results">
        <div className="schedule-results__wrapper">
          <h2 className="schedule-results__title">Расписание и результаты</h2>
          <ul className="tabs-list schedule-results__tabs">
            <li className="tabs-list__item">
              <button className="tabs-list__btn tabs-list__btn--active">
                Matches
              </button>
            </li>
            <li className="tabs-list__item">
              <button className="tabs-list__btn">Battles</button>
            </li>
          </ul>
          <CardList />
          {/* <ul className="card-list card-list--matches schedule-results__cards">
            <li className="card card--active card--matches card-list__item">
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
            <li className="card card--matches card-list__item">
              <div className="card__wrapper card__wrapper--top">
                <p className="card__name">Asia Minor: Play-Off</p>
                <div className="card__status card__status--time-date">
                  <time className="card__time">19:00</time>
                  <span className="card__date">29 октября</span>
                </div>
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
                <span className="card__system">
                  Starts in:{" "}
                  <span className="card__counter">5 hours 39 min </span>• Bо 3
                </span>
                <img
                  src="./img/partner.png"
                  height={15}
                  width={62}
                  alt="partner"
                  className="card__partner"
                />
              </div>
            </li>
            <li className="card card--matches card-list__item">
              <div className="card__wrapper card__wrapper--top">
                <p className="card__name">Asia Minor: Play-Off</p>
                <div className="card__status card__status--time-date">
                  <time className="card__time">19:00</time>
                  <span className="card__date">29 октября</span>
                </div>
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
                <span className="card__system">
                  Starts in:{" "}
                  <span className="card__counter">5 hours 39 min </span>• Bо 3
                </span>
                <img
                  src="./img/partner.png"
                  height={15}
                  width={62}
                  alt="partner"
                  className="card__partner"
                />
              </div>
            </li>
            <li className="card card--matches card-list__item">
              <div className="card__wrapper card__wrapper--top">
                <p className="card__name">Asia Minor: Play-Off</p>
                <div className="card__status card__status--time-date">
                  <time className="card__time">19:00</time>
                  <span className="card__date">29 октября</span>
                </div>
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
                <span className="card__system">
                  Starts in:{" "}
                  <span className="card__counter">5 hours 39 min </span>• Bо 3
                </span>
                <img
                  src="./img/partner.png"
                  height={15}
                  width={62}
                  alt="partner"
                  className="card__partner"
                />
              </div>
            </li>
          </ul>
          <ul
            className="card-list card-list--battles schedule-results__cards"
            style={{ display: "none" }}
          >
            <li className="card card--active card--battles card-list__item">
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
            </li>
            <li className="card card--battles card-list__item">
              <div className="card__wrapper card__wrapper--top">
                <p className="card__name">Asia Minor: Play-Off</p>
                <div className="card__status card__status--time-date">
                  <time className="card__time">19:00</time>
                  <span className="card__date">29 октября</span>
                </div>
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
                <span className="card__system">
                  Starts in:{" "}
                  <span className="card__counter">5 hours 39 min </span>• Bо 3
                </span>
              </div>
            </li>
            <li className="card card--battles card-list__item">
              <div className="card__wrapper card__wrapper--top">
                <p className="card__name">Asia Minor: Play-Off</p>
                <div className="card__status card__status--time-date">
                  <time className="card__time">19:00</time>
                  <span className="card__date">29 октября</span>
                </div>
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
                <span className="card__system">
                  Starts in:{" "}
                  <span className="card__counter">5 hours 39 min </span>• Bо 3
                </span>
              </div>
            </li>
          </ul> */}
        </div>
      </section>
    );
  }
}

export default ScheduleResult;
