import React from 'react';
import PropTypes from 'prop-types';
import BoxListTransition from './BoxListTransition';

const BoxList = ({ boxes }) => (
  <BoxListTransition
    boxes={boxes.map(box => ({ key: '' + box.id, data: { ...box } }))}
  />
);

BoxList.propTypes = {
  boxes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BoxList;
