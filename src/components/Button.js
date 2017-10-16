import React from 'react';
import PropTypes from 'prop-types';
import colors from '../config/colors';

const Button = ({ children, style, ...otherProps }) => {
  return (
    <button style={{ ...styles.button, ...style }} {...otherProps}>
      {children}
    </button>
  );
};

const styles = {
  button: {
    padding: 16,
    fontSize: '1.2em',
    background: colors.secondary,
    color: colors.white,
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
  },
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
