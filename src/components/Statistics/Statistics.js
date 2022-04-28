import React from 'react';
import PropTypes from 'prop-types';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      <p>Good:&nbsp;{good}</p>
      <p>Neutral:&nbsp;{neutral}</p>
      <p>Bad:&nbsp;{bad}</p>
      <p>Total:&nbsp;{total}</p>
      <p>Positive feedback:&nbsp;{positivePercentage}%</p>
    </>
  );
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
