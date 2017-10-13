import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';

export default class BoxList extends Component {
  render() {
    const { boxes } = this.props;
    return boxes.map(box => <Box key={box.id} />);
  }
}

BoxList.propTypes = {
  boxes: PropTypes.arrayOf(PropTypes.object).isRequired,
};
