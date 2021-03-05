
// import React in our code
import React, {useEffect, useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
} from 'react-native';

// import Sound Component
import Sound from 'react-native-sound';


let sound1;
  // sound1 ? console.log('true') : console.log('false');

const AppSound = () => {


  //List of the dummy sound track
  const audioList = [
    {
      id: '1',
      title: 'Rema',
      isRequire: true,
      url: require('../Screen1/resources/rema.mp3'),
    },

    {
      id: '2',
      title: 'Petit Pay',
      isRequire: true,
      url: require('../Screen1/resources/small.mp3'),
    },

    {
      id: '3',
      title: 'Rema',
      isRequire: true,
      url: require('../Screen1/resources/rema.mp3'),
    },

    {
      id: '4',
      title: 'Petit Pay',
      isRequire: true,
      url: require('../Screen1/resources/small.mp3'),
    },
  ];

  const [isPlaying, setIsPlaying] = useState(false);

  // const Me = (item, index) => {
  //   isPlaying ? stopSound() : playSound(item, index);
    
  // };

  const playSound = (item, index) => {
    isPlaying && stopSound()
    sound1 = new Sound(item.url, (error, _sound) => {
      if (error) { 
        alert('error' + error.message);
        return;
      }
      sound1.play(() => {
        sound1.release();
      });
      setIsPlaying(true);
    });
  };

  const stopSound = () => {
    sound1.pause(() => {
      console.log('Stop');
    });
    setIsPlaying(false);
  };
const resumeSound = ()=>{
  sound1.stop(()=>{
    sound1.play()
    setIsPlaying(true);
  })
}
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Play Music / Sound in React Native AppSound for Android and iOS
        </Text>
        <FlatList
          data={audioList}
          renderItem={({item, index}) => {
            return (
              <View style={styles.feature}>
                <Text style={styles.textStyle}>{item.title}</Text>
                <TouchableOpacity onPress={() => playSound(item, index)}>
                  <Text style={styles.buttonPlay}>Play</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => stopSound()}>
                  <Text style={styles.buttonStop}>Stop</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => resumeSound()}>
                  <Text style={styles.buttonStop}>Resume</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default AppSound;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    flex: 1,
    padding: 5,
  },
  buttonPlay: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'rgba(00,80,00,1)',
    borderWidth: 1,
    borderColor: 'rgba(80,80,80,0.5)',
    overflow: 'hidden',
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  buttonStop: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'rgba(80,00,00,1)',
    borderWidth: 1,
    borderColor: 'rgba(80,80,80,0.5)',
    overflow: 'hidden',
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  feature: {
    flexDirection: 'row',
    padding: 5,
    marginTop: 7,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgb(180,180,180)',
  },
});
