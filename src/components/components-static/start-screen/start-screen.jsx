import React from "react";
import Btn from "../../components-ui/btn/btn";
import Social from "../../components-ui/social/social";
import Table from "../table/table";
import { BTNS } from "../../../mock/index";
import { TABLE } from "../../../mock/index";
import { SOCIAL } from "../../../mock/index";

const StartScreen = () => {
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
            Global Offensive from Parimatch and StarLadder, with $100,000 total
            prize pool. 16 teams from Europe and the CIS will take part in the
            League, with 4 teams going to League through open qualifiers.
          </p>
          <div className="start-screen__buttons">
            {BTNS.map((btn) => {
              return <Btn key={btn.id} btn={btn} />;
            })}
          </div>
        </div>
        <div className="start-screen__column start-screen__column--right">
          <Table table={TABLE} />
          <Social socials={SOCIAL} />
        </div>
      </div>
    </section>
  );
};

export default StartScreen;
