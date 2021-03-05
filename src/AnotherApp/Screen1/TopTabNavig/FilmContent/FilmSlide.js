//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  Modal,
  StatusBar,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import ModalComponent from '../../Modal';
import Sound from 'react-native-sound';

const WIDTH = Dimensions.get('screen').width;
// create a component

let sound1;

const FilmeSlide = () => {
  const data = [
    {
      img: {uri: 'https://cutt.ly/QknBJF7'},
      name: 'Game Of Thrones',
      render: 'true',
      title: 'Action',
      id: '1',
      song: require('../../../../../src/AnotherApp/Screen1/resources/rema.mp3'),
      nameIcon: 'pause',
    },
    {
      img: {uri: 'https://cutt.ly/vknBCqD'},
      name: 'The Witcher',
      render: 'false',
      id: '2',
      title: 'Battle',
      song: require('../../../../../src/AnotherApp/Screen1/resources/small.mp3'),
      nameIcon: 'pause',
    },

    {
      img: {uri: 'https://cutt.ly/nknNsLA'},
      name: 'Empire',
      render: 'false',
      id: '3',
      title: 'music',
      song: require('../../../../../src/AnotherApp/Screen1/resources/empire.mp3'),
      nameIcon: 'pause',
    },
    {
      img: {uri: 'https://cutt.ly/9knB7JM'},
      name: 'Jumanji',
      render: 'false',
      id: '4',
      title: 'fun',
      song: require('../../../../../src/AnotherApp/Screen1/resources/rema.mp3'),
      nameIcon: 'pause',
    },
  ];
  const [Modal, setModal] = useState(data);
  const [isPlaying, setIsPlaying] = useState(false);
  const [iconNameChange, setIconNameChange] = useState(false);
  const [heart, setHeart] = useState(false);

  const HandleModal = (key, url, index) => {
    let modals = [...Modal];
    modals.map((item) => {
      item.id == key && (item.render = true);
    });
    setModal(modals);

    isPlaying && playPauseMusic();

    sound1 = new Sound(url, (error, _sound) => {
      if (error) {
        alert('error' + error.message);
        return;
      }
      sound1.play(() => {
        sound1.release();
      });
      setIsPlaying(true);
      setIconNameChange(false);
      setHeart(false);
    });
  };

  const playPauseMusic = () => {
    setIsPlaying(!isPlaying);

    isPlaying
      ? sound1.pause()
      : sound1.stop(() => {
          sound1.play();
        });

    setIconNameChange(!iconNameChange);
  };

  const closeModal = (key) => {
    let modals = [...Modal];
    modals.map((item) => {
      item.id == key && (item.render = false);
    });
    setModal(modals);
  };

  const bckgToggler = () => {
    setHeart(!heart);
  };

  const previousSound = (index) => {};
  return (
    <FlatList
      keyExtractor={(item) => item.name}
      horizontal
      showsHorizontalScrollIndicator={false}
      decelerationRate={'fast'}
      data={Modal}
      renderItem={({item, index}) => {
        return (
          <View style={{padding: 7}}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => HandleModal(item.id, item.song, index)}>
              <View style={{width: WIDTH * 0.28, height: WIDTH * 0.3}}>
                <Image
                  source={item.img}
                  style={{width: '100%', height: '100%', borderRadius: 8}}
                />
              </View>
            </TouchableOpacity>
            <ModalComponent
              MYopenModal={item.render}
              modalData={item}
              close={closeModal}
              playPause={playPauseMusic}
              iconNameChange={iconNameChange}
              bckgToggler={bckgToggler}
              bckgState={heart}
              modalIndex={index}
              // previous={previousSound}
            />
            <TouchableOpacity onPress={() => previousSound(index)}>
              <Text
                style={{
                  color: 'white',
                  paddingVertical: 7,
                  fontSize: 13,
                  fontWeight: 'bold',
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                color: 'white',

                fontSize: 13,
                paddingLeft: 8,
                marginTop: -6,
              }}>
              {item.title}
            </Text>
          </View>
        );
      }}
    />
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: 80,
  },
});

//make this component available to the app
export default FilmeSlide;
