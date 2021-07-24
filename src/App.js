import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header';
import {Cards, CardsFooter} from './components/Cards';

import DATA from './data.json';

const App = () => {
  const [data, setData] = useState(DATA);

  const handleSearch = text => {
    const FilteredProduct = DATA.filter(product => {
      const searchedText = text.toLowerCase();
      const currentProduct = product.title.toLowerCase();

      return currentProduct.includes(searchedText);
    });
    setData(FilteredProduct);
  };

  return (
    <View style={styles.container}>
      <Header handleSearch={handleSearch} />
      <FlatList
        data={data}
        numColumns="2"
        renderItem={Cards}
        ListFooterComponent={CardsFooter}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
});

export default App;
