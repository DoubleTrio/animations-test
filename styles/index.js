import Colors from './Colors';
import FontSizes from './FontSizes';
import Fonts from './Fonts';
import Spacings from './Spacings';
import { moderateScale } from './scale';
const R = {
  ...Colors,
  ...Fonts,
  ...FontSizes,
  ...Spacings,
  border: moderateScale(1),
}

export default R;