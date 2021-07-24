import React from "react";

class Players extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ul className="players stages__list stages__list--players">
        <li className="players__item players__item--start">
          <span className="players__dim"> # </span>
          <span className="players__dim">Команда</span>
        </li>
        <li className="players__item players__item--order-top">
          <span className="players__index">353</span>
          <a href="profile-link" className="players__link">
            <svg className="players__svg" height={18} width={24}>
              <use xlinkHref="./img/sprite.svg#flag" />
            </svg>
            <b className="players__name">Dianne Russell</b>
          </a>
        </li>
        <li className="players__item">
          <span className="players__index">2</span>
          <a href="profile-link" className="players__link">
            <svg className="players__svg" height={18} width={24}>
              <use xlinkHref="./img/sprite.svg#flag" />
            </svg>
            <b className="players__name">Natus Vincere</b>
          </a>
        </li>
        <li className="players__item">
          <span className="players__index">3</span>
          <a href="profile-link" className="players__link">
            <svg className="players__svg" height={18} width={24}>
              <use xlinkHref="./img/sprite.svg#flag" />
            </svg>
            <b className="players__name">Natus Vincere</b>
          </a>
        </li>
        <li className="players__item">
          <span className="players__index">4</span>
          <a href="profile-link" className="players__link">
            <svg className="players__svg" height={18} width={24}>
              <use xlinkHref="./img/sprite.svg#flag" />
            </svg>
            <b className="players__name">Natus Vincere</b>
          </a>
        </li>
        <li className="players__item">
          <span className="players__index">5</span>
          <a href="profile-link" className="players__link">
            <svg className="players__svg" height={18} width={24}>
              <use xlinkHref="./img/sprite.svg#flag" />
            </svg>
            <b className="players__name">Natus Vincere</b>
          </a>
        </li>
        <li className="players__item">
          <span className="players__index">6</span>
          <a href="profile-link" className="players__link">
            <svg className="players__svg" height={18} width={24}>
              <use xlinkHref="./img/sprite.svg#flag" />
            </svg>
            <b className="players__name">Natus Vincere</b>
          </a>
        </li>
        <li className="players__item">
          <span className="players__index">7</span>
          <a href="profile-link" className="players__link">
            <svg className="players__svg" height={18} width={24}>
              <use xlinkHref="./img/sprite.svg#flag" />
            </svg>
            <b className="players__name">Natus Vincere</b>
          </a>
        </li>
        <li className="players__item">
          <span className="players__index">8</span>
          <a href="profile-link" className="players__link">
            <svg className="players__svg" height={18} width={24}>
              <use xlinkHref="./img/sprite.svg#flag" />
            </svg>
            <b className="players__name">Natus Vincere</b>
          </a>
        </li>
        <li className="players__item">
          <span className="players__index">9</span>
          <a href="profile-link" className="players__link">
            <svg className="players__svg" height={18} width={24}>
              <use xlinkHref="./img/sprite.svg#flag" />
            </svg>
            <b className="players__name">Natus Vincere</b>
          </a>
        </li>
        <li className="players__item">
          <span className="players__index">10</span>
          <a href="profile-link" className="players__link">
            <svg className="players__svg" height={18} width={24}>
              <use xlinkHref="./img/sprite.svg#flag" />
            </svg>
            <b className="players__name">Natus Vincere</b>
          </a>
        </li>
        <li className="players__item">
          <span className="players__index">11</span>
          <a href="profile-link" className="players__link">
            <svg className="players__svg" height={18} width={24}>
              <use xlinkHref="./img/sprite.svg#flag" />
            </svg>
            <b className="players__name">Natus Vincere</b>
          </a>
        </li>
        <li className="players__item">
          <span className="players__index">12</span>
          <a href="profile-link" className="players__link">
            <svg className="players__svg" height={18} width={24}>
              <use xlinkHref="./img/sprite.svg#flag" />
            </svg>
            <b className="players__name">Natus Vincere</b>
          </a>
        </li>
        <li className="players__item">
          <span className="players__index">13</span>
          <a href="profile-link" className="players__link">
            <svg className="players__svg" height={18} width={24}>
              <use xlinkHref="./img/sprite.svg#flag" />
            </svg>
            <b className="players__name">Natus Vincere</b>
          </a>
        </li>
        <li className="players__item">
          <span className="players__index">14</span>
          <a href="profile-link" className="players__link">
            <svg className="players__svg" height={18} width={24}>
              <use xlinkHref="./img/sprite.svg#flag" />
            </svg>
            <b className="players__name">Natus Vincere</b>
          </a>
        </li>
        <li className="players__item">
          <span className="players__index">15</span>
          <a href="profile-link" className="players__link">
            <svg className="players__svg" height={18} width={24}>
              <use xlinkHref="./img/sprite.svg#flag" />
            </svg>
            <b className="players__name">Natus Vincere</b>
          </a>
        </li>
        <li className="players__item">
          <span className="players__index">16</span>
          <a href="profile-link" className="players__link">
            <svg className="players__svg" height={18} width={24}>
              <use xlinkHref="./img/sprite.svg#flag" />
            </svg>
            <b className="players__name">Natus Vincere</b>
          </a>
        </li>
      </ul>
    );
  }
}

export default Players;
