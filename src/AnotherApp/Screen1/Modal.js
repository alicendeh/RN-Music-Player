//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  ImageBackground,
  Image,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/Feather';

const PlayBar = () => {
  return (
    <View style={{width: '90%'}}>
      <View
        style={{
          width: '88%',
          borderWidth: 0.47,
          borderColor: 'white',
          marginLeft: 35,
        }}>
        <View
          style={{
            width: 15,
            borderWidth: 0.58,
            borderColor: 'white',
            height: 15,
            borderRadius: 60,
            backgroundColor: 'white',
            position: 'absolute',
            top: -7,
            left: 160,
          }}></View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          padding: 16,
          marginHorizontal: 10,
        }}>
        <Text style={{color: 'white'}}> 2.49 </Text>
        <Text style={{color: 'white'}}>8.69</Text>
      </View>
    </View>
  );
};

// const PlayerSwitch = (props) => {
//   return (

//   );
// };

// create a component
const MyComponent = (props) => {
  // const [iconNameChange, setIconNameChange] = useState(true);
  return (
    <Modal
      visible={props.MYopenModal}
      animationType={'slide'}
      statusBarTranslucent>
      <View>
        <ImageBackground
          blurRadius={2}
          source={props.modalData.img}
          style={{
            width: '100%',
            height: '100%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 65,
              marginHorizontal: 12,
            }}>
            <TouchableOpacity onPress={() => props.close(props.modalData.id)}>
              <Icon name="arrow-down" color="white" size={24} />
            </TouchableOpacity>
            <Icon1 name="dots-three-horizontal" color="white" size={24} />
          </View>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 28, color: 'white', fontWeight: 'bold'}}>
              {props.modalData.name}
            </Text>
            <Text style={{fontSize: 18, color: 'white'}}>
              {props.modalData.title}
            </Text>
          </View>
          <View
            style={{
              width: '65%',
              height: '35%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#6e91cd',
              borderRadius: 190,
              marginLeft: 65,
              marginVertical: 45,
            }}>
            <View
              style={{
                width: '95%',
                height: '96%',
              }}>
              <Image
                source={props.modalData.img}
                style={{width: '100%', height: '100%', borderRadius: 200}}
              />
            </View>
          </View>
          <PlayBar />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              margin: 15,
            }}>
            <TouchableOpacity 
            // onPress={()=>props.previous(props.index)}
             >
              <Icon2 name="skip-previous" size={40} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={props.playPause}>
              <Icon2
                name={
                  props.iconNameChange ? 'play-arrow' : props.modalData.nameIcon
                }
                size={40}
                color="white"
              />
            </TouchableOpacity>

            <Icon1 name="controller-next" size={40} color="white" />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              margin: 30,
              marginTop: 70,
            }}>
            <Icon3 name="repeat" size={25} color="white" />
            <TouchableOpacity onPress={props.bckgToggler}>
              <Icon1
                name={props.bckgState ? 'heart' : 'heart-outlined'}
                size={25}
                color={props.bckgState ? 'red' : 'white'}
              />
            </TouchableOpacity>
            <Icon1 name="download" size={25} color="white" />
            <Icon1 name="keyboard" size={25} color="white" />
            <Icon1 name="beamed-note" size={25} color="white" />
          </View>
        </ImageBackground>
      </View>
    </Modal>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
});

//make this component available to the app
export default MyComponent;
