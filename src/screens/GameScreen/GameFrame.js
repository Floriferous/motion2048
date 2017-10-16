import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SettingsContainer from '../../containers/SettingsContainer';
import colors from '../../config/colors';
import constants from '../../config/constants';
import TouchTriangles from './TouchTriangles';

class GameFrame extends Component {
  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    const { onChangeSetting } = this.props;
    const height = document.getElementById('gameFrame').clientHeight;
    const width = document.getElementById('gameFrame').clientWidth;

    onChangeSetting('gameHeight', height);
    onChangeSetting('gameWidth', width);

    // Multiply max by 0.8 to add some spacing between each box
    const boxToSpaceRatio = 0.9;
    const boxSize = Math.min(
      height * boxToSpaceRatio / constants.BOXES_PER_ROW,
      width * boxToSpaceRatio / constants.BOXES_PER_ROW,
    );
    onChangeSetting('boxSize', Math.round(boxSize));
  };

  render() {
    const { settings: { gameWidth, gameHeight }, onClickTriangle } = this.props;
    return (
      <div id="gameFrame" style={styles.div}>
        <TouchTriangles
          ratio={gameHeight / gameWidth}
          onClickTriangle={onClickTriangle}
        />
        {this.props.children}
      </div>
    );
  }
}

const styles = {
  div: {
    display: 'flex',
    height: '80%',
    position: 'relative',
    margin: 64,
    background: colors.white,
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    borderRadius: 4,
  },
};

GameFrame.propTypes = {
  onChangeSetting: PropTypes.func.isRequired,
};

export default SettingsContainer(GameFrame);
