import React from "react";

class Car extends React.Component {
  render() {
    return <h2>i am a {this.props.color} Car !</h2>;
  }
}

export default Car;
