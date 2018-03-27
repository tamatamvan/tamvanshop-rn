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
      <View style={ styles.itemCard}>
        <Image source={{ uri: item.image }} 
         style={ styles.imageSize }
        />
        <View style={ styles.itemInfo }>
          <Text style={ styles.item }>
            { item.name } - US${ item.price } x { item.qty }
          </Text>
          <Text>Subtotal: US${ item.subtotal }</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemCard: {
    flex: 1,
    paddingTop: 4,
    paddingBottom: 4,
    marginTop: 4,
    marginBottom: 4,
    flexDirection: 'row',
    backgroundColor: '#fff'
  },
  imageSize: { 
    width: 75,
    height: 75,
  },
  itemInfo: {
    paddingLeft: 8,
    paddingRight: 8,
  },
  itemTitle: { 
    fontSize: 16,
    fontWeight: 'bold'
  },
})

export default ItemShoppingCart;