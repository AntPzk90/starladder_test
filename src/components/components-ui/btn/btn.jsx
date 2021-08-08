import React from "react";

class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnAtive: false,
      btnIdent: true,
    };
  }

  render() {
    console.log(this.props);
    return (
      <button
        className={`btn ${this.state.btnAtive ? "btn--active" : ""} ${
          this.props.btn.btnIdent ? `${this.props.btn.btnIdent}` : ""
        } start-screen__btn`}
      >
        <span className="btn__txt">{this.props.btn.txt}</span>
        <svg className="btn__icon" height={30} width={30}>
          <use xlinkHref={`./img/sprite.svg#${this.props.btn.icon}`} />
        </svg>
      </button>
    );
  }
}

export default Logo;
