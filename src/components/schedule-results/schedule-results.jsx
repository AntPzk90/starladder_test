import React from "react";
import CardList from "../card-list/card-list";
import { matches } from "../../mock/index";
import { battles } from "../../mock/index";

class ScheduleResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "matches",
      cards: matches,
    };
  }

  changeActiveTabHandler(activeTab) {
    this.setState({ activeTab });
    switch (activeTab) {
      case "matches":
        this.setState({ cards: matches });
        break;
      case "battles":
        this.setState({ cards: battles });
        break;
      default:
        this.setState({ cards: matches });
        break;
    }
  }

  render() {
    return (
      <section className="schedule-results">
        <div className="schedule-results__wrapper">
          <h2 className="schedule-results__title">Расписание и результаты</h2>
          <ul className="tabs-list schedule-results__tabs">
            <li className="tabs-list__item">
              <button
                className={`tabs-list__btn ${
                  this.state.activeTab === "matches"
                    ? "tabs-list__btn--active"
                    : ""
                }`}
                onClick={() => this.changeActiveTabHandler("matches")}
              >
                Matches
              </button>
            </li>
            <li className="tabs-list__item">
              <button
                className={`tabs-list__btn ${
                  this.state.activeTab === "battles"
                    ? "tabs-list__btn--active"
                    : ""
                }`}
                onClick={() => this.changeActiveTabHandler("battles")}
              >
                Battles
              </button>
            </li>
          </ul>
          <CardList cards={this.state.cards} activeTab={this.state.activeTab} />
        </div>
      </section>
    );
  }
}

export default ScheduleResult;
