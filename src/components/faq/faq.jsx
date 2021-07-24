import React from "react";

class Faq extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="faq stages__faq">
        <ul className="faq__list">
          <li className="faq__item">
            <b className="faq__bold">Support</b>
            <svg className="faq__svg" height={30} width={30}>
              <use xlinkHref="./img/sprite.svg#faq-arrow-icon" />
            </svg>
            <p className="faq__dscr faq__dscr--active">
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </li>
          <li className="faq__item">
            <b className="faq__bold">Rules</b>
            <svg className="faq__svg" height={30} width={30}>
              <use xlinkHref="./img/sprite.svg#faq-arrow-icon" />
            </svg>
            <p className="faq__dscr">
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </li>
          <li className="faq__item">
            <b className="faq__bold">FAQ</b>
            <svg className="faq__svg" height={30} width={30}>
              <use xlinkHref="./img/sprite.svg#faq-arrow-icon" />
            </svg>
            <p className="faq__dscr">
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Faq;
