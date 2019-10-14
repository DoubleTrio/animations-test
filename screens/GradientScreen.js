import React, { useEffect, useRef } from 'react';
import { Animated, View, StyleSheet, Text } from 'react-native';
import R from '../styles/index';

export default function GradientScreen({ navigation }) {

  const { goBack } = navigation;
  
  return (
    <View style={styles.container}>
      <Text>hwaw</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});