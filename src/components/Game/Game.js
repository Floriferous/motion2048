import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import KeyboardController from '../KeyboardController';
import BoxList from '../BoxList';
import Score from '../Score';
import Instructions from '../Instructions';
import colors from '../../config/colors';

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

const Game = ({ boxes, onAddBox, onGameEnd }) => {
  return (
    <main style={styles.main}>
      <KeyboardController
        onEscape={onGameEnd}
        // this will create a conflict when boxes are deleted
        onEnter={() => onAddBox(boxes.length)}
      />
      <BoxList boxes={boxes} />
      <Score score={0} />
      <Instructions />
    </main>
  );
};

Game.propTypes = {
  boxes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAddBox: PropTypes.func.isRequired,
  onGameEnd: PropTypes.func.isRequired,
};

export default connect()(Game);
