//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Flip from '../FilmContent/ImageFlip';
import FilmA from '../Album';
import FilmSlide from '../FilmContent/FilmSlide';
import RCard from '../FilmContent/RCard/RCard';

const {width, height} = new Dimensions.get('screen');

// create a component
const Film = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#667eac', '#d5738c', '#484c6a']}
        locations={[0.3, 0.7, 0.9]}>
        <Flip />
        <FilmA category="New Albums" />
        <FilmSlide />
        <FilmA category="Recommend Playlist" />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width * 0.9}>
          <RCard
            img1="https://cutt.ly/8kn9Foz"
            img2="https://cutt.ly/vknBCqD"
            img3="https://cutt.ly/9knB7JM"
            img4="https://cutt.ly/nknNsLA"
            txt1="Merlin the best witcher ever"
            txt2="R Pincho "
            txt3="Winfred Nosteer"
            txt4="Empire"
            p1="Teddy Lawrence"
            p2="Battle of the survivor"
            p3="funing amp"
            p4="music"
          />
          <RCard
            img1="https://cutt.ly/fkn7cRR"
            img2="https://cutt.ly/5kn7mQc"
            img3="https://cutt.ly/xkn7Y9R"
            img4="https://cutt.ly/gkn7PEj"
            txt1="Vigo Men highgardin"
            txt2="KIngs Men Royalty "
            txt3="Verbos Shranking"
            txt4="Vernom cast X"
            p1="Teddy Lawrence"
            p2="Battle of the survivor"
            p3="funing amp"
            p4="music"
          />
          <RCard
            img1="https://cutt.ly/Nkn5pQd"
            img2="https://cutt.ly/vknBCqD"
            img3="https://cutt.ly/2kn5h8S"
            img4="https://cutt.ly/wkn5wOI"
            txt1="Ghost Whisperer Belinda Gordon"
            txt2="Witch killer slaughter"
            txt3="Indiana Jones pirate"
            txt4="Empira casting"
            p1="Teddy Lawrence"
            p2="Battle of the survivor"
            p3="funing amp"
            p4="music"
          />
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,

    height: '90%',
  },
});

//make this component available to the app
export default Film;
