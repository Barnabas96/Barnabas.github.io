import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Pressable, Dimensions, TouchableHighlight } from 'react-native';
import { Link, useRouter } from 'expo-router';
import registerStyles from '../app/styles/registerStyles';
import { Ionicons } from "@expo/vector-icons";
import EvilIcons from '@expo/vector-icons/EvilIcons';



  const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [date, setDate] = useState('');
  const [gender, setGender] = useState('');
  const [sport, setSport] = useState('');  
  const router = useRouter();
  const handleRegister = () => {
     {/* // logic for register

    */
   //We just use this for the maintime, to redirect use to other screen.
      router.push('/(inside)/video/videoScreen');
   }
  };

  return (
    <View style={registerStyles.RegisterContainer}>
      <TouchableOpacity style={registerStyles.backButton} onPress={() => router.back()}>
      <EvilIcons name="arrow-left" size={50} color="black" />
      </TouchableOpacity>
      <View>
      <Text style={registerStyles.RegisterTitle}>La oss komme i gang!</Text>

      <TouchableHighlight
      style = {{
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.25,
        height: Dimensions.get('window').width * 0.25,
        backgroundColor:'#f4f4f4',
        marginHorizontal: 'auto',
        marginBottom: '2%',
      }}
      >
      <Ionicons name="person" size={80} color="black" style={{marginHorizontal: 'auto', marginTop: '23%'}}></Ionicons>
      </TouchableHighlight>
    
      <TouchableHighlight
      underlayColor = 'white'
      onPress = { () => alert('Upload image!') }
      >
      <Ionicons name="add-circle-outline" size={32} color="green" style={{marginHorizontal: 'auto', marginRight: '37%', bottom: '100%'}}></Ionicons>
      </TouchableHighlight>
      
      <TextInput
        style={registerStyles.RegisterInput}
        placeholder="Navn"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={registerStyles.RegisterInput}
        placeholder="Fødsels Dato"
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        style={registerStyles.RegisterInput}
        placeholder="Kjønn"
        secureTextEntry
        value={gender}
        onChangeText={setGender}
      />
      <TextInput
        style={registerStyles.RegisterInput}
        placeholder="Idretts type"
        secureTextEntry
        value={sport}
        onChangeText={setSport}
      />

      <Text style={registerStyles.RegisterSubtitle}>Ved å fortsette godtar du vår Personvernerklæring og {"\n"}Bruksvilkår</Text>

      <TouchableOpacity onPress={handleRegister} style={registerStyles.RegisterButton}>
          <Text style={registerStyles.RegisterLinkText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};export default RegisterScreen;
