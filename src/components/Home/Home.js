import React from 'react';
import PropTypes from 'prop-types';
import colors from '../../config/colors';
import KeyboardController from '../KeyboardController';

const styles = {
  div: {
    height: '100%',
    width: '100%',
    background: colors.background,
    color: colors.white,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 8,
  },
  subtitle: {
    marginTop: 0,
    paddingBottom: 32,
  },
  button: {
    padding: 16,
    fontSize: '1.2em',
    background: colors.box,
    color: colors.white,
    border: 'none',
    borderRadius: '4px',
  },
};

const Home = ({ onGameStart }) => {
  return (
    <div style={styles.div}>
      <KeyboardController onEnter={onGameStart} />
      <h1 className="animated fadeInLeft" style={styles.title}>
        Motion 2048
      </h1>
      <h4 className="animated fadeInRight" style={styles.subtitle}>
        by Florian Bienefelt
      </h4>
      <button
        onClick={onGameStart}
        style={styles.button}
        className="animated fadeInUp"
      >
        <span className="animated infinite fadeIn">Start Game (↩)</span>
      </button>
    </div>
  );
};

Home.propTypes = {
  onGameStart: PropTypes.func.isRequired,
};

export default Home;
