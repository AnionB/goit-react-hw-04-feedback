import React, { useState } from 'react';

import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import './app.css';

export function App() {
  const [goodGrades, setGoodGrades] = useState(0);
  const [neutralGrades, setNeutralGrades] = useState(0);
  const [badGrades, setBadGrades] = useState(0);

  const countTotalFeedback = () => {
    const total = goodGrades + neutralGrades + badGrades;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((goodGrades / countTotalFeedback()) * 100);
  };

  const onLeaveFeedback = e => {
    switch (e.target.name) {
      case 'good':
        setGoodGrades(goodGrades + 1);
        break;
      case 'neutral':
        setNeutralGrades(neutralGrades + 1);
        break;
      case 'bad':
        setBadGrades(badGrades + 1);
        break;
      default:
        console.log(e.target.name);
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={goodGrades}
            neutral={neutralGrades}
            bad={badGrades}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </>
  );
}
