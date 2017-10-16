import React from 'react';
import PropTypes from 'prop-types';
import colors from '../../config/colors';
import KeyboardController from '../../components/KeyboardController';
import Button from '../../components/Button';
import Highscores from './Highscores';
import Version from './Version';

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
    cursor: 'pointer',
  },
};

const HomeScreen = ({ onGameStart, highscore, onlineHighscores }) => (
  <div style={styles.div}>
    <KeyboardController onEnter={onGameStart} />
    <h1 className="animated fadeInLeft" style={styles.title}>
      Motion 2048
    </h1>
    <h4 className="animated fadeInRight" style={styles.subtitle}>
      by Florian Bienefelt
    </h4>
    <Button onClick={onGameStart} className="animated fadeInUp">
      <span className="animated infinite fadeOut">Start Game (↩)</span>
    </Button>

    <Highscores highscore={highscore} onlineHighscores={onlineHighscores} />
    <Version />
  </div>
);

HomeScreen.propTypes = {
  onGameStart: PropTypes.func.isRequired,
};

export default HomeScreen;
