import {StyleSheet} from 'react-native';

import {COLORS, SIZES} from '../../constants/theme';

export default StyleSheet.create({
  card: {
    padding: SIZES.padding,
    borderRadius: SIZES.radius,
    marginVertical: SIZES.padding / 2,
    width: SIZES.width / 2 - 15,
    backgroundColor: COLORS.lightGray,
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardPrice: {
    fontWeight: 'bold',
    color: COLORS.gray,
  },
  cardImage: {
    marginBottom: SIZES.padding / 2,
    borderRadius: SIZES.radius,
    alignSelf: 'center',
    width: SIZES.width / 2 - 30,
    height: 200,
  },
  cardInStock: {
    color: COLORS.danger,
    fontWeight: 'bold',
  },
});
