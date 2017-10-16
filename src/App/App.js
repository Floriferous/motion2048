import React, { Component } from 'react';
import '../css/App.css';
import '../css/animate.css';
import MyProvider from '../components/MyProvider';
import Root from './Root';

class App extends Component {
  render() {
    return (
      <MyProvider>
        <Root />
      </MyProvider>
    );
  }
}

export default App;
