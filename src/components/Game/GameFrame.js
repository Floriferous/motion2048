import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SettingsContainer from '../../containers/SettingsContainer';
import colors from '../../config/colors';

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
  };

  render() {
    console.log(this.props);
    return (
      <div id="gameFrame" style={styles.div}>
        {this.props.children}
      </div>
    );
  }
}

const styles = {
  div: {
    flex: 1,
    position: 'relative',
    margin: 32,
    background: colors.white,
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
  },
};

GameFrame.propTypes = {
  onChangeSetting: PropTypes.func.isRequired,
};

export default SettingsContainer(GameFrame);
