import React, { Component } from 'react';
import '../css/App.css';
import '../css/animate.css';
import MyProvider from '../components/MyProvider';
import ErrorBoundary from '../components/ErrorBoundary';
import Root from './Root';

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <MyProvider>
          <Root />
        </MyProvider>
      </ErrorBoundary>
    );
  }
}

export default App;
