import React, { useEffect, useRef } from 'react';
import { Animated, View, StyleSheet, Text } from 'react-native';
import R from '../styles/index';
import { moderateScale } from '../styles/scale';
import usePulse from '../hooks/pulse';
import withThemeContext from '../context/ThemeContext/theme';


function ScaleScreen({ theme }) {

  const xlScale = usePulse(1.8, 0.2);
  const largeScale = usePulse(1.6, 0.4);
  const scale = usePulse(1.4, 0.6);
  const smallScale = usePulse(1.2, 0.8);
  
  return (
    <View style={[styles.container, { backgroundColor: theme.palette.primary}]}>
      <Animated.View style={[styles.box, { 
        transform: [{ scale: xlScale }],
        backgroundColor: R.colors.purple,
      }]}/>
      <Animated.View style={[styles.box, { 
        transform: [{ scale: largeScale }],
        backgroundColor: R.colors.yellow,
      }]}/>
      <Animated.View style={[styles.box, { 
        transform: [{ scale }],
        backgroundColor: R.colors.green,
      }]}/>
      <Animated.View style={[styles.box, { 
        transform: [{ scale: smallScale }],
        backgroundColor: R.colors.blue,
      }]}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  box: {
    width: moderateScale(100), 
    aspectRatio: 1, 
  }
});

export default withThemeContext(ScaleScreen);