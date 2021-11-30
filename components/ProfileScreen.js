import React, {useState, useEffect} from "react";
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
  const [info, setInfo] = useState({name:'',email:''});
  const [name, setName] = useState('');
  const [email,setEmail] = useState('')

  useEffect(() => {getData()}
  ,[])

  const getData = async () => {
    try {
      // the '@profile_info' can be any string
      const jsonValue = await AsyncStorage.getItem('@profile_info')
      let data = null
      if (jsonValue!=null) {
        data = JSON.parse(jsonValue)
        setInfo(data)
        setName(data.name)
        setEmail(data.email)
        console.log('just set Info, Name and Email')
      } else {
        console.log('just read a null value from Storage')
        setInfo({})
        setName("")
        setEmail("")
      }


    } catch(e) {
      console.log("error in getData ")
      console.dir(e)
      // error reading value
    }
}
const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@profile_info', jsonValue)
    console.log('just stored '+jsonValue)
  } catch (e) {
    console.log("error in storeData ")
    console.dir(e)
    // saving error
  }
}

const clearAll = async () => {
  try {
    console.log('in clearData')
    await AsyncStorage.clear()
  } catch(e) {
    console.log("error in clearData ")
    console.dir(e)
    // clear error
  }
}

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
      <TextInput
          style={styles.textinput}
          placeholder="email"
          onChangeText={text => {setEmail(text)}}
          value={email}
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
  },
  textinput:{
    margin:20,
    fontSize:20
  },
});

export default ProfileScreen;