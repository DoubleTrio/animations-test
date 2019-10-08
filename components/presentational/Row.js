import { View, StyleSheet } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
);

Row.Proptypes = {
  children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default Row;