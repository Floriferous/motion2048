import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class WindowSize extends Component {
  constructor(props) {
    super(props);
    this.state = { windowWidth: 0, windowHeight: 0 };
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    });
  };

  render() {
    const { windowWidth, windowHeight } = this.state;
    const children = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { windowWidth, windowHeight }),
    );
    return <div style={{ flex: 1 }}>{children}</div>;
  }
}

WindowSize.propTypes = {};
