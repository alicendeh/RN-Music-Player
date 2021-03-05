//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/EvilIcons';
import Iconb from 'react-native-vector-icons/FontAwesome';
import FilmHeader from '../TopTabNavig/Album';
import FilmSlide from '../TopTabNavig/FilmContent/FilmSlide';
// create a component

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
      }}>
      <Text style={styles.h1}>Library</Text>
      <Icon name="bell" size={30} color="white" />
    </View>
  );
};

const Card = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '87%',
          backgroundColor: '#e4e5f3',
          borderTopRightRadius: 21,
          borderBottomLeftRadius: 22,
          height: 80,
          alignItems: 'center',
          padding: 12,
          marginTop: 25,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Iconb name="twitch" size={20} color="black" />
          <Text style={{fontWeight: 'bold', marginHorizontal: 8}}>
            Slacker Radio
          </Text>
        </View>
        <Iconb name="twitter" size={20} color="black" />
      </View>
    </View>
  );
};

const Selection = () => {
  const dcata = [
    {
      name: 'bell',
      title: 'Local',
    },
    {
      name: 'bell',
      title: 'Recent',
    },
    {
      name: 'bell',
      title: 'Offline',
    },
  ];
  return (
    <View
      style={{
        alignItems: 'center',
        marginVertical: 40,
      }}>
      <FlatList
        keyExtractor={(item) => item.title}
        contentContainerStyle={{}}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={dcata}
        renderItem={({item}) => {
          return (
            <View
              style={{
                marginHorizontal: 42,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name={item.name} size={30} color="white" />
              <Text style={{color: 'white', fontSize: 18}}> {item.title} </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const FilmSlider = () => {
  return <FilmSlide />;
};

const FilmHeaderDisp = () => {
  return (
    <View style={{marginHorizontal: 12, marginVertical: 8}}>
      <FilmHeader category="Favourite Albums" />
    </View>
  );
};
const Library = () => {
  return (
    <LinearGradient
      colors={['#667eac', '#d5738c', '#484c6a']}
      locations={[0.3, 0.7, 0.9]}
      style={styles.container}>
      <ScrollView>
        <Header />
        <Card />
        <Selection />
        <FilmHeaderDisp />
        <FilmSlider />
        <FilmHeader category="Collection of Artist" />
        <FilmSlider />
      </ScrollView>
    </LinearGradient>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  h1: {
    color: 'white',
    fontSize: 30,
  },
});

//make this component available to the app
export default Library;
