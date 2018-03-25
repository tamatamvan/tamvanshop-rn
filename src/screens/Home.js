import React, { Component } from 'react';
import { 
  View,
  Text,
  FlatList,
  Image,
  Button,
  TextInput,
  StyleSheet 
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadProducts } from '../store/products/products.actions';

import ItemCard from '../components/ItemCard';

class Home extends Component {
  static navigationOptions = {
    headerTitle: 'TamvanShop',
  }

  _keyExtractor = (item) => `product_${item.id}`;

  _renderItem = ({item}) => (
    <ItemCard item={ item } />
  );

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.sectionTitle }>Product List</Text>
        <FlatList 
          data={ this.props.products }
          renderItem={ this._renderItem }
          keyExtractor={ this._keyExtractor }
        />
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

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loadProducts
}, dispatch);

const mapStateToProps = (state) => ({
  products: state.products
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);