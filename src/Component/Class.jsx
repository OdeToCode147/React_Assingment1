import React, { Component } from "react";

export default class Class extends Component {
  render() {
    return (
      <div className="class">
        <h3>This is a created using class Component</h3>
        <p className="text1">This is done using external css</p>
        <p style={{ color: "blue" }}>This is done using internal css</p>
      </div>
    );
  }
}
