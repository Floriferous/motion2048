import React from 'react';
import PropTypes from 'prop-types';

const Empty = ({ text }) => (
  <h4 style={{ padding: 16 }}>{text || 'Nothing here yet!'}</h4>
);

Empty.propTypes = {
  text: PropTypes.string,
};

Empty.defaultProps = {
  text: '',
};

export default Empty;
