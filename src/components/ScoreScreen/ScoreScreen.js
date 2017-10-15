import React from 'react';
import PropTypes from 'prop-types';
import colors from '../../config/colors';
import MotionValue from '../MotionValue';
import KeyboardController from '../KeyboardController';
import Instructions from './Instructions';

const ScoreScreen = ({ highscore, onGoHome, onGameStart }) => {
  return (
    <div style={styles.div}>
      <KeyboardController onEscape={onGoHome} onEnter={onGameStart} />
      <h1 style={styles.score} className="animated bounceInDown">
        <MotionValue
          value={highscore[highscore.length - 1].score}
          preset="gentle"
        />{' '}
        points
      </h1>
      <h1 style={styles.text} className="animated bounceInUp">
        GG bro
      </h1>
      <Instructions />
    </div>
  );
};

const styles = {
  div: {
    background: colors.background,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.white,
    fontSize: '4em',
  },
  score: {
    color: colors.white,
    fontSize: '6em',
    marginBottom: 40,
  },
};

ScoreScreen.propTypes = {
  highscore: PropTypes.arrayOf(PropTypes.object).isRequired,
  onGoHome: PropTypes.func.isRequired,
  onGameStart: PropTypes.func.isRequired,
};

export default ScoreScreen;
