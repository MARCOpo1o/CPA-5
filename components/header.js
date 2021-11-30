import * as React from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


export default function header() {
  return (
    <View>
    
    <Image style={styles.headerBackground} source={require('../img/headerbg.jpeg')}/>

    <View style={styles.header}>
      <View sytle={styles.profilepicWrap}>
        <Image style={styles.profilepic} source={require('../img/profilepic.png')}/>
        </View>
    </View>

    <Text style={styles.name}> user1</Text>
    <Text style={styles.pos}> description</Text>
    </View>
  );


}
const styles = StyleSheet.create({
  headerBackground: {
    flex:1,
    width: null,
    alighSelf: 'stretch'
  },
  header: {
    flex:1,
    alighItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundCOlor: 'rgba(0,0,0,0.5)',
  },
  profilepicWrap: {
    width: 180,
    height: 180,
    borderRadius: 100,
    borderColor: 'rgba(0,0,0,0.4)',
    borderWidth: 16,
  },
  profilepic: {
    flex:1,
    width: null,
    alignSelf: 'stretch',
    borderRaius: 100,
    borderColor: '#fff',
    borderWidth: 4
  },
  name: {
    marginTop: 20,
    fontSize: 16, 
    color: '#fff',
    fontWeight: 'bold'
  },
  pos: {
    fontSize: 14,
    color: '#0394c0',
    fontWeight: '300',
    fontStyle: 'italic'
  }

});
