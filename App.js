import React from 'react';
import {
  TouchableHighlight,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './src/store';

import { MaterialIcons } from '@expo/vector-icons';

import Home from './src/screens/Home';
import Cart from './src/screens/ShopingCart';

const RootStack = StackNavigator({
  Home: {
    screen: Home,
  },
  Cart: {
    screen: Cart,
  },
}, {
  initialRouteName: 'Home',
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
      backgroundColor: '#2962FF',
    },
    headerTintColor: '#fff',
    headerRight: (
      <TouchableHighlight onPress={ () => navigation.navigate('Cart') }>
        <MaterialIcons name='shopping-cart' size={32} color='#fff'/>
      </TouchableHighlight>
    ),
  }),
  headerMode: 'screen',
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
