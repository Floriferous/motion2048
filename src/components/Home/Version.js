import React from 'react';
import PropTypes from 'prop-types';
import { version } from '../../../package.json';

const Version = props => {
  return (
    <div style={{ position: 'absolute', bottom: 16, right: 16 }}>
      v{version}
    </div>
  );
};

Version.propTypes = {};

export default Version;
