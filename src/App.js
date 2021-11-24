import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { db, headers, headers_raw } from "./db";
import Tabla from "./Components/Tabla";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: db,
    };
    this.deleteRow = this.deleteRow.bind(this);
    this.handleChangePropertie = this.handleChangePropertie.bind(this);
  }

  async handleChangePropertie(id, prop, val) {
    let tempContent = this.state.data.slice();
    let newContent = [];
    for (let key in tempContent) {
      if (tempContent[key].id != id) {
        newContent.push(tempContent[key]);
      } else {
        tempContent[key][prop] = val;
        newContent.push(tempContent[key]);
      }
    }
    await this.setState({
      data: newContent,
    });
    console.log(this.state)
  }

  deleteRow(e) {
    let tempContent = this.state.data.slice();
    let newContent = [];
    for (let key in tempContent) {
      if (tempContent[key].id != e.target.id) {
        newContent.push(tempContent[key]);
      }
    }
    this.setState({
      data: newContent,
    });
  }

  render() {
    return (
      <div>
        <h1>Titulo de la Pagina</h1>
        <Tabla
          data={this.state.data}
          headers={headers}
          headers_raw={headers_raw}
          onDeleteRow={this.deleteRow}
          handleChangePropertie={this.handleChangePropertie}
        />
      </div>
    );
  }
}
