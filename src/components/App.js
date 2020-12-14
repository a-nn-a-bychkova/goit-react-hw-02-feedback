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

  countTotalFeedback = state => {
    Object.values(state).reduce((acc, option) => acc + option, 0);
  };

  countPositiveFeedbackPercentage = () => {
    console.log('also we will count positive percentage');
  };

  render() {
    const { good, neutral, bad } = this.state;

    const feedbackQuantity = this.countTotalFeedback(this.state);
    console.log('this is const feedbackQuantity in render', feedbackQuantity);
    const percentage = this.countPositiveFeedbackPercentage(this.state);
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
            total={feedbackQuantity}
            positivePercentage={percentage}
          />
        </Section>
      </div>
    );
  }
}

export default App;
