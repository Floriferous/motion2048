import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';
import { TransitionMotion, spring, presets } from 'react-motion';

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

const getDefaultStyles = boxes => {
  return boxes.map(box => ({
    ...box,
    style: { height: 0, width: 0, opacity: 1 },
  }));
};

const getStyles = (boxes, boxSize) => {
  return boxes.map((box, i) => {
    return {
      ...box,
      style: {
        height: spring(boxSize, presets.gentle),
        width: spring(boxSize, presets.gentle),
        opacity: spring(1, presets.gentle),
      },
    };
  });
};

const willEnter = () => ({
  height: 0,
  width: 0,
  opacity: 0,
});

const willLeave = () => ({
  height: spring(0),
  opacity: spring(0),
});

const BoxListTransition = ({ boxes, boxSize, ...otherProps }) => (
  <TransitionMotion
    defaultStyles={getDefaultStyles(boxes)}
    styles={getStyles(boxes, boxSize)}
    willLeave={willLeave}
    willEnter={willEnter}
  >
    {boxStyles => (
      <div style={styles.div}>
        {boxStyles.map(({ key, style, data }) => (
          <Box key={key} style={style} {...data} {...otherProps} />
        ))}
      </div>
    )}
  </TransitionMotion>
);

BoxListTransition.propTypes = {
  boxes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BoxListTransition;
