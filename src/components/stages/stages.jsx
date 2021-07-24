import React from "react";
import Confirmation from "../confirmation/confirmation";
import Faq from "../faq/faq";
import Players from "../players/players";
import StatusList from "../status-list/status-list";

class Stages extends React.Component {
  render() {
    return (
      <section className="stages">
        <div className="stages__wrapper">
          <h2 className="stages__title">Этапы проведения</h2>
          <p className="stages__dscr">
            The path to every Major begins with the open qualifiers for the
            regional Minor Championships, spanning Europe, CIS, Americas, and
            Asia.{" "}
            <a href="#" className="stages__link">
              Here is
            </a>{" "}
            the schedule of every qualifying stage of StarLadder Major.
          </p>
          <b className="stages__registered">
            <span className="stages__bold">Зарегистрировано:</span>
            <span className="stages__bold">24</span>
          </b>
          <div className="stages__content">
            <Players />
            <div className="stages__column">
              <StatusList />
              <Confirmation />
              <Faq />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Stages;
