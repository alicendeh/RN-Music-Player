//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from './Header';
import MainNavig from './TopTabNavig/MainNavig';
import Footer from './Footer';
// create a component
const Screen1App = () => {
  return (
    <LinearGradient
      colors={['#667eac', '#d5738c', '#484c6a']}
      locations={[0.3, 0.7, 0.9]}
      style={styles.container}>
      <StatusBar backgroundColor="#667eac" />
      <Header />
      <ScrollView>
        <MainNavig />
      </ScrollView>
  
    </LinearGradient>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default Screen1App;
