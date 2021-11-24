import React from "react";
export default class Encabezado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnsName: this.props.headers,
    };
  }
  render() {
    return (
      <tr>
        {
          Object.entries(this.state.columnsName).map(function(v){
            return(
              <th>{v[1]}</th>
            );
          })
        }
      </tr>
    );
  }
}
