import React from "react";

class StatusList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ul className="status-list stages__list stages__list--status">
        <li className="status-list__item status-list__item--active">
          <div className="status-list__icon">
            <div className="status-list__icon-inner">
              <svg className="status-list__svg" height={24} width={24}>
                <use xlinkHref="./img/sprite.svg#step-1" />
              </svg>
            </div>
          </div>
          <div className="status-list__txt">
            <div className="status-list__step">Registration</div>
            <span className="status-list__time">
              29 sep, 19:00 – 20 nov, 10:00
            </span>
          </div>
        </li>
        <li className="status-list__item">
          <div className="status-list__icon">
            <div className="status-list__icon-inner">
              <svg className="status-list__svg" height={24} width={24}>
                <use xlinkHref="./img/sprite.svg#step-2" />
              </svg>
            </div>
          </div>
          <div className="status-list__txt">
            <div className="status-list__step">Check-in</div>
            <span className="status-list__time">
              29 sep, 19:00 – 20 nov, 10:00
            </span>
          </div>
        </li>
        <li className="status-list__item">
          <div className="status-list__icon">
            <div className="status-list__icon-inner">
              <svg className="status-list__svg" height={24} width={24}>
                <use xlinkHref="./img/sprite.svg#step-3" />
              </svg>
            </div>
          </div>
          <div className="status-list__txt">
            <div className="status-list__step">Scheduling:</div>
            <span className="status-list__time">
              29 sep, 19:00 – 20 nov, 10:00
            </span>
          </div>
        </li>
      </ul>
    );
  }
}

export default StatusList;
