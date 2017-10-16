import React from 'react';
import colors from '../../config/colors';

const Instructions = ({ onGameStart, onGoHome }) => {
  return (
    <h3 style={styles.div} className="animated fadeIn">
      <a onClick={onGameStart} style={styles.text}>
        Enter: Start again
      </a>
      <a onClick={onGoHome} style={styles.text}>
        Esc: Go to Menu
      </a>
    </h3>
  );
};

const styles = {
  div: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 64,
  },
  text: {
    color: colors.white,
  },
};

export default Instructions;
