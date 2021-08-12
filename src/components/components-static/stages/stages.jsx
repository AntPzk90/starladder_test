import React from "react";
import Confirmation from "../confirmation/confirmation";
import Faq from "../../components-ui/faq/faq";
import Players from "../../components-ui/players/players";
import StatusList from "../status-list/status-list";
import { PLAYERS } from "../../../mock/index";
import { FAQ } from "../../../mock/index";

const Stages = () => {
  return (
    <section className="stages">
      <div className="stages__wrapper">
        <h2 className="stages__title">Этапы проведения</h2>
        <p className="stages__dscr">
          The path to every Major begins with the open qualifiers for the
          regional Minor Championships, spanning Europe, CIS, Americas, and
          Asia.&nbsp;
          <a
            href="https://some-link.com"
            className="stages__link"
            aria-label="информация про этапы проведения"
          >
            Here is
          </a>
          &nbsp; the schedule of every qualifying stage of StarLadder Major.
        </p>
        <b className="stages__registered">
          <span className="stages__bold">Зарегистрировано:</span>
          <span className="stages__bold">24</span>
        </b>
        <div className="stages__content">
          <Players players={PLAYERS} />
          <div className="stages__column">
            <StatusList />
            <Confirmation />
            <Faq faq={FAQ} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stages;
