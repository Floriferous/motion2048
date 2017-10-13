import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import KeyboardController from '../KeyboardController';
import BoxList from '../BoxList';
import Score from '../Score';
import Instructions from '../Instructions';
import colors from '../../config/colors';
import constants from '../../config/constants';

const styles = {
  main: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    background: colors.background,
    position: 'relative',
  },
};

// FIXME should end game as well on setDirection
const handleAddBox = (boxCount, onAddBox, onGameEnd) => {
  if (boxCount < constants.BOXES_PER_ROW * constants.BOXES_PER_ROW) {
    onAddBox();
  } else {
    onGameEnd();
  }
};

const Game = ({
  boxes,
  onAddBox,
  onGameEnd,
  onSetDirection,
  ...otherProps
}) => {
  return (
    <main style={styles.main}>
      <KeyboardController
        onEscape={onGameEnd}
        // this will create a conflict when boxes are deleted
        onEnter={() => handleAddBox(boxes.length, onAddBox, onGameEnd)}
        onArrow={arrow => onSetDirection(arrow)}
      />
      <BoxList boxes={boxes} {...otherProps} />
      <Score score={0} />
      <Instructions />
    </main>
  );
};

Game.propTypes = {
  boxes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAddBox: PropTypes.func.isRequired,
  onGameEnd: PropTypes.func.isRequired,
  onSetDirection: PropTypes.func.isRequired,
};

export default connect()(Game);
