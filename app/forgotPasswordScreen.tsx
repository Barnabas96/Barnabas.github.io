import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import forgotPasswordStyles from './styles/forgotPasswordStyles';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const handlePasswordReset = () => { 
     {/* 
      // Implement logic password reset logic
    */}
  };
  return (
    <View style={forgotPasswordStyles.Passwordcontainer}>
      <View>
      <Text style={forgotPasswordStyles.Passwordtitle}>Gjenopprett passord</Text>
      <Text style={forgotPasswordStyles.Passwordsubtitle}>For å tilbakestille passordet ditt, skriv inn e-postadressen {"\n"}din nedenfor, så sender vi en lenke for tilbakestilling av {"\n"}passord til e-posten din.</Text>
      
      <TextInput
        style={forgotPasswordStyles.PasswordInput}
        placeholder="E-post"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity style={forgotPasswordStyles.Passwordbutton} onPress={handlePasswordReset}>
        <Text style={forgotPasswordStyles.PasswordbuttonText}>Send</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};export default ForgotPasswordScreen;
