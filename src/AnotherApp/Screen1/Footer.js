// //import liraries
// import React, {Component, useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   Dimensions,
//   Image,
//   TouchableOpacity,
// } from 'react-native';

// import CIcon from 'react-native-vector-icons/EvilIcons';
// // create a component
// const Footer = () => {
//   const [myData, setMyData] = useState([
//     {
//       name: 'share-apple',
//       title: ' Discover',
//       color: 'pink',
//       key: '1',
//     },
//     {
//       name: 'envelope',
//       title: 'Library',
//       key: '2',
//     },
//     {
//       img: {uri: 'https://cutt.ly/2kn5h8S'},
//       w: 48,
//       h: 56,
//       key: '3',
//     },
//     {
//       name: 'cart',
//       title: 'Share',
//       key: '4',
//     },
//     {
//       name: 'user',
//       title: 'Account',
//       key: '5',
//     },
//   ]);

//   const clicked = (color) => {
//     setMyData(changeData(color));
//   };

//   // const changeData =(color)=>{
//   //   let newList = [...myData] ;

//   //   newList.map((data)=>{
//   //     data.color === color ?

//   //   })
//   // }

//   return (
//     <View style={styles.container}>
//       <FlatList
//         contentContainerStyle={{
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           paddingHorizontal: 15,
//           paddingVertical: 8,
//         }}
//         data={myData}
//         renderItem={({item}) => {
//           return (
//             <View>
//               {item.name ? (
//                 <TouchableOpacity>
//                   <View style={styles.cont}>
//                     <CIcon
//                       name={item.name}
//                       color={item.color || 'white'}
//                       size={Dimensions.get('window').width > 700 ? 20 : 30}
//                     />

//                     <Text
//                       style={{
//                         padding: 4,
//                         color: item.color || 'white',
//                         fontSize: 12,
//                         fontFamily: 'Pacifico-Regular',
//                       }}>
//                       {item.title}
//                     </Text>
//                   </View>
//                 </TouchableOpacity>
//               ) : (
//                 <View>
//                   <View style={{width: item.w, height: item.h}}>
//                     <Image
//                       source={item.img}
//                       style={{
//                         width: '100%',
//                         height: '100%',
//                         borderRadius: 22,

//                         marginLeft: -5,
//                         marginBottom: -9,
//                       }}
//                     />
//                   </View>
//                 </View>
//               )}
//             </View>
//           );
//         }}
//       />
//     </View>
//   );
// };

//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/EvilIcons';
// create a component
import Screen1Ap from '../Screen1/Screen1App';
import Library from './FooterScreens/Library';
import A from './FooterScreens/Account';
import B from './FooterScreens/Discover';
const Tab = createMaterialBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Screen1Ap}
        options={{
          tabBarLabel: 'Discover',
          tabBarColor: '#484c6a',

          tabBarIcon: ({focused}) => (
            <Icon
              name="share-apple"
              color={focused ? 'pink' : 'white'}
              size={30}
              style={{
                fontFamily: 'Pacifico-Regular',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={Library}
        options={{
          tabBarColor: '#484c6a',
          tabBarLabel: 'Library',

          tabBarIcon: ({focused}) => (
            <Icon
              name="envelope"
              color={focused ? 'pink' : 'white'}
              size={focused ? 28 : 28}
              style={{
                fontFamily: 'Pacifico-Regular',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="alice"
        component={A}
        options={{
          tabBarLabel: 'Share',
          tabBarColor: 'blue',
          tabBarIcon: ({focused}) => (
            <Icon
              name="cart"
              color={focused ? 'pink' : 'white'}
              size={focused ? 28 : 28}
              style={{
                fontFamily: 'Pacifico-Regular',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="d"
        component={B}
        options={{
          tabBarLabel: 'Account',
          tabBarColor: 'teal',
          tabBarIcon: ({focused}) => (
            <Icon
              name="user"
              color={focused ? 'pink' : 'white'}
              size={focused ? 28 : 28}
              style={{
                fontFamily: 'Pacifico-Regular',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default Home;
