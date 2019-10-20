import { Dimensions } from 'react-native';
import Colors from './Colors';
import FontSizes from './FontSizes';
import Fonts from './Fonts';
import Spacings from './Spacings';
import { moderateScale } from './scale';

const { height, width } = Dimensions.get('window');

const R = {
  ...Colors,
  ...Fonts,
  ...FontSizes,
  ...Spacings,
  circleBorder: moderateScale(50),
  height,
  width,
}

export default R;