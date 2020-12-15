import React from 'react';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  console.log(total);
  return (
    <ul className={s.List}>
      <li className={s.Item}>Good: {good}</li>
      <li className={s.Item}>Neutral: {neutral}</li>
      <li className={s.Item}>Bad: {bad}</li>
      <li className={s.Item}>Total: {total}</li>
      <li className={s.Item}>Positive: {positivePercentage}%</li>
    </ul>
  );
};

export default Statistics;
