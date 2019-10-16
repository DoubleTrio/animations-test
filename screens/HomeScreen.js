import React, { useCallback, useContext } from 'react';
import { Animated, View, StyleSheet, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import R from '../styles/index';
import ScreenListItem from '../components/presentational/ScreenListItem';
import { withThemeContext } from '../context/theme';
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
]

function Screen({ navigation, theme }) {
  const { navigate } = navigation;
  const renderItemCall = useCallback(({ item, index }) => renderItem({ item }, navigate))
  console.log(theme)
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={{width: 40, aspectRatio: 1, color: R.colors.green, borderRadius: 50, borderWidth: 1, position: 'absolute', bottom: 0}} onPress={theme.changeTheme} />
      <FlatList 
        data={routeNames}
        renderItem={renderItemCall}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={ItemSeperator}
        showsVerticalScrollIndicator={false}
      />
    </ScrollView>
  );
}

const HomeScreen = withThemeContext(Screen);

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