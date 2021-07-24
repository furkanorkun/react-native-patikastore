import React from 'react';
import {View, Image, Text} from 'react-native';

import styles from './style';
import {SIZES} from '../../constants/theme';

export const Cards = ({item, index}) => {
  return (
    <View style={[styles.card, index % 2 == 0 && {marginRight: SIZES.padding}]}>
      <Image style={styles.cardImage} source={{uri: item.imgURL}} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardPrice}>{item.price}</Text>
      {!item.inStock && <Text style={styles.cardInStock}>STOKTA YOK</Text>}
    </View>
  );
};

export const CardsFooter = () => {
  return <View style={{marginBottom: SIZES.padding * 12}} />;
};
