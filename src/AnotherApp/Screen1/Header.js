//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
// create a component
const Header = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: 'white',
          fontSize: 35,
          fontFamily: 'FredokaOne-Regular',
        }}>
        Discover
      </Text>
      <Icon color="white" size={24} name="search1" />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    margin: 8,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

//make this component available to the app
export default Header;
