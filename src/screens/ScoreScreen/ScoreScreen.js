import React from 'react';
import PropTypes from 'prop-types';
import colors from '../../config/colors';
import MotionValue from '../../components/MotionValue';
import KeyboardController from '../../components/KeyboardController';
import Instructions from './Instructions';
import './ScoreScreen.css';

const ScoreScreen = ({ highscore, onGoHome, onGameStart }) => {
  return (
    <div style={styles.div} className="animated fadeIn">
      <KeyboardController onEscape={onGoHome} onEnter={onGameStart} />
      <h1 style={styles.score} className="animated bounceInDown score">
        <MotionValue
          value={highscore[highscore.length - 1].score}
          preset="gentle"
        />
        &nbsp;
        <span>points</span>
      </h1>
      <h1 style={styles.text} className="animated bounceInUp text">
        GG bro
      </h1>
      <Instructions onGoHome={onGoHome} onGameStart={onGameStart} />
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
  },
  score: {
    color: colors.white,
    marginBottom: 40,
  },
};

ScoreScreen.propTypes = {
  highscore: PropTypes.arrayOf(PropTypes.object).isRequired,
  onGoHome: PropTypes.func.isRequired,
  onGameStart: PropTypes.func.isRequired,
};

export default ScoreScreen;
