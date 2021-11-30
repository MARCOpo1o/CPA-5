import React, {useState} from "react";
import { useContext } from 'react';
import { Button, View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppContext from "./AppContext";

import header from './header';

function ProfileScreen({ navigation }) {
  const [text, onChangeText] = useState("Useless Text");
  const [description, onChangeDescrption] = useState("Useless Text");
  const [number, onChangeNumber] = useState(null);
  const [num2, onChangeNumber2] = useState(null);
  const myContext = useContext(AppContext);
  return (
    <View>
        <Image style={styles.headerBackground} source={require('../img/headerbg.jpeg')}/>
          <View>
            <View sytle={styles.profilepicWrap}>
              <Image style={styles.profilepic} source={require('../img/profilepic.png')}/>
            </View>
          </View>
        <TextInput
        style={styles.name}
        onChangeText={myContext.setSetting1value}
        value={myContext.setting1value}
        placeholder="UserNmae"
        keyboardType="numeric"
      />
        <TextInput
        style={styles.pos}
        onChangeDescrption={onChangeNumber2}
        value={num2}
        placeholder="Description"
        keyboardType="numeric"
      />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
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

export default ProfileScreen;