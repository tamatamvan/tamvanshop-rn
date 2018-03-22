import React, { Component } from 'react';
import { View, Text, FlatList, Image, Button, StyleSheet } from 'react-native';

class Home extends Component {
  state = {
    products: [
      { id: 0, name: 'Elephone E-1 in Ear', price: 700, image: 'https://doki.co.id/image/cache/data/Handphone/Motorola/Moto%20z/Motorola-moto-z-black-500x500.jpg' },
      { id: 0, name: 'JBL Wireless Earphone', price: 500, image: 'https://doki.co.id/image/cache/data/Handphone/xiaomi/Note%205A/Redmi-note-5a-Grey-500x500.jpg' },
      { id: 0, name: 'Xiaomi Mi A1', price: 1000, image: 'https://doki.co.id/image/cache/data/Accessories/Tempered Glass/Tempered-Samsung-Galaxy-s8-s8+-500x500h.jpg' },
      { id: 0, name: 'Samsung Galaxy S8', price: 7000, image: 'https://doki.co.id/image/cache/data/Handphone/Elephone/s1/Elephone-s1-black-doki-500x500.jpg' },
    ]
  }

  static navigationOptions = {
    headerTitle: 'TamvanShop',
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.sectionTitle }>Product List</Text>
        <FlatList data={ this.state.products }
         renderItem={({item}) => (
          <View style={ styles.itemCard }>
            <Image source={{ uri: item.image }} style={{ width: 150, height: 150 }}/>
            <View style={ styles.productDetail }>
              <Text style={ styles.productTitle }>{ item.name }</Text>
              <Text style={ styles.productPrice }>Price: US${ item.price }</Text>
            </View>
          </View>
         )}/>
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
  itemCard: {
    flex: 1,
    marginTop: 4,
    marginBottom: 4,
    padding: 8,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  productDetail: {
    marginLeft: 2,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
  }
});

export default Home;