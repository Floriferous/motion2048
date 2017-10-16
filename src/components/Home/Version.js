import React from 'react';
import PropTypes from 'prop-types';

const Version = props => {
  return (
    <div style={{ position: 'absolute', bottom: 16, right: 16 }}>
      v{process.env.REACT_APP_VERSION}
    </div>
  );
};

Version.propTypes = {};

export default Version;
