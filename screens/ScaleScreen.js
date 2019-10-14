import React, { useEffect, useRef } from 'react';
import { Animated, View, StyleSheet, Text } from 'react-native';
import R from '../styles/index';
import { moderateScale } from '../styles/scale';
import usePulse from '../hooks/pulse';
import TopPaddingWrapper from '../components/presentational/TopPaddingWrapper';


export default function ScaleScreen({ navigation }) {

  const { goBack } = navigation;
  const xlScale = usePulse(1.8, 0.2);
  const largeScale = usePulse(1.6, 0.4);
  const scale = usePulse(1.4, 0.6);
  const smallScale = usePulse(1.2, 0.8);
  
  return (
    <TopPaddingWrapper>
      <View style={styles.container}>
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
    </TopPaddingWrapper>
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