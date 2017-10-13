import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';
import { TransitionMotion, spring, presets } from 'react-motion';
import constants from '../../config/constants';

const styles = {
  div: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    position: 'relative',
  },
};

const getDefaultStyles = boxes =>
  boxes.map(box => ({
    ...box,
    style: { height: 0, width: 0, opacity: 1 },
  }));

const getStyles = boxes =>
  boxes.map((box, i) => {
    return {
      ...box,
      style: {
        height: spring(constants.BOX_SIZE, presets.gentle),
        width: spring(constants.BOX_SIZE, presets.gentle),
        opacity: spring(1, presets.gentle),
      },
    };
  });

const willEnter = () => ({
  height: 0,
  width: 0,
  opacity: 0,
});

const willLeave = () => ({
  height: spring(0),
  opacity: spring(0),
});

const BoxListTransition = ({ boxes }) => (
  <TransitionMotion
    defaultStyles={getDefaultStyles(boxes)}
    styles={getStyles(boxes)}
    willLeave={willLeave}
    willEnter={willEnter}
  >
    {boxStyles => (
      <div style={styles.div}>
        {boxStyles.map(({ key, style, data }) => (
          <Box key={key} style={style} {...data} />
        ))}
      </div>
    )}
  </TransitionMotion>
);

BoxListTransition.propTypes = {
  boxes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BoxListTransition;
