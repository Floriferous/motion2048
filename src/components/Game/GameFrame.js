import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SettingsContainer from '../../containers/SettingsContainer';

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
      <div id="gameFrame" style={{ flex: 1, position: 'relative', margin: 32 }}>
        {this.props.children}
      </div>
    );
  }
}

GameFrame.propTypes = {
  onChangeSetting: PropTypes.func.isRequired,
};

export default SettingsContainer(GameFrame);
