import React from "react";
import Celda from "./Celda";
export default class Fila extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rowData: this.props.rowData,
    };
  }

  render() {
    let rowReference = this;
    let contador = -1;
    return (
      <tr>
        {Object.entries(this.props.rowData).map(function (v) {
          contador = contador + 1;
          return (
            <Celda
              content={v[1]}
              handleChangePropertie={rowReference.props.handleChangePropertie}
              idRow={rowReference.state.rowData.id}
              column_key={rowReference.props.headers_raw[contador]}
            />
          );
        })}
        <td>
          <input
            type="button"
            value="Borrar"
            id={this.props.rowData.id}
            onClick={this.props.deleteRowFunction}
          />
        </td>
      </tr>
    );
  }
}
