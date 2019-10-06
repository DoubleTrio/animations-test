import React, { useState } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux'
import * as Font from 'expo-font';
// import { Asset } from 'expo-asset';
import store from './redux/store';
import HomeScreen from './screens/HomeScreen';
import MovementScreen from './screens/MovementScreen';
import OpacityScreen from './screens/OpacityScreen';
import { AppLoading } from 'expo';

const AppContainer = createAppContainer(createStackNavigator(
  {
    HomeScreen,
    MovementScreen,
    OpacityScreen,
  },
  {
    initialRouteName: 'HomeScreen',
    headerLayoutPreset: 'center',
  },
));

export default function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading 
        startAsync={loadResourcesAsync}
        onError={handleError}
        onFinish={setLoadingComplete(true)}   
      />
    );
  } else {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      'montserrat': require('./assets/fonts/Montserrat-Regular.otf'),
      'montserratLight': require('./assets/fonts/Montserrat-Light.otf'),
    }),
  ]);
};

function handleError(error) {
  console.warn(error);
};

