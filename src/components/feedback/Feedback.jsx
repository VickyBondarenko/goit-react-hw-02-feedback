import { Component } from 'react';
import { ControlledButtons } from 'components/controlledButtons/ControlledButtons';
import { Notification } from 'components/notification/Notification';

export class Feedback extends Component {
  //   static defaultProps = {
  //     defaultCount: 10,
  //     title: 'Counter',
  //   };

  //   state = {
  //     count: this.props.defaultCount,
  //   };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  addNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  addBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const total = this.state.bad + this.state.neutral + this.state.good;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.state.good === 0) {
      return 0;
    }
    const positiveFeedback = Math.round(
      (this.state.good /
        (this.state.bad + this.state.neutral + this.state.good)) *
        100
    );

    return positiveFeedback;
  };

  render() {
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <div className="mb-5 p-5 text-white bg-dark rounded-3 w-75">
        <ControlledButtons
          onAddGood={this.addGood}
          onAddNeutral={this.addNeutral}
          onAddBad={this.addBad}
        />
        <h2 className="text-center">Statistics</h2>
        {total ? (
          <ul className="list">
            <li className="item">Good: {this.state.good}</li>
            <li className="item">Neutral: {this.state.neutral}</li>
            <li className="item"> Bad: {this.state.bad}</li>
            <li className="item">Total: {total}</li>
            <li className="item"> Positive feedback: {positiveFeedback}%</li>
          </ul>
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </div>
    );
  }
}
