import React from "react";

class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnAtive: false,
      btnAnnouncement: true,
    };
  }

  render() {
    return (
      <button
        className={`btn ${this.state.btnAtive ? "btn--active" : ""} ${
          this.state.btnAnnouncement ? "btn--announcement" : ""
        } start-screen__btn`}
      >
        <span className="btn__txt">Read Announcement</span>
        <svg className="btn__icon" height={30} width={30}>
          <use xlinkHref="./img/sprite.svg#arrow-icon" />
        </svg>
      </button>
    );
  }
}

export default Logo;
