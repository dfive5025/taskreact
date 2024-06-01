import React from "react";

export default class Thamchieu extends React.Component {
  //   constructor() {
  //     super();
  //     this.state = { saying: "" };
  //   }
  //   update(e) {
  //     this.setState({ sayings: this.a.value });
  //   }

  //   render() {
  //     return (
  //       <div>
  //         Bob says{" "}
  //         <input
  //           type="text"
  //           ref={(node) => {
  //             this.a = node;
  //           }}
  //           onChange={this.update.bind(this)}
  //         />
  //       </div>
  //     );
  //   }
  constructor() {
    super();
    this.state = { sayings: "" };
  }
  onFocus() {
    document.getElementById("myInput").style.backgroundColor = "red";
  }

  render() {
    return (
      <div>
        Bob angry{" "}
        <input
          type="button"
          id="myInput"
          onFocus={this.onFocus.bind(this)}
          style={{ width: "150px", height: "50px" }}
        />
        <br />
        Tim angry{" "}
        <input
          type="button"
          id="myInput"
          onFocus={this.onFocus.bind(this)}
          style={{ width: "150px", height: "50px" }}
        />
      </div>
    );
  }
}
