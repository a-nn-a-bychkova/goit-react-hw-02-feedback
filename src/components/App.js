import React, { Component } from 'react';
import shortid from 'shortid';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Statistics from './Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateStatistics = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    Object.values(this.state).reduce((acc, option) => acc + option, 0);
  };

  countPositiveFeedbackPercentage = () => {
    console.log('also we will count positive percentage');
  };

  render() {
    const { good, neutral, bad } = this.state;

    const total = this.countTotalFeedback();

    return (
      <div>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.updateStatistics}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback(this.state)}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </div>
    );
  }
}

export default App;
