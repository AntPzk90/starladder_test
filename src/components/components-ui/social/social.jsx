import React from "react";
import PropTypes from "prop-types";

const Social = (props) => {
  const { socials } = props;
  return (
    <ul className="social start-screen__social">
      {socials.map((socItem) => {
        return (
          <li className="social__item">
            <a
              href="https://twitter.com/?lang=ru"
              className="social__link"
              aria-label={socItem.area}
            >
              <svg className="social__icon" height={30} width={30}>
                <use xlinkHref={`./img/sprite.svg#${socItem.icon}`} />
              </svg>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

Social.propTypes = {
  socials: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      aria: PropTypes.string,
      icon: PropTypes.string,
    })
  ),
};

export default Social;
