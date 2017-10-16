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

const Instructions = () => {
  return (
    <h3 style={styles.div}>
      <span>Enter: Add a box</span>
      <span>Arrows: Change direction</span>
      <span>ESC: End game</span>
    </h3>
  );
};

export default Instructions;
