import React from "react";

class ColorState extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "red" };
  }

  _onClick = () => {
    this.setState({
      color: "white",
    });
  };
  render() {
    return (
      <div onClick={this._onClick}>
        <h1>hello</h1>
        <h2>It is {this.state.color}</h2>
      </div>
    );
  }
  // render() {
  //     <div onClick={this._onClick}>
  //       <h1>hello</h1>
  //       <h2>It is {this.state.color}</h2>
  //     </div>
  //   );
  // }
}
export default ColorState;
