import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;

export default class KeyboardController extends Component {
  componentWillMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    const { onEscape, onEnter } = this.props;

    switch (event.keyCode) {
      case ESCAPE_KEY:
        onEscape();
        break;
      case ENTER_KEY:
        onEnter();
        break;
      default:
        return;
    }
  };

  render() {
    const { children } = this.props;
    return <div />;
  }
}

KeyboardController.propTypes = {
  onEscape: PropTypes.func.isRequired,
  onEnter: PropTypes.func.isRequired,
};
