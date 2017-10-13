import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';
import { TransitionMotion, spring, presets } from 'react-motion';
import constants from '../../config/constants';

const styles = {
  div: {
    height: '100%',
    width: '100%',
  },
};

export default class BoxListTransition extends Component {
  getDefaultStyles = () =>
    this.props.boxes.map(box => ({
      ...box,
      style: { height: 0, width: 0, opacity: 1 },
    }));

  getStyles = () => {
    const { boxes } = this.props;
    return boxes.map((box, i) => {
      return {
        ...box,
        style: {
          height: spring(constants.BOX_SIZE, presets.gentle),
          width: spring(constants.BOX_SIZE, presets.gentle),
          opacity: spring(1, presets.gentle),
        },
      };
    });
  };

  willEnter() {
    return {
      height: 0,
      width: 0,
      opacity: 0.8,
    };
  }

  willLeave() {
    return {
      height: spring(0),
      opacity: spring(0),
    };
  }

  render() {
    return (
      <TransitionMotion
        defaultStyles={this.getDefaultStyles()}
        styles={this.getStyles()}
        willLeave={this.willLeave}
        willEnter={this.willEnter}
      >
        {boxStyles => (
          <div style={styles.div}>
            {boxStyles.map(({ key, style, data: { id } }) => (
              <Box key={key} style={style} />
            ))}
          </div>
        )}
      </TransitionMotion>
    );
  }
}

BoxListTransition.propTypes = {
  boxes: PropTypes.arrayOf(PropTypes.object).isRequired,
};
