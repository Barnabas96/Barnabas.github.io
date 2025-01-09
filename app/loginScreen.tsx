import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet , TouchableOpacity, ImageBackground} from 'react-native';
import { Link, useRouter } from 'expo-router';
import globalStyles from '../app/styles/globalStyles';
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { useStore } from './stores/zustandStores';
import VideoScreen from './(tabs)/(inside)/home/videoScreen'


const LoginScreen = () => {
  const router = useRouter();

  const navigateToIntroduction = () => {
    router.push('/(inside)/home/videoScreen');  // Push the route based on file structure
  };

   // Using zustand stor to 
  const  { username, password, setUsername, setPassword } = useStore();
  const handleLogin = () => {
     {/* 
       Implement your login logic for password
    */}
    /* {"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}*/ 
  };
  return (
    <ImageBackground source={require("../assets/Login.png")} style={{width: '100%', height: '100%'}}>

       <TouchableOpacity style={globalStyles.backButton} onPress={() => router.back()}>
      <EvilIcons name="arrow-left" size={50} color="black" />
      </TouchableOpacity>

      <View style={globalStyles.Logincontainer}>
      </View>
      <Text style={globalStyles.Logintitle}>Log inn</Text>

      <Link href="forgotPasswordScreen" style={globalStyles.Forgotpasswordlink}>
      <Text>Glemt passord?</Text>  
      </Link>

      <TextInput
        style={globalStyles.LoginInput}
        placeholder="E-post"
        value={username}
        onChangeText={setUsername}
      />
      
      <TextInput
        style={globalStyles.LoginInput}
        placeholder="Passord"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />  
      
    

      <TouchableOpacity style={globalStyles.Loginbutton} onPress={navigateToIntroduction}>
        <Text style={globalStyles.LoginbuttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={globalStyles.Text}>Ved å registere deg godtar du CoreCapacity sine vilkår for bruk {"\n"}og personvernerklæring</Text>
    </ImageBackground>
  
  );
};export default LoginScreen;
