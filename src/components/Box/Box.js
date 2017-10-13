import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  box: {
    height: 40,
    width: 40,
    margin: 8,
    background: '#f8f9fa',
  },
};

const Box = props => {
  return <div style={styles.box} />;
};

Box.propTypes = {};

export default Box;
