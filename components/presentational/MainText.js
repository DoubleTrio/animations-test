import { StyleSheet, Text } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import R from '../../styles/index';
import withThemeContext from '../../context/ThemeContext/theme';

const MainText = ({ style, theme, children }) => (
  <Text style={[styles.mainText, style, {
    color: theme.palette.primaryOpp,
  }]}>
    {children}
  </Text>
);

MainText.Proptypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
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
};

const styles = StyleSheet.create({
  mainText: {
    fontFamily: R.fonts.normal,
  },
});

export default withThemeContext(MainText);