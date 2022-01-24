

import React,{useState} from 'react';
import type {Node} from 'react';
import {
  Button,
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App = () => {

  const [name,setName] = useState('Gayan');

  const onPressHandler = () =>{
    setName('Hi! My name is Gayan');
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{name}</Text>
      <Button title='Click Me!' onPress={onPressHandler} ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  body:{
    flex:1,
    backgroundColor:'blue',
    alignItems:'center',
    justifyContent:'center'
    
  },

  text:{
    color:'#ffffff',
    fontSize:20,
    fontStyle:'italic'

  },

  
});

export default App;
