import React from "react";

class Table extends React.Component {
  render() {
    return (
      <table className="table start-screen__info">
        <tbody>
          {this.props.table.map((tableRow) => {
            return (
              <tr className="table__row" key={tableRow.id}>
                <td className="table__element">{tableRow.label}</td>
                <td className="table__element">{tableRow.value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Table;
