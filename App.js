import React, { useState, useContext, createContext } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux'
import * as Font from 'expo-font';
// import { Asset } from 'expo-asset';
import store from './redux/store';
import R from './styles/index';
import HomeScreen from './screens/HomeScreen';
import MovementScreen from './screens/MovementScreen';
import OpacityScreen from './screens/OpacityScreen';
import ScaleScreen from './screens/ScaleScreen';
import GradientScreen from './screens/GradientScreen';
import SwitchScreen from './screens/SwitchScreen';
import { AppLoading } from 'expo';
import { AppContext } from './context/theme';

const Stack = createStackNavigator(
  {
    HomeScreen,
    MovementScreen,
    OpacityScreen,
    ScaleScreen,
    GradientScreen,
    SwitchScreen,
  },
  {
    initialRouteName: 'HomeScreen',
    defaultNavigationOptions: {
      headerTitleStyle: {
        fontSize: R.fontSizes.header,
      },
      headerTintColor: R.colors.light,
      headerStyle: {
        backgroundColor: R.colors.primaryBlue,
      },
      headerTitle: 'Go Back',
    },
  },
);

const AppContainer = createAppContainer(Stack);

export default function App() {
  [isLoadingComplete, setLoadingComplete] = useState(false)
  if (!isLoadingComplete) {
    return (
      <AppLoading 
        startAsync={loadResourcesAsync}
        onError={handleError}
        onFinish={() => setLoadingComplete(true)}   
      />
    );
  } else {
    return (
      <Provider store={store}>
        <AppContext>
          <AppContainer />
        </AppContext>
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

