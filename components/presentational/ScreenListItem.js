import React, { memo } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import R from '../../styles/index';
import { AntDesign } from '@expo/vector-icons';
import TitleText from './TitleText';
import SubText from './SubText';

const ScreenListItem = ({ navigateToScreen, routeName, title, subText }) => {  
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={() => navigateToScreen(routeName, { title })}
      activeOpacity={0.6}
    >
      <View>
        <TitleText>{title}</TitleText>
        <SubText>{subText}</SubText>
      </View>
      <AntDesign
        name={'rightcircleo'}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
}

ScreenListItem.propTypes = {
  navigateToScreen: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  routeName: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    padding: R.spacing.itemPadding,
    flexDirection: 'row',
  },

  icon: {
    alignSelf: 'center',
    position: 'absolute',
    right: 20,
    color: R.colors.gray,
    fontSize: R.fontSizes.icon,
  },
});

export default ScreenListItem;