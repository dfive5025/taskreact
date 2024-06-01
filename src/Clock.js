import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() }; //objcokeyvaluedcganchothuoctinhstate
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick()); //thuchienhdcuthesau1khoangtgiannhatdinh
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Time Current</h1>
        <h2>It is : {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;
