import React, { useEffect, useRef, useState } from 'react';
import { Animated, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Square from '../components/presentational/Square';
import R from '../styles/index';
import Row from '../components/presentational/Row';
import TopPaddingWrapper from '../components/presentational/TopPaddingWrapper';
import MainText from '../components/presentational/MainText';
import withThemeContext from '../context/ThemeContext/theme';

function MovementScreen({ navigation, theme }) {
  const { goBack } = navigation;
  const leftValue = useRef(new Animated.Value(0)).current;
  const upValue = useRef(new Animated.Value(0)).current;
  const [isInitialPos, setPos] = useState(true);
  
  const _start = () => {
    Animated.sequence([
      Animated.timing(leftValue, {
        toValue: isInitialPos ? 1 : 0,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(upValue, {
        toValue: isInitialPos ? 1 : 0,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start();
    setPos(!isInitialPos)
  }
  
  return (
      <View style={[styles.container, {
        backgroundColor: theme.palette.primary,
      }
      ]}>
        <TouchableOpacity activeOpacity={0.5} onPress={_start}>
          <MainText style={styles.startText}>Toggle Squares</MainText>
        </TouchableOpacity>
        <Animated.View style={[ 
          styles.row, {
          transform: [
            {
              translateX: leftValue.interpolate({
                inputRange: [0, 1],
                outputRange: [500, 0]
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
              translateY: upValue.interpolate({
                inputRange: [0, 1],
                outputRange: [1000, 0]
              }),
            }
          ]
        }
        ]}>
          <Square size={150} color={R.colors.purple}/>
          <Square size={200} color={R.colors.yellow}/>
        </Animated.View>
      </View>
  );
}

MovementScreen.navigationOptions = {
  headerTitle: 'Go Back',
  headerStyle: {
    backgroundColor: R.colors.primaryBlue,
  },
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  row: {
    flexDirection: 'row',
  },

  startText: {
    fontSize: R.fontSizes.xl,
  }
});

export default withThemeContext(MovementScreen);