import { Stack } from 'expo-router';
import PlayScreen from './calendarScreen';

export default function HomeStackLayout() {
  return (
    <Stack>
    
    <Stack.Screen
        name="videoScreen"
        options={{
          title: 'Video',
          headerShown: false, // Show header with back button on sub-screen
        }}
      />

    <Stack.Screen
        name="calendarScreen"
        options={{
          title: 'Calendar',
          headerShown: false, // Show header with back button on sub-screen
        }}
      />

</Stack>
  );
}