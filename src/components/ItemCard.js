import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, Button } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addToCart } from '../store/carts/carts.actions';

const ItemCard = (props) => {
  const { item, addToCart } = props;

  return (
    <View style={ styles.itemCard }>
      <Image source={{ uri: item.image }} style={{ width: 150, height: 150 }}/>
      <View style={ styles.productDetail }>
        <Text style={ styles.productTitle }>{ item.name }</Text>
        <Text style={ styles.productPrice }>Price: US${ item.price }</Text>
        {/* <TextInput value='0'/> */}
        {/* <View> */}
          <Button title='Add to Cart'
           onPress={ () => addToCart(item) }
          />
        {/* </View> */}
      </View>
    </View>
  );
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addToCart
}, dispatch);

const styles = StyleSheet.create({
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
    flex: 1,
    justifyContent: 'flex-start',
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
  },
})

export default connect(null, mapDispatchToProps)(ItemCard);