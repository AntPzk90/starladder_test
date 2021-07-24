import React from "react";

class Logo extends React.Component {
  render() {
    return (
      <a href="main.page" className="header__logo logo">
        <svg height={60} width={65} className="logo__svg">
          <use xlinkHref="./img/sprite.svg#sl" />
        </svg>
      </a>
    );
  }
}

export default Logo;
