import React from "react";

const Players = (props) => {
  const { players } = props;

  return (
    <ul className="players stages__list stages__list--players">
      <li className="players__item players__item--start">
        <span className="players__dim"> # </span>
        <span className="players__dim">Команда</span>
      </li>
      {players.map((player) => {
        return (
          <li
            className={`players__item ${
              player.flag.order ? "players__item--order-top" : ""
            }`}
          >
            <a
              href="#"
              className="players__link"
              aria-label={`Перейти к профилю `}
            >
              <span className="players__index">{player.number}</span>
              <div className="players__data">
                <svg className="players__svg" height={18} width={24}>
                  <use xlinkHref={`./img/sprite.svg#${player.flag}`} />
                </svg>
                <b className="players__name">{player.name}</b>
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Players;
