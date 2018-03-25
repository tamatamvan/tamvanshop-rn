import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './src/store';

import Home from './src/screens/Home';

const RootStack = StackNavigator({
  Home: {
    screen: Home,
  },
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#2962FF',
    },
    headerTintColor: '#fff',
  },
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <RootStack />
      </Provider>
    );
  }
}
