import React, { Component } from 'react';

const styles = {
  div: { width: '100%', height: '100%' },
};

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
    return <div style={styles.div}>{children}</div>;
  }
}
