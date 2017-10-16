import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidCatch(error, info) {
    console.log('catched!');
    this.setState({ error, info });
  }

  render() {
    const { error, info } = this.state;
    const { children } = this.props;

    if (error) {
      return <div style={styles.div}>MyComponent</div>;
    }

    return children;
  }
}

const styles = {
  div: {
    width: '100%',
    height: '100%',
  },
};
