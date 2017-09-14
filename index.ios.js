
import React, { Component } from 'react';
import {  AppRegistry } from 'react-native';

import App from './Components/App.js';


export default class ReactNavi extends Component {
  state = {  }
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('ReactNavi', () => ReactNavi);
