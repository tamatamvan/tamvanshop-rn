import React, { Component } from 'react';
import { 
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';

import { connect } from 'react-redux';

class ShopingCart extends Component {
  render() {
    const { cartItems, total } = this.props;
    return (
      <View style={ styles.container }>
        <Text style={ styles.sectionTitle }>Shopping Cart</Text>
        <FlatList
         style={{ flexGrow: 0 }}
         data={ cartItems }
         renderItem={
          ({ item }) => (
            <View style={{
              flex: 1,
              paddingTop: 4,
              paddingBottom: 4,
              marginTop: 4,
              marginBottom: 4,
              flexDirection: 'row',
              backgroundColor: '#fff'
            }}>
              <Image source={{ uri: item.image }} 
               style={{ 
                width: 75,
                height: 75,
               }}
              />
              <View style={{
                paddingLeft: 8,
                paddingRight: 8,
              }}>
                <Text style={{ 
                  fontSize: 16,
                  fontWeight: 'bold'
                }}>
                  { item.name } - US${ item.price } x { item.qty }
                </Text>
                <Text>Subtotal: US${ item.subtotal }</Text>
              </View>
            </View>
          )
        }
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