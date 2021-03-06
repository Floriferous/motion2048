import React from 'react';
import colors from '../../config/colors';

const styles = {
  div: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '10%',
    color: colors.white,
    zIndex: 1,
  },
  line: {
    textAlign: 'center',
  },
};

const Instructions = ({ onGameEnd, onAddBox }) => {
  return (
    <h3 style={styles.div}>
      {/* <a onClick={onAddBox} style={styles.line}>
        Enter: Add a box
      </a> */}
      <span style={styles.line}>Arrow keys: Play</span>
      <a onClick={onGameEnd} style={styles.line}>
        ESC: End game
      </a>
    </h3>
  );
};

export default Instructions;
