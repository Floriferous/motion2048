import React, { Component } from 'react';
import './css/App.css';
import './css/animate.css';
import MyProvider from './components/MyProvider';
import RootContainer from './containers/RootContainer';

class App extends Component {
  render() {
    return (
      <MyProvider>
        <RootContainer />
      </MyProvider>
    );
  }
}

export default App;
