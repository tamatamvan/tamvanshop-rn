import React, { Component } from 'react';
import { 
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

class ShopingCart extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.sectionTitle }>Ini Shopping Cart</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  sectionTitle: {
    fontSize: 24,
  },
});

export default ShopingCart;