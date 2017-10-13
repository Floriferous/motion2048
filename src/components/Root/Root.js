import React from 'react';
import PropTypes from 'prop-types';
import GameContainer from '../../containers/GameContainer';

const styles = {
  div: {
    height: '100%',
    width: '100%',
    background: '#3e739e',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const Root = ({ rootState, onGameStart, onGameExit }) => {
  if (rootState === 'game') {
    return <GameContainer onGameExit={onGameExit} />;
  }

  return (
    <div style={styles.div}>
      {rootState} <button onClick={onGameStart}>Start!</button>
    </div>
  );
};

Root.propTypes = {};

export default Root;
