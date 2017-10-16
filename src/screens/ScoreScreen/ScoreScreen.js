import React from 'react';
import PropTypes from 'prop-types';
import colors from '../../config/colors';
import MotionValue from '../../components/MotionValue';
import KeyboardController from '../../components/KeyboardController';
import Instructions from './Instructions';
import HighscoreForm from './HighscoreForm';
import './ScoreScreen.css';

const ScoreScreen = ({ highscore, onGoHome, onGameStart, push }) => {
  const lastScore = highscore[highscore.length - 1].score;
  return (
    <div style={styles.div} className="animated fadeIn">
      <KeyboardController
        onEscape={onGoHome}
        //  onEnter={onGameStart}
      />
      <h1 style={styles.score} className="animated bounceInDown score">
        <MotionValue value={lastScore} preset="gentle" />
        &nbsp;
        <span>points</span>
      </h1>
      <h1 style={styles.text} className="animated bounceInUp text">
        {lastScore === 0 ? 'GG n00b' : 'GG bro'}
      </h1>
      <HighscoreForm score={lastScore} push={push} onGoHome={onGoHome} />
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
    marginBottom: 16,
  },
  score: {
    color: colors.white,
    marginBottom: 8,
  },
};

ScoreScreen.propTypes = {
  highscore: PropTypes.arrayOf(PropTypes.object).isRequired,
  onGoHome: PropTypes.func.isRequired,
  onGameStart: PropTypes.func.isRequired,
};

export default ScoreScreen;
