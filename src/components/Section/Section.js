import React from 'react';

const Section = ({ title, children }) => {
  return (
    <section className="Section">
      {title}
      {children}
    </section>
  );
};

export default Section;
