import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

const usePulse = (nextVal = 1.2, lastVal = 0.8, duration = 500) => {
  const scale = useRef(new Animated.Value(1)).current;

  const pulse = () => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: nextVal,
        duration,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: lastVal,
        duration,
        useNativeDriver: true,
      }),
    ]).start(() => pulse());
  }
  useEffect(() => {
    pulse();
  }, [])

  return scale;
}

export default usePulse;