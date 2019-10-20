import { StyleSheet, Text, Animated } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import withThemeContext from '../../context/ThemeContext/theme';
import R from '../../styles/index';

const TitleText = ({ children, theme }) => {
  return (
    <Animated.Text style={[styles.title, {
      color: theme.secondary
    }]}>
    {children}
    </Animated.Text>
  );
};

TitleText.Proptypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.shape({
    changeTheme: PropTypes.func.isRequired,
    isLightTheme: PropTypes.bool.isRequired,
    palette: PropTypes.shape({
      gray: PropTypes.string.isRequired,
      primary: PropTypes.string,
      primaryOpp: PropTypes.string,
      secondary: PropTypes.string,
      secondaryOpp: PropTypes.string,
    }),
  }),
};

const styles = StyleSheet.create({
  title: {
    fontSize: R.fontSizes.title,
  },
});

export default withThemeContext(TitleText);