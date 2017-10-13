import React from 'react';
import PropTypes from 'prop-types';
import colors from '../../config/colors';

const styles = {
  box: {
    margin: 8,
    background: colors.box,
  },
};

const Box = ({ style }) => {
  return <div style={{ ...styles.box, ...style }} />;
};

Box.propTypes = {
  style: PropTypes.object.isRequired,
};

export default Box;
