import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import KeyboardController from '../KeyboardController';

const styles = {
  main: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    background: '#3e739e',
  },
  box: {
    height: 40,
    width: 40,
    margin: 8,
    background: '#f8f9fa',
  },
};

const Game = ({ boxes, onAddBox, onGameExit }) => {
  return (
    <main style={styles.main}>
      <KeyboardController
        onEscape={onGameExit}
        // this will create a conflict when boxes are deleted
        onEnter={() => onAddBox(boxes.length)}
      />
      {boxes.map(box => <div style={styles.box} key={box.id} />)}
    </main>
  );
};

Game.propTypes = {};

export default connect()(Game);
