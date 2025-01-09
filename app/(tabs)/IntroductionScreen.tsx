import React, { useState } from 'react';
import ProgressBar from 'react-native-progress/Bar';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import IntroductionStyles from '../styles/IntroductionStyles';

const IntroductionScreen = () => {
  const [name, setName] = useState('');
  const router = useRouter();

  return (
    <View style={IntroductionStyles.IntroductionContainer}>
      {/* Back Button */}
      <View style={IntroductionStyles.Headercontainer}>
      <TouchableOpacity style={IntroductionStyles.backButton} onPress={() => router.back()}>
      <EvilIcons name="arrow-left" size={45} color="black" />
      </TouchableOpacity>
      
      <TouchableOpacity style={IntroductionStyles.skipcontainer}>
        <Text style={IntroductionStyles.skipText}>Skip</Text>
      </TouchableOpacity>
      </View>
      
      {/* Introduction Text */}
      <Text style={IntroductionStyles.IntroductionTitle}>La oss komme i gang!</Text>
      <ProgressBar progress={0.1} width={380} height={7} color="green" backgroundColor="#ebebeb" borderWidth="" left="4.5%" marginBottom="4%"></ProgressBar>
      <Text style={IntroductionStyles.IntroductionSubtitle}>Hva er navnet ditt?</Text>

      <View style={IntroductionStyles.Inputcontainer}>
      {/* Name Input */}
      <TextInput
        style={IntroductionStyles.IntroductionInput}
        placeholder="Skriv navnet ditt"
        value={name}
        onChangeText={setName}
      />
      </View>

      {/* Next Button */}
      <TouchableOpacity 
        style={IntroductionStyles.nextButton} 
        onPress={() => router.push('/nextScreenPath')} // Update with the actual path
      >
        <Text style={IntroductionStyles.nextButtonText}>Gå videre</Text>
      </TouchableOpacity>
    </View>
  );
};export default IntroductionScreen;
