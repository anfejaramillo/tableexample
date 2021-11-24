import React from "react";
export default class Celda extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.content,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.handleChangePropertie(
      this.props.idRow,
      this.props.column_key,
      e.target.value
    );
  }

  render() {
    return (
      <td>
        <input
          type="text"
          value={this.props.content}
          onChange={this.handleChange}
        />
      </td>
    );
  }
}
