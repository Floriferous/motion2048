import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GameContainer from '../../containers/GameContainer';
import KeyboardController from '../KeyboardController';
import BoxList from '../BoxList';
import Score from '../Score';
import Instructions from '../Instructions';
import colors from '../../config/colors';
import constants from '../../config/constants';
import GameFrame from './GameFrame';

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

class Game extends Component {
  handleAddBox = () => {
    const { boxes, onAddBox, onGameEnd, score } = this.props;
    if (boxes.length < constants.BOXES_PER_ROW * constants.BOXES_PER_ROW) {
      onAddBox();
      return true;
    } else {
      onGameEnd(score);
      return false;
    }
  };

  handleSetDirection = direction => {
    const { onSetDirection } = this.props;
    onSetDirection(direction);
    this.handleAddBox();
    this.setScore();
  };

  setScore = () => {
    const { onSetScore, boxes } = this.props;
    onSetScore(
      boxes.length && boxes.map(box => box.value).reduce((a, b) => a + b),
    );
  };

  render() {
    const { boxes, score, onGameEnd, ...otherProps } = this.props;

    return (
      <main style={styles.main} className="animated fadeIn">
        <KeyboardController
          onEscape={() => onGameEnd(score)}
          onEnter={this.handleAddBox}
          onArrow={this.handleSetDirection}
        />
        <GameFrame onClickTriangle={this.handleSetDirection}>
          <BoxList boxes={boxes} {...otherProps} />
        </GameFrame>
        <Score score={score} />
        <Instructions />
      </main>
    );
  }
}

Game.propTypes = {
  boxes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAddBox: PropTypes.func.isRequired,
  onGameEnd: PropTypes.func.isRequired,
  onSetDirection: PropTypes.func.isRequired,
};

export default GameContainer(Game);
