import { Stack } from 'expo-router';
import PlayScreen from './playScreen';

export default function VideoStackLayout() {
  return (
    <Stack>
    
    <Stack.Screen
        name="kategoriScreen"
        options={{
          title: 'Kategori',
          headerShown: false // Show header with back button on sub-screen
        }}
      />
      <Stack.Screen
        name="playScreen"
        options={{
          title: 'Play Video',
          headerShown: false // Show header with back button on sub-screen
        }}
      />
      <Stack.Screen
        name="planScreen"
        options={{
          title: 'Plan',
          headerShown: false // Show header with back button on sub-screen
        }}
      />



    </Stack>
  );
}
