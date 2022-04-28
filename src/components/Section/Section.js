import React from 'react';
import PropTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <section className="section">
      <p className="title">{title}</p>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};