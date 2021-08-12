import React from "react";
import PropTypes from "prop-types";

class Btn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnAtive: false,
      btnIdent: true,
    };
  }

  render() {
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

Btn.propTypes = {
  btn: PropTypes.shape({
    id: PropTypes.number,
    btnIdent: PropTypes.string,
    txt: PropTypes.string,
    icon: PropTypes.string,
  }),
};

export default Btn;
