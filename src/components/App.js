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
    return Object.values(state).reduce((acc, option) => acc + option, 0);
  };

  countPositiveFeedbackPercentage = (good, total) => {
    return total === 0 ? 0 : Math.round((good * 100) / total);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const feedbackQuantity = this.countTotalFeedback(this.state);
    const percentage = this.countPositiveFeedbackPercentage(
      good,
      feedbackQuantity,
    );

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
