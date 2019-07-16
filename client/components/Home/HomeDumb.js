import React from 'react';
import { Link } from 'react-router-dom';

const heroStyles = {
  position: 'relative',
  overflow: 'hidden',
};

const imgStyles = {
  position: 'absolute',
  objectFit: 'cover',
  objectPosition: 'center center',
  width: '100%',
  height: '100%',
  opacity: '0.7',
};

const Home = ({ mostPopular, bestGPA }) => {
  return (
    <section className="hero is-success is-fullheight" style={heroStyles}>
      <img
        className="hero-background is-transparent"
        src="/vasily-koloda-8CqDvPuo_kI-unsplash.jpg"
        alt="School graduation"
        style={imgStyles}
      />
      <div className="hero-body">
        <div className="container">
          {mostPopular && (
            <h1 className="title">
              Our most popular school is{' '}
              <Link to={`/schools/${mostPopular[0].id}`}>
                {mostPopular[0].name}
              </Link>{' '}
              with {mostPopular[1]} students
            </h1>
          )}
          {bestGPA && (
            <h2 className="subtitle">
              Our best school is{' '}
              <Link to={`/schools/${bestGPA[0].id}`}>{bestGPA[0].name}</Link>{' '}
              with an average GPA of {bestGPA[1]}
            </h2>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
