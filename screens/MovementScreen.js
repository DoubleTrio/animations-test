import React from 'react';
import { Animated, View, StyleSheet, Text } from 'react-native';

export default function MovementScreen() {
  return (
    <View style={styles.container}>
      <Text>MovementScreen</Text>
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