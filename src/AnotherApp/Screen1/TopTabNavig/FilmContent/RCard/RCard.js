//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';

const {width, height} = new Dimensions.get('screen');
// create a component
const RCard = (props) => {
  const data = [
    {
      img: {uri: props.img1},
      name: props.txt1,
      title: props.p1,
    },
    {
      img: {uri: props.img2},
      name: props.txt2,
      title: props.p2,
    },
    {
      img: {uri: props.img3},
      name: props.txt3,
      title: props.p3,
    },
    {
      img: {uri: props.img4},
      name: props.txt4,
      title: props.p4,
    },
  ];
  return (
    <FlatList
      contentContainerStyle={{width: width * 0.9}}
      data={data}
      keyExtractor={(item) => item.name}
      renderItem={({item}) => {
        return (
          <View style={styles.container}>
            <View style={styles.view1}>
              <View style={styles.img}>
                <Image
                  source={item.img}
                  style={{width: '100%', height: '100%', borderRadius: 9}}
                />
              </View>
            </View>
            <View style={styles.view2}>
              <View>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 18,
                    fontWeight: 'bold',
                    fontFamily: 'Hanalei-Regular',
                  }}>
                  {item.name}
                </Text>
                <Text style={{color: 'white', fontSize: 15}}>{item.title}</Text>
              </View>
            </View>
          </View>
        );
      }}
    />
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 8,
  },
  img: {
    width: width * 0.18,
    height: width * 0.18,
  },
  view2: {
    padding: 8,
  },
});

//make this component available to the app
export default RCard;
