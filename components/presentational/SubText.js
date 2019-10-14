import { StyleSheet, Text } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import R from '../../styles/index';

const SubText = (props) => (
  <Text style={styles.subText} {...props}/>
);

SubText.Proptypes = {
  children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
  subText: {
    fontSize: R.fontSizes.normal,
    color: R.colors.gray,
  },
});

export default SubText;