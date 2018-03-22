import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './src/screens/Home';

const RootStack = StackNavigator({
  Home: {
    screen: Home,
  },
}, {
  initialRouteName: 'Home'
});

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}
