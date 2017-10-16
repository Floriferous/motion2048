import React from 'react';
import PropTypes from 'prop-types';
import colors from '../config/colors';

const Button = ({ children, onClick, className, style }) => {
  return (
    <button
      onClick={onClick}
      style={{ ...styles.button, ...style }}
      className={className}
    >
      {children}
    </button>
  );
};

const styles = {
  button: {
    padding: 16,
    fontSize: '1.2em',
    background: colors.box,
    color: colors.white,
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
