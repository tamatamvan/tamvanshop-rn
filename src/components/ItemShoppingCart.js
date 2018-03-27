import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';

class ItemShoppingCart extends Component {
  render() {
    const { item } = this.props;
    return (
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
    );
  }
}

export default ItemShoppingCart;