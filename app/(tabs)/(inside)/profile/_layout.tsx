import { Stack } from 'expo-router';

export default function ProfileStackLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="profileScreen" 
        options={{ 
          title: 'Profile', 
          headerShown: false // No header for main screen
        }} 
      />
      <Stack.Screen 
        name="changePasswordScreen" 
        options={{ 
          title: 'Change Password', 
          headerShown: true // Header with back button for sub-screen
        }} 
      />
      <Stack.Screen 
        name="notificationSettingScreen" 
        options={{ 
          title: 'Notifications', 
          headerShown: true // Header with back button for sub-screen
        }} 
      />
    </Stack>
  );
}
