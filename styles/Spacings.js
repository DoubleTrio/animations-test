import { moderateScale } from './scale';

const m = moderateScale(12);

const Spacings = {
  spacing: {
    s: moderateScale(3),
    verticalPadding: m,
    largeSpace: moderateScale(20),
    itemPadding: m,    
  },
};

export default Spacings;