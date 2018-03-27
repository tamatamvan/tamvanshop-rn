import React, { Component } from 'react';
import { 
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

import ItemShopingCart from '../components/ItemShoppingCart';

import { connect } from 'react-redux';

class ShopingCart extends Component {

  _keyExtractor = (item, idx) => item.id;

  _renderItem = ({ item }) => (
    <ItemShopingCart item={ item }/>
  );

  render() {
    const { cartItems, total } = this.props;
    return (
      <View style={ styles.container }>
        <Text style={ styles.sectionTitle }>Shopping Cart</Text>
        <FlatList
         style={{ flexGrow: 0 }}
         data={ cartItems }
         keyExtractor={ this._keyExtractor }
         renderItem={ this._renderItem }
        />
        <Text>Total: { total }</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.carts.items,
  total: state.carts.total,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  sectionTitle: {
    fontSize: 24,
  },
});

export default connect(mapStateToProps)(ShopingCart);