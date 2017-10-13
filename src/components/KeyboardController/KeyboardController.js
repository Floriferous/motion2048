import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;

const ARROW_LEFT = 37;
const ARROW_UP = 38;
const ARROW_RIGHT = 39;
const ARROW_DOWN = 40;

export default class KeyboardController extends Component {
  componentWillMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    const { onEscape, onEnter, onArrow } = this.props;

    switch (event.keyCode) {
      case ESCAPE_KEY:
        onEscape();
        break;
      case ENTER_KEY:
        onEnter();
        break;
      case ARROW_LEFT:
        onArrow('LEFT');
        break;
      case ARROW_UP:
        onArrow('UP');
        break;
      case ARROW_RIGHT:
        onArrow('RIGHT');
        break;
      case ARROW_DOWN:
        onArrow('DOWN');
        break;
      default:
        return;
    }
  };

  render() {
    return <div />;
  }
}

KeyboardController.propTypes = {
  onEscape: PropTypes.func,
  onEnter: PropTypes.func,
  onArrow: PropTypes.func,
};

KeyboardController.defaultProps = {
  onEscape: () => {},
  onEnter: () => {},
  onArrow: () => {},
};
