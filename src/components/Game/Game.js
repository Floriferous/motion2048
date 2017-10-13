import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import KeyboardController from '../KeyboardController';
import BoxList from '../BoxList';

const styles = {
  main: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    background: '#3e739e',
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
    </main>
  );
};

Game.propTypes = {};

export default connect()(Game);
