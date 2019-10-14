import { StyleSheet, Text } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import R from '../../styles/index';

const TitleText = (props) => (
  <Text style={styles.title} {...props}/>
);

TitleText.Proptypes = {
  children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
  title: {
    fontSize: R.fontSizes.title,
  },
});

export default TitleText;