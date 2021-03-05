//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Film from './NavigElem/Film';
import Music from './NavigElem/Music';
import Video from './NavigElem/Video';

// create a component

// const Tab = createMaterialTopTabNavigator();

const Header = () => {
  return (
    <View style={{flexDirection: 'row'}}
  
    >
      <Text>Music</Text>
      <Text>Film</Text>
      <Text>Video</Text>
    </View>
  );
};

const MainNavig = () => {
  return (
    <View>
      <Header />
      <Film />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
});

//make this component available to the app
export default MainNavig;
