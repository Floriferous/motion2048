import React from 'react';
import colors from '../../config/colors';

const Instructions = () => {
  return (
    <h3 style={styles.div} className="animated fadeIn">
      <span style={styles.text}>Enter: Start again</span>
      <span style={styles.text}>Esc: Go to Menu</span>
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
