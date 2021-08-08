import React from "react";

const Logo = () => {
  return (
    <a
      href="main.page"
      className="header__logo logo"
      aria-label="Логотип компании"
    >
      <svg height={60} width={65} className="logo__svg">
        <use xlinkHref="./img/sprite.svg#sl" />
      </svg>
    </a>
  );
};

export default Logo;
