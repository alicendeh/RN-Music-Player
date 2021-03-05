//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

// create a component
const WIDTH = Dimensions.get('screen').width;
const ImageFlip = () => {
  const DataSet = [
    {
      img: {uri: 'https://cutt.ly/gjHz5tp'},
      title: 'Moonlight',
    },

    {
      img: {uri: 'https://cutt.ly/vknBCqD'},
      title: 'La la land',
    },
    {
      img: {uri: 'https://cutt.ly/SjGvDWG'},
      title: 'Dora',
    },
    {
      img: {uri: 'https://cutt.ly/gjHz5tp'},
      title: 'Moonligaht',
    },

    {
      img: {uri: 'https://cutt.ly/vknBCqD'},
      title: 'La la laand',
    },
  ];
  return (
    <FlatList
      //   contentContainerStyle={{height: 600}}
      snapToInterval={WIDTH * 0.9}
      decelerationRate={'fast'}
      keyExtractor={(item) => item.title}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={DataSet}
      renderItem={({item}) => {
        return (
          <TouchableOpacity activeOpacity={0.6}>
            <View
              style={{
                padding: 8,
                width: WIDTH * 0.9,
                height: WIDTH * 0.64,
              }}>
              <Image
                resizeMode="cover"
                source={item.img}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 7,
                }}
              />
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default ImageFlip;
