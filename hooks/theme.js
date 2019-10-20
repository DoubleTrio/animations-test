import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

const useTheme = (isLightTheme) => {
  const themeAnimation = useRef(new Animated.Value(0)).current;
  const changeTheme = () => {
    Animated.timing(themeAnimation, {
      toValue: isLightTheme ? 0 : 1,
      duration: 1000,
    }).start();
  }
  
  // useEffect(() => {
  //   changeTheme();
  // }, [])
  changeTheme();
  return themeAnimation;
}
  
export default useTheme;