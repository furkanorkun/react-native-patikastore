import React from 'react';
import {Text, View, StyleSheet, TextInput, FlatList} from 'react-native';

import DATA from './data';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PATIKASTORE</Text>
      <TextInput placeholder="Ara..." style={styles.input} />
      <FlatList data= {DATA} renderItem={} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  title: {
    fontWeight: '700',
    color: 'purple',
    fontSize: 36,
  },
  input: {
    borderRadius: 10,
    backgroundColor: 'lightgray',
    padding: 10,
  },
});

export default App;
