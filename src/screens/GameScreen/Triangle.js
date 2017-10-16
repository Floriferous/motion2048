import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Triangle extends Component {
  constructor(props) {
    super(props);
    this.state = { backgroundColor: 'transparent' };
  }

  componentDidMount() {
    const { delay } = this.props;
    setTimeout(() => {
      this.toggleColor(200);
    }, delay);
  }

  getStyles = () => {
    const { side } = this.props;
    const { backgroundColor } = this.state;
    let position;
    switch (side) {
      case 'UP':
        position = { bottom: '50%', right: '50%' };
        break;
      case 'RIGHT':
        position = { bottom: '50%', left: '50%' };
        break;
      case 'DOWN':
        position = { top: '50%', left: '50%' };
        break;
      case 'LEFT':
        position = { top: '50%', right: '50%' };
        break;
      default:
        throw new Error(`invalid side: ${side}`);
    }

    return {
      position: 'absolute',
      width: '100%',
      height: '100%',
      transition: 'background-color 100ms ease',
      backgroundColor,
      ...position,
    };
  };

  toggleColor = duration => {
    this.setState({ backgroundColor: 'rgba(200,200,200, 0.2)' }, () => {
      setTimeout(() => {
        this.setState({ backgroundColor: 'transparent' });
      }, duration);
    });
  };

  handleClick = () => {
    const { side, onClickTriangle } = this.props;
    onClickTriangle(side);
    this.toggleColor(100);
  };

  render() {
    const { side } = this.props;
    return (
      <div
        className={side}
        style={this.getStyles()}
        onClick={this.handleClick}
      />
    );
  }
}

Triangle.propTypes = {
  side: PropTypes.string.isRequired,
  onClickTriangle: PropTypes.func.isRequired,
};
