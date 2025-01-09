import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For back icon
import { useRouter } from 'expo-router'; // Use useRouter instead of useNavigation

const NotificationSettingsScreen = () => {
  const router = useRouter(); 
  const [isEmailNotificationEnabled, setEmailNotificationEnabled] = useState(false);
  const [isPushNotificationEnabled, setPushNotificationEnabled] = useState(false);
  const toggleEmailNotification = () => setEmailNotificationEnabled(!isEmailNotificationEnabled);
  const togglePushNotification = () => setPushNotificationEnabled(!isPushNotificationEnabled);

  return (
    <View style={styles.container}>
      {/* Custom Back Button */}
      <TouchableOpacity onPress={() => router.push('/inside/profile/profileScreen')} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={styles.backButtonText}>Back to Profile</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Notification Settings</Text>
      <View style={styles.option}>
        <Text style={styles.optionText}>Email Notifications</Text>
        <Switch
          value={isEmailNotificationEnabled}
          onValueChange={toggleEmailNotification}
        />
      </View>
      <View style={styles.option}>
        <Text style={styles.optionText}>Push Notifications</Text>
        <Switch
          value={isPushNotificationEnabled}
          onValueChange={togglePushNotification}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f7f7f7',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButtonText: {
    marginLeft: 10,
    fontSize: 16,
    color: 'black',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  optionText: {
    fontSize: 16,
  },
});export default NotificationSettingsScreen;
