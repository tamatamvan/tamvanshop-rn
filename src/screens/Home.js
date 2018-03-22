import React, { Component } from 'react';
import { View, Text, FlatList, Image, Button, StyleSheet } from 'react-native';

class Home extends Component {
  static navigationOptions = {
    headerTitle: 'TamvanShop',
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.sectionTitle }>Product List</Text>
        
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
  }
})

export default Home;