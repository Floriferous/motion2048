import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GameContainer from '../../containers/GameContainer';
import KeyboardController from '../../components/KeyboardController';
import BoxList from '../../components/BoxList';
import Score from '../../components/Score';
import SettingsModal from '../../components/SettingsModal';
import Instructions from './Instructions';
import colors from '../../config/colors';
import constants from '../../config/constants';
import GameFrame from './GameFrame';
import './Game.css';

const styles = {
  main: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    background: colors.background,
    position: 'relative',
    overflow: 'hidden',
  },
};

class GameScreen extends Component {
  setScore = () => {
    const { onSetScore, boxes } = this.props;
    onSetScore(boxes.length && boxes.map(box => box.value).reduce((a, b) => a + b));
  };

  handleAddBox = () => {
    const {
      boxes, onAddBox, onGameEnd, score,
    } = this.props;
    if (boxes.length < constants.BOXES_PER_ROW * constants.BOXES_PER_ROW) {
      onAddBox();
      return true;
    }
    onGameEnd(score);
    return false;
  };

  handleSetDirection = (direction) => {
    const { onSetDirection } = this.props;
    onSetDirection(direction);

    // Wrap it in timeout, to wait for next props
    // If setDirection removes a box this will take it into account
    setTimeout(() => {
      if (this.handleAddBox()) {
        this.setScore();
      }
    }, 0);
  };

  render() {
    const {
      boxes, score, onGameEnd, settings: { modalIsOpen },
    } = this.props;

    return (
      <main style={styles.main} className="animated fadeIn">
        <KeyboardController
          onEscape={modalIsOpen ? () => {} : () => onGameEnd(score)}
          onEnter={this.handleAddBox}
          onArrow={this.handleSetDirection}
        />
        <Score score={score} />
        <SettingsModal />
        <GameFrame onClickTriangle={this.handleSetDirection}>
          <BoxList boxes={boxes} {...this.props} />
        </GameFrame>
        <Instructions
          onGameEnd={() => onGameEnd(score)}
          onAddBox={this.handleAddBox}
        />
      </main>
    );
  }
}

GameScreen.propTypes = {
  boxes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAddBox: PropTypes.func.isRequired,
  onGameEnd: PropTypes.func.isRequired,
  onSetDirection: PropTypes.func.isRequired,
};

export default GameContainer(GameScreen);
