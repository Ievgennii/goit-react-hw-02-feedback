import React, { Component } from 'react';

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodIncriment = () => {
    this.setState (prevState => ({
      good: prevState.good + 1,
    }))
  }

  neutralIncriment = () => {
    this.setState (prevState => ({
      neutral: prevState.neutral + 1,
    }))
  }

  badIncriment = () => {
    this.setState (prevState => ({
      bad: prevState.bad + 1,
    }))
  }

  countTotalFeedback = () => {
    return (this.state.good + this.state.neutral + this.state.bad)
   
  }

  countPositiveFeedbackPercentage = () => {
    const total = this.state.good + this.state.neutral + this.state.bad
    if ((total) > 0) {
      return (this.state.good / total * 100).toFixed(0)
    }
    else {
      return (0)
    }

  }

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <button onClick={this.goodIncriment}>Good</button>
        <button onClick={this.neutralIncriment}>Neutral</button>
        <button onClick={this.badIncriment}>Bad</button>
        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage()} %</p>
      </div>
    );
  }
}

export default App;
