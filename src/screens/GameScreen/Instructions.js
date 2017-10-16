import React from 'react';
import colors from '../../config/colors';

const styles = {
  div: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '20%',
    color: colors.white,
    zIndex: 1,
  },
};

const Instructions = ({ onGameEnd, onAddBox }) => {
  return (
    <h3 style={styles.div}>
      <a onClick={onAddBox}>Enter: Add a box</a>
      <span>Arrows: Change direction</span>
      <a onClick={onGameEnd}>ESC: End game</a>
    </h3>
  );
};

export default Instructions;
