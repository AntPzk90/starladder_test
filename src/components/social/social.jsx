import React from "react";

class Social extends React.Component {
  render() {
    return (
      <ul className="social start-screen__social">
        <li className="social__item">
          <a href="https://twitter.com/?lang=ru" className="social__link">
            <svg className="social__icon" height={30} width={30}>
              <use xlinkHref="./img/sprite.svg#twitter-icon" />
            </svg>
          </a>
        </li>
        <li className="social__item">
          <a href="https://www.twitch.tv/" className="social__link">
            <svg className="social__icon" height={30} width={30}>
              <use xlinkHref="./img/sprite.svg#twitch-icon" />
            </svg>
          </a>
        </li>
        <li className="social__item">
          <a href="https://www.facebook.com/" className="social__link">
            <svg className="social__icon" height={30} width={30}>
              <use xlinkHref="./img/sprite.svg#facebook-icon" />
            </svg>
          </a>
        </li>
        <li className="social__item">
          <a href="https://vk.com" className="social__link">
            <svg className="social__icon" height={30} width={30}>
              <use xlinkHref="./img/sprite.svg#vk-icon" />
            </svg>
          </a>
        </li>
      </ul>
    );
  }
}

export default Social;
