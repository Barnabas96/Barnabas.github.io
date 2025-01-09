

import { Stack } from 'expo-router';
import { Image } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="loginScreen" options={{headerTransparent: true, headerTitle: "", headerBackVisible: false}} 
      />
      <Stack.Screen name="registerScreen" options={{headerTransparent: false, headerTitle: "", headerBackVisible: false, headerBackground: () => (
        <Image
          style={{width: '50%', height: '50%', marginHorizontal: 'auto', marginTop: '12%'}}
          source={require("../assets/GreenLogo.png")}
        />
      )}} />
      <Stack.Screen name="forgotPasswordScreen" options={{headerTransparent: false, headerTitle: "", headerBackground: () => (
        <Image
          style={{width: '50%', height: '50%', marginHorizontal: 'auto', marginTop: '12%'}}
          source={require("../assets/GreenLogo.png")}
        />
      )}} />
      <Stack.Screen name="index" options={{headerShown: false}} />
      <Stack.Screen name="calendarScreen" options={{headerShown: false}} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
