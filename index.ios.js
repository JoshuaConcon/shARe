// index.ios.js
import React, { Component } from 'react';
import { AppRegistry, View, TouchableOpacity } from 'react-native';
import { ARKit } from 'react-native-arkit';
export default class App extends Component {

  _onPressAR () {
    console.log("AR Object Pressed!")
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={this._onPressAR}>
          <ARKit
          style={{ flex: 1 }}
          debug // debug mode will show feature points detected and 3D axis
          planeDetection // turn on plane detection
          lightEstimation // turn on light estimation
          >
            <ARKit.Pyramid
            pos={{ x: 0, y: 0, z: 0 }}
            shape={{ width: 0.5, height: 0.5, length: 0.5 }} />
          </ARKit>
        </TouchableOpacity>
      </View>
    );
  }
}
AppRegistry.registerComponent('shARe', () => App);
