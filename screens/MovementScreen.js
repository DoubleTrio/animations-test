import React, { useEffect, useRef, useState } from 'react';
import { Animated, View, StyleSheet, Text } from 'react-native';
import Square from '../components/presentational/Square';
import R from '../styles/index';
import Row from '../components/presentational/Row';

export default function MovementScreen({ navigation }) {
  const { goBack } = navigation;
  const upValue = new Animated.Value(0)
  const leftValue = new Animated.Value(0);
  const [isHidden, setHidden] = useState(true)

  const _start = () => {
    Animated.parallel([
      Animated.timing(upValue, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(leftValue, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start();
  }
  
  return (
    <View style={styles.container}>
      <Text onPress={_start}>MovementScreen</Text>
      <Animated.View style={[ 
        styles.row, {
        transform: [
          {
            translateY: upValue.interpolate({
              inputRange: [0, 1],
              outputRange: [100, 0]
            }),
          }
        ]
      }
      ]}>
        <Square size={100} color={R.colors.blue}/>
        <Square size={100} color={R.colors.green}/>
      </Animated.View>
      <Animated.View style={[ 
        styles.row, {
        transform: [
          {
            translateX: leftValue.interpolate({
              inputRange: [0, 1],
              outputRange: [100, 0]
            }),
          }
        ]
      }
      ]}>
        <Square size={100} color={R.colors.purple}/>
        <Square size={100} color={R.colors.yellow}/>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },

  row: {
    flexDirection: 'row',
  }
});