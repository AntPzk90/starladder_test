import React from "react";
import Btn from "../btn/btn";
import Social from "../social/social";
import Table from "../table/table";

class StartScreen extends React.Component {
  render() {
    return (
      <section className="start-screen">
        <div className="start-screen__wrapper">
          <div className="start-screen__column start-screen__column--left">
            <img
              src="./img/batlegrounds-logo.png"
              height={60}
              width={191}
              alt="batlegrounds logo"
              className="start-screen__logo"
            />
            <h1 className="start-screen__title">
              StarSeries i-League CSGO Season 8
            </h1>
            <p className="start-screen__dscr">
              Parimatch League CS:GO is the new online league in Counter-Strike:
              Global Offensive from Parimatch and StarLadder, with $100,000
              total prize pool. 16 teams from Europe and the CIS will take part
              in the League, with 4 teams going to League through open
              qualifiers.
            </p>
            <div className="start-screen__buttons">
              {/* <button className="btn btn--active btn--announcement start-screen__btn">
                <span className="btn__txt">Read Announcement</span>
                <svg className="btn__icon" height={30} width={30}>
                  <use xlinkHref="./img/sprite.svg#arrow-icon" />
                </svg>
              </button> */}
              <Btn />
              <button className="btn btn--tickets start-screen__btn">
                <span className="btn__txt">GET TICKETS</span>
                <svg className="btn__icon" height={30} width={30}>
                  <use xlinkHref="./img/sprite.svg#tickets-icon" />
                </svg>
              </button>
            </div>
          </div>
          <div className="start-screen__column start-screen__column--right">
            <Table />
            <Social />
          </div>
        </div>
      </section>
    );
  }
}

export default StartScreen;
