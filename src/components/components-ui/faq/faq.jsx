import React from "react";
import { FAQ } from "../../../mock/index";

class Faq extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: null,
    };
  }

  changeActiveItemHandler(id) {
    if (this.state.activeItem === id) {
      this.setState({ activeItem: null });
    } else {
      this.setState({ activeItem: id });
    }
  }

  render() {
    return (
      <div className="faq stages__faq">
        <ul className="faq__list">
          {FAQ.map((item) => {
            return (
              <li
                className={`faq__item ${
                  this.state.activeItem === item.id ? "faq__item--active" : ""
                }`}
                key={item.id}
                onClick={() => this.changeActiveItemHandler(item.id)}
                tabIndex="0"
              >
                <b
                  className="faq__bold"
                  onClick={() => this.changeActiveItemHandler(item.id)}
                >
                  {item.title}
                </b>
                <svg className="faq__svg" height={30} width={30}>
                  <use xlinkHref="./img/sprite.svg#faq-arrow-icon" />
                </svg>
                <p className="faq__dscr">{item.dscr}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Faq;