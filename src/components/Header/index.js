import React from 'react';
import {View, Text, TextInput} from 'react-native';

import styles from './style';

const Header = ({handleSearch}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>PATIKASTORE</Text>
      <TextInput
        onChangeText={handleSearch}
        placeholder="Ara..."
        style={styles.input}
      />
    </View>
  );
};

export default Header;
