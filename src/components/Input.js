import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ meta: { error }, input, ...otherProps }) => (
  <div style={styles.div}>
    <input type="text" style={styles.input} {...otherProps} {...input} />
    {error && <span style={styles.error}>{error}</span>}
  </div>
);

const styles = {
  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '50%',
  },
  input: {
    padding: 32,
    fontSize: '2em',
    width: '100%',
    backgroundColor: 'white',
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    border: 'none',
    outlineStyle: 'none',
  },
  error: {
    padding: 8,
    color: 'red',
  },
};

Input.propTypes = {};

export default Input;
