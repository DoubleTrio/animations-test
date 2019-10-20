import React, { useState, useRef, useContext } from 'react';
import { ThemeContext } from '../types';
import R from '../../styles/index';
import { Animated } from 'react-native';
import useTheme from '../../hooks/theme';

const neutral = {
  gray: R.colors.gray,
}

const lightPalette = {
  primary: R.colors.light,
  secondary: R.colors.lightMode,
  primaryOpp: R.colors.black,
  secondaryOpp: R.colors.darkMode,
}

const darkPalette = {
  primary: R.colors.darkMode,
  secondary: R.colors.black,
  primaryOpp: R.colors.light,
  secondaryOpp: R.colors.lightMode,
}

function AppContext({ children }) {
  const [isLightTheme, changeTheme] = useState(true);

  const primaryTransition = useTheme(isLightTheme);
  const secondaryTransition = useTheme(isLightTheme);


  const palette = {
    ...neutral,
    ...isLightTheme ? lightPalette : darkPalette, 
  }

  const primary = primaryTransition.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [lightPalette.primary, neutral.gray, darkPalette.primary],
  });

  const secondary = secondaryTransition.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [darkPalette.primary, neutral.gray, lightPalette.primary],
  });

  const themeObj = {
    changeTheme: () => {
      changeTheme(!isLightTheme);
    },
    palette,
    primary,
    secondary,
  }
  
  return (
    <ThemeContext.Provider value={themeObj}>
      {children}
    </ThemeContext.Provider>
  );
}

export default AppContext;