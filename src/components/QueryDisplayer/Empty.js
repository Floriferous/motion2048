import React from 'react';
import PropTypes from 'prop-types';

const Empty = ({ text }) => (
  <h4 style={styles.text}>{text || 'Nothing here yet!'}</h4>
);

const styles = {
  text: {
    padding: 16,
  },
};

Empty.propTypes = {
  text: PropTypes.string,
};

export default Empty;
