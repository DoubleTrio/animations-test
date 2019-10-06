import React, { useCallback } from 'react';
import { Animated, View, StyleSheet, Text, FlatList, ScrollView } from 'react-native';
import R from '../styles/index';
import ScreenListItem from '../components/presentational/ScreenListItem';
import * as navigate from 'react-navigation-hooks';
const { useNavigation } = navigate;
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
    subText: 'Adjusting opacity of text',
    id: '2'
  },
  // {
  //   route: 'MovementScreen',
  //   title: 'Animating Views',
  //   id: '1' 
  // },
]

export default function HomeScreen() {
  const { navigate } = useNavigation();
  const renderItemCall = useCallback(({ item, index }) => renderItem({ item }, navigate))
  return (
    <ScrollView style={styles.container}>
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

HomeScreen.navigationOptions = {
  headerTitle: 'React Animations',
  headerTitleStyle: {
    fontSize: R.fontSizes.header,
  },
  headerTintColor: R.colors.light,
  headerStyle: {
    backgroundColor: R.colors.primary
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
  },

  itemSeperator: {
    backgroundColor: R.colors.seperator,
    height: R.border,
    width: '100%',
  },
});