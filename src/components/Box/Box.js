import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  box: {
    margin: 8,
    background: '#f8f9fa',
  },
};

const Box = ({ style }) => {
  return <div style={{ ...styles.box, ...style }} />;
};

Box.propTypes = {
  style: PropTypes.object.isRequired,
};

export default Box;
