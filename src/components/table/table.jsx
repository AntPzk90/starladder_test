import React from "react";

class Table extends React.Component {
  render() {
    return (
      <table className="table start-screen__info">
        <tbody>
          <tr className="table__row">
            <td className="table__element">Место:</td>
            <td className="table__element">Берлин, Германия</td>
          </tr>
          <tr className="table__row">
            <td className="table__element">Даты:</td>
            <td className="table__element">22 Сентября – 30 Октября 2020</td>
          </tr>
          <tr className="table__row">
            <td className="table__element">Призы:</td>
            <td className="table__element">$1,000,000</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
