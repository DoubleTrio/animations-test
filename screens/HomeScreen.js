import React, { useCallback, useContext, useRef } from 'react';
import { Animated, View, StyleSheet, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import R from '../styles/index';
import ScreenListItem from '../components/presentational/ScreenListItem';
import withThemeContext from '../context/ThemeContext/theme';
import ThemeButton from '../components/presentational/ThemeButton';
import PropTypes from 'prop-types';
// import * as navigate from 'react-navigation-hooks';
// console.log(navigate)

const routeNames = [
  {
    routeName: 'MovementScreen',
    title: 'Animating Views',
    subText: 'Moving view containers',
    id: '1'
  },
  {
    routeName: 'OpacityScreen',
    title: 'Opacity',
    subText: 'Adjust the opacity of text',
    id: '2'
  },
  {
    routeName: 'ScaleScreen',
    title: 'Scaling',
    subText: 'Scale the height and width',
    id: '3',
  },
  {
    routeName: 'GradientScreen',
    title: 'Gradient',
    subText: 'Animating colors',
    id: '4',
  },
  {
    routeName: 'SwitchScreen',
    title: 'Switch Button',
    subText: 'Toggling on and off an animated button',
    id: '5',
  },
  {
    routeName: 'SwitchScreen',
    title: 'Switch Button',
    subText: 'Toggling on and off an animated button',
    id: '6',
  },
  {
    routeName: 'SwitchScreen',
    title: 'Switch Button',
    subText: 'Toggling on and off an animated button',
    id: '7',
  },
  {
    routeName: 'SwitchScreen',
    title: 'Switch Button',
    subText: 'Toggling on and off an animated button',
    id: '8',
  },
  {
    routeName: 'SwitchScreen',
    title: 'Switch Button',
    subText: 'Toggling on and off an animated button',
    id: '9',
  },
]

function Screen({ navigation, theme }) {

  const { navigate } = navigation;
  const { primary } = theme; 
  const renderItemCall = useCallback(({ item, index }) => renderItem({ item }, navigate))

  return (
    <Animated.View style={[styles.container, { backgroundColor: primary }]}>
      <ScrollView style={styles.container}>      
        <FlatList 
          data={routeNames}
          renderItem={renderItemCall}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={ItemSeperator}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
      <ThemeButton />
    </Animated.View>
  );
}

const HomeScreen = withThemeContext(Screen);

HomeScreen.propTypes = {
  theme: PropTypes.shape({
    changeTheme: PropTypes.func.isRequired,
    isLightTheme: PropTypes.bool.isRequired,
    palette: PropTypes.shape({
      gray: PropTypes.string.isRequired,
      primary: PropTypes.string,
      primaryOpp: PropTypes.string,
      secondary: PropTypes.string,
      secondaryOpp: PropTypes.string,
    }),
  }),
  navigation: PropTypes.object,
}
HomeScreen.navigationOptions = {
  headerTitle: 'React Animations',
  headerStyle: {
    backgroundColor: R.colors.primary,
  },
};

const renderItem = ({ item }, navigate) => {
  const { routeName, title, subText } = item;
  return (
    <ScreenListItem 
      subText={subText} 
      routeName={routeName} 
      title={title} 
      navigateToScreen={navigate}
    />
  );
}

const ItemSeperator = () => (
  <View style={styles.itemSeperator}/>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: '100%',
    // width: '100%'
  },

  itemSeperator: {
    borderTopColor: R.colors.gray,
    height: 0,
    borderTopWidth: 1,
    width: '100%',
  },
});

export default HomeScreen;