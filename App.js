/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import restRequest from './restRequestClient'
import Link from 'link-react';
import { Table } from 'semantic-ui-react';
import awsmobile from './configuration/aws-exports';
const cloud_logic_array = JSON.parse(awsmobile.aws_cloud_logic_custom)
const endPoint = cloud_logic_array[0].endpoint
const apiRestaurantUri = endPoint + "/items/restaurants";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class App extends Component {
  state = {
    data: []
  }
  fetch = () => {
    let requestParams = {
      method: 'GET',
      url: apiRestaurantUri
    }
    this.restResponse = restRequest(requestParams)
      .then(resp => {
          this.setState({
            data: resp
        });

      })
    .catch (function(error){
      alert(error);
  });
}

//render logic below{
render() {
    return (
      <div className="App">
        <Link onClick={this.fetch}>
          List restaurants
        </Link>
        <div>
          <div>
        {(
      <Table>
          <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Address</Table.HeaderCell>
            <Table.HeaderCell>Contact</Table.HeaderCell>
            <Table.HeaderCell>Rating</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.state.data.map((data, idx) =>
            <Table.Row key={idx}>
              <Table.Cell>{data.name}</Table.Cell>
              <Table.Cell>{data.address}</Table.Cell>
              <Table.Cell>{data.phone}</Table.Cell>
              <Table.Cell>{data.rating}</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    )}
    </div>
        </div>
      </div>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
