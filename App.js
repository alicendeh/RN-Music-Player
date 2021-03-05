
// import liraries
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import Screen1App from './src/AnotherApp/Screen1/Screen1App';
import {createStackNavigator} from '@react-navigation/stack';
import Discover from './src/AnotherApp/Screen1/FooterScreens/Discover';
import Footer from './src/AnotherApp/Screen1/Footer';
const Stack = createStackNavigator();

const MyComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Footer" component={Footer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default MyComponent;



//import liraries
// import React, { Component } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import SOund from "./src/AnotherApp/Screen1/Sound"
// import Videos from "./src/AnotherApp/Screen1/Video"
// // create a component
// const App = () => {
//   return (
//     <View style={styles.container}>
//       <SOund/>
//     </View>
//   );
// };

// // define your styles
// const styles = StyleSheet.create({
//   container: {

//   },
// });

// //make this component available to the app
// export default App;
