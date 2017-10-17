import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = {
  div: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
};

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidCatch(error, info) {
    this.setState({ error, info });
  }

  render() {
    const { error, info } = this.state;
    const { children } = this.props;

    if (error) {
      return (
        <div style={styles.div}>
          <h1>Oops, an error crashed everything...</h1>
          <h3>{error}</h3>
          <h4>{info}</h4>
        </div>
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};
