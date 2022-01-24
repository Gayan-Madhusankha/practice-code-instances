

import React from 'react';
import type {Node} from 'react';
import {
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

  return (
    <View style={styles.body}>
      <Text>Hello World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body:{
    flex:1,
    backgroundColor:'blue',
    alignItems:'center',
    justifyContent:'center'
    
  }
});

export default App;
