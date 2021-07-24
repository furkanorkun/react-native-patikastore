import {StyleSheet} from 'react-native';

import {COLORS, SIZES} from '../../constants/theme';

export default StyleSheet.create({
  header: {
    backgroundColor: COLORS.white,
    marginVertical: SIZES.padding,
  },
  title: {
    fontWeight: '700',
    color: COLORS.purple,
    fontSize: SIZES.largeTitle,
  },
  input: {
    borderRadius: SIZES.radius * 2,
    backgroundColor: COLORS.lightGray,
    padding: SIZES.padding,
  },
});
