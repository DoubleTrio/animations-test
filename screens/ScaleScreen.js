import React, { useEffect } from 'react';
import { Animated, View, StyleSheet, Text } from 'react-native';

export default function ScaleScreen({ navigation }) {
  const { goBack } = navigation;
  const upValue = new Animated.Value(0);
  return (
    <View style={styles.container}>
      <Text>ScaleScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});