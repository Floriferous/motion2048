import React from 'react';
import PropTypes from 'prop-types';
import { TransitionMotion, spring } from 'react-motion';

import Box from '../Box';

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
    style: { height: 0, width: 0, opacity: 0 },
  }));

const getStyles = (boxes, boxSize, springValues) =>
  boxes.map(box => ({
    ...box,
    style: {
      height: spring(boxSize, springValues),
      width: spring(boxSize, springValues),
      opacity: spring(1, springValues),
    },
  }));

const willEnter = () => ({ height: 0, width: 0, opacity: 0 });

const willLeave = () => ({
  height: spring(0),
  width: spring(0),
  opacity: spring(0),
});

const BoxListTransition = ({
  boxes,
  boxSize,
  stiffness,
  damping,
  ...otherProps
}) => (
  <TransitionMotion
    defaultStyles={getDefaultStyles(boxes)}
    styles={getStyles(boxes, boxSize, { stiffness, damping })}
    willLeave={willLeave}
    willEnter={willEnter}
  >
    {boxStyles => (
      <div style={styles.div}>
        {boxStyles.map(({ key, style, data }) => (
          <Box
            key={key}
            style={style}
            stiffness={stiffness}
            damping={damping}
            {...data}
            {...otherProps}
          />
        ))}
      </div>
    )}
  </TransitionMotion>
);

BoxListTransition.propTypes = {
  boxes: PropTypes.arrayOf(PropTypes.object).isRequired,
  boxSize: PropTypes.number.isRequired,
  stiffness: PropTypes.number.isRequired,
  damping: PropTypes.number.isRequired,
};

export default BoxListTransition;
