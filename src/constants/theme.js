import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  white: 'white',
  purple: 'purple',
  gray: 'gray',
  danger: 'red',
  lightGray: 'lightgray',
};

export const SIZES = {
  //global sizes
  radius: 5,
  padding: 10,
  width,
  height,

  //font sizes
  body: 24,
  largeTitle: 36,
};

const appTheme = {COLORS, SIZES};

export default appTheme;
