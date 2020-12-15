import React from 'react';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={s.Container}>
      {options.map(option => (
        <button
          type="button"
          className="button"
          key={[option]}
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {[option]}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
