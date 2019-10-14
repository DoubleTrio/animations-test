import { StyleSheet, Text } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import R from '../../styles/index';

const MainText = (props) => (
  <Text style={[styles.mainText, props.style]} {...props}/>
);

MainText.Proptypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

const styles = StyleSheet.create({
  mainText: {
    fontFamily: R.fonts.normal,
  },
});

export default MainText;