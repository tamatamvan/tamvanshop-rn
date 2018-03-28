import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { removeFromCart } from '../store/carts/carts.actions';

class ItemShoppingCart extends Component {
  render() {
    const { item, removeFromCart } = this.props;
    return (
      <View style={ styles.itemCard}>
        <Image source={{ uri: item.image }} 
         style={ styles.imageSize }
        />
        <View style={ styles.itemInfo }>
          <Text style={ styles.itemTitle }>
            { item.name } - US${ item.price } x { item.qty }
          </Text>
          <Text>Subtotal: US${ item.subtotal }</Text>
        </View>
        <TouchableHighlight style={ styles.deleteButton }
         onPress={ () => removeFromCart(item.id) }>
          <MaterialIcons name='delete' size={32} color='#F44336'/>
        </TouchableHighlight>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  removeFromCart
}, dispatch);

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
    flex: 1,
  },
  itemTitle: { 
    fontSize: 16,
    fontWeight: 'bold'
  },
  deleteButton: { 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
  },
})

export default connect(null, mapDispatchToProps)(ItemShoppingCart);