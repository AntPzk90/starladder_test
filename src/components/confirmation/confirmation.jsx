import React from "react";

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="confirmation stages__confirmation">
        <svg className="confirmation__svg" height={40} width={40}>
          <use xlinkHref="./img/sprite.svg#confirmation-icon" />
        </svg>
        <div className="confirmation__wrapper">
          <p className="confirmation__bold">Вы зарегистрированы</p>
          <p className="confirmation__dscr">
            <span className="confirmation__txt">Team:</span>
            <span className="confirmation__txt" />
            Natus vincere (#353)
          </p>
        </div>
      </div>
    );
  }
}

export default Confirmation;
