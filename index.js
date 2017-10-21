// index.ios.js
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { ARKit } from 'react-native-arkit';
export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ARKit
        style={{ flex: 1 }}
        debug
        planeDetection
        lightEstimation
      >   
        <ARKit.Pyramid
          pos={{ x: 0.2, y: 0.15, z: 0 }}
          shape={{ width: 0.5, height: 0.5, length: 0.5 }}
        />
      </ARKit>
      </View>
    );
  }
}
AppRegistry.registerComponent('shARe', () => App);