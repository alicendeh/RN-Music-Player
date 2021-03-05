//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// create a component
const Video = () => {
  return (
    <LinearGradient
      colors={['#667eac', '#d5738c', '#484c6a']}
      locations={[0.3, 0.7, 0.9]}>
      <Text>Music</Text>
      <Text>hey</Text>
      <View>
        <Text>Alice</Text>
      </View>

      <View style={{width: 820, height: 480}}>
        <Text>Alice</Text>
      </View>
    </LinearGradient>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
});

//make this component available to the app
export default Video;
