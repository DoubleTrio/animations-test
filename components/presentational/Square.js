import React from 'react';
import { View, StyleSheet } from 'react-native';
import { moderateScale } from '../../styles/scale';
import PropTypes from 'prop-types';

export default Square = ({ color, size }) => (
  <View 
    style={[styles.square, {
      backgroundColor: color, 
      width: moderateScale(size),
    }]}
  />
);

Square.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  square: {
    aspectRatio: 1,
  },
});