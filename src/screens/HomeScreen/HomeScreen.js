import React from 'react';
import PropTypes from 'prop-types';
import colors from '../../config/colors';
import KeyboardController from '../../components/KeyboardController';
import Button from '../../components/Button';
import HighscoreList from './HighscoreList';
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
  link: {
    textDecoration: 'none',
    color: colors.white,
    opacity: 0.4,
  },
};

const HomeScreen = ({ onGameStart, highscore, onlineHighscores }) => (
  <div style={styles.div}>
    <KeyboardController onEnter={onGameStart} />
    <div className="top">
      <h1 className="animated fadeInDown" style={styles.title}>
        Motion 2048
      </h1>
      <h5
        style={{ margin: 0, marginBottom: 16 }}
        className="animated fadeInLeft"
      >
        A shameless and total ripoff of the awesome{' '}
        <a href="https://gabrielecirulli.github.io/2048/" style={styles.link}>
          2048
        </a>
      </h5>
      <h4 className="animated fadeInRight" style={styles.subtitle}>
        by Florian Bienefelt
      </h4>
    </div>
    <div>
      <Button onClick={onGameStart} className="animated infinite pulse">
        <span>Press ENTER to start</span>
      </Button>
    </div>

    <HighscoreList highscore={highscore} onlineHighscores={onlineHighscores} />
    <Version />
  </div>
);

HomeScreen.propTypes = {
  onGameStart: PropTypes.func.isRequired,
};

export default HomeScreen;
