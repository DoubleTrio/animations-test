import React, { useEffect } from 'react';
import { Animated, View, StyleSheet, TouchableOpacity } from 'react-native';


export default function OpacityScreen({ navigation }) {
  const { goBack } = navigation;
  const fadeAnimation = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,      
    }).start()
  }, [])

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.text, { opacity: fadeAnimation }]}>
        Hello, World!
      </Animated.Text>
      <TouchableOpacity onPress={() => goBack()}>
        <Animated.Text style={[styles.text, { opacity: fadeAnimation }]}>
          Go back
        </Animated.Text>
      </TouchableOpacity>
    </View>
  );
}

OpacityScreen.navigationOptions = {
  header: null,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'dodgerblue',
    height: 100,
  },

  text: {
    color: 'white',
    fontSize: 32,
  },
  
});