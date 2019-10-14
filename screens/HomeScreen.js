import React, { useCallback } from 'react';
import { Animated, View, StyleSheet, Text, FlatList, ScrollView } from 'react-native';
import R from '../styles/index';
import ScreenListItem from '../components/presentational/ScreenListItem';
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
    id: '3'
  },
]

export default function HomeScreen({ navigation }) {
  const { navigate } = navigation;
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
  },

  itemSeperator: {
    borderTopColor: R.colors.gray,
    height: 0,
    borderTopWidth: 1,
    width: '100%',
  },
});