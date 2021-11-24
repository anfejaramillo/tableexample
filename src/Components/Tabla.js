import React from "react";
import Encabezado from "./Encabezado";
import Fila from "./Fila";

export default class Tabla extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: this.props.headers,
      content: this.props.data,
    };
  }


  render() {      
    let tableReference = this;
    return (
      <table>
        <thead>
          <Encabezado headers={this.props.headers} />
        </thead>
        <tbody>
          {Object.entries(this.props.data).map(function (v) {
            return (
              <Fila
                headers_raw={tableReference.props.headers_raw}
                rowData={v[1]}
                deleteRowFunction={tableReference.props.onDeleteRow}
                handleChangePropertie={tableReference.props.handleChangePropertie}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}
