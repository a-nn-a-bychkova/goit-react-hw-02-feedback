import React from 'react';
import s from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={s.Section}>
      <h2> {title}</h2>
      {children}
    </section>
  );
};

export default Section;
