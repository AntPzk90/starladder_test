import React from "react";
import Logo from "../logo/logo";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__wrapper">
          <Logo />
        </div>
      </header>
    );
  }
}

export default Header;
