//import liraries
import {useLinkProps} from '@react-navigation/native';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// create a component
const Album = (props) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            backgroundColor: 'pink',
            width: 3,
            height: 27,
            marginHorizontal: 8,
          }}></View>
        <Text style={{color: 'white', fontSize: 21}}> {props.category} </Text>
      </View>
      <Icon name="arrow-forward-ios" color="white" size={21} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
    marginHorizontal: 12,
  },
});

//make this component available to the app
export default Album;
