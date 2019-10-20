import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { moderateScale } from '../../styles/scale';
import R from '../../styles/index';
import withThemeContext from '../../context/ThemeContext/theme';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const ThemeButton = ({ theme }) => {
  const { palette } = theme;
  return (
    <TouchableOpacity 
      style={[styles.btn, {
        backgroundColor: palette.primaryOpp,
      }]} 
      onPress={theme.changeTheme}
    >
      <MaterialCommunityIcons 
        size={moderateScale(30)}
        name={'theme-light-dark'}
        color={palette.primary}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: moderateScale(50), 
    aspectRatio: 1, 
    borderRadius: R.circleBorder, 
    borderWidth: 1, 
    position: 'absolute', 
    bottom: R.height / 20, 
    right: R.width / 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

ThemeButton.propTypes = {
  theme: PropTypes.shape({
    changeTheme: PropTypes.func.isRequired,
    palette: PropTypes.shape({
      gray: PropTypes.string.isRequired,
      primary: PropTypes.string,
      primaryOpp: PropTypes.string,
      secondary: PropTypes.string,
      secondaryOpp: PropTypes.string,
    }),
  }),
}

export default withThemeContext(ThemeButton);