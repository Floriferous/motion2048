import React from 'react';
import PropTypes from 'prop-types';
import BoxListTransition from './BoxListTransition';

const BoxList = ({ boxes, ...otherProps }) => (
  <BoxListTransition
    boxes={boxes.map(box => ({ key: '' + box.id, data: { ...box } }))}
    {...otherProps}
  />
);

BoxList.propTypes = {
  boxes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BoxList;
