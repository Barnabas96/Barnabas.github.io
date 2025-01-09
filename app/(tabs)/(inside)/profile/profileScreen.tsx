import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollViewBase, FlatList, ScrollView } from 'react-native';// For back icon
import { useRouter } from 'expo-router';
import profileStyles from '../../../../app/styles/profileStyles';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import Fontisto from '@expo/vector-icons/Fontisto';



const dates = [
  { id: '1', title: 'Mon', description: '1' },
  { id: '2', title: 'Tue', description: '2' },
  { id: '3', title: 'Wed', description: '3' },
  { id: '4', title: 'Thu', description: '4' },
  { id: '5', title: 'Fri', description: '5' }, // Corrected duplicate IDs
  { id: '6', title: 'Sat', description: '6' },
  { id: '7', title: 'Sun', description: '7' },
];


const ProfileScreen = () => {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <View style={profileStyles.profilecontainer}>


      {/* Profile Header */}
      <View style={profileStyles.profileHeader}>
        <Image
          style={profileStyles.profileImage}
          source={{ uri: 'https://via.placeholder.com/150' }} // Placeholder image URL
        />
        <View>
          <Text style={profileStyles.userName}>Profil navn</Text>
          <Text style={profileStyles.info}>Lorem ipsum dolor sit amet, consectetur {"\n"}adipiscing elit, sed do eiusmod tempor incididunt {"\n"}ut labore et dolore magna aliqua.</Text>
        </View>
      </View>
      </View>

        {/* User Statistics */}
        <View style={profileStyles.statsSection}>
        <Text style={profileStyles.statsTitle}>Streak</Text>
        <View style={profileStyles.streakicon}>
        <FontAwesome5 name="fire-alt" size={24} color="black"/>
        <Text style={profileStyles.streakday}>2</Text>
        </View>
        </View>

      <View style={profileStyles.streakdaycontainer}>
      <ScrollView 
        horizontal={true}
        >
        <View style={profileStyles.statsContainer}>
            {dates.map((dates) => (
              <TouchableOpacity key={dates.id} style={profileStyles.statBox}>
                <Text style={profileStyles.statLabel}>{dates.title}</Text>
                <Text style={profileStyles.statNumber}>{dates.description}</Text>
              </TouchableOpacity>
          
            ))}
        </View>


        </ScrollView>
        <View style={profileStyles.settingcontainer}>
          <View style={profileStyles.settingicon}>
        <Ionicons name="settings-sharp" size={23} color="white" />
        </View>
        <Text style={profileStyles.settingheader}>Innstillinger</Text>
        </View>

        
      {/* Settings Options */}
      <View style={profileStyles.settingsSection}>
        <TouchableOpacity 
          style={profileStyles.settingsOption} 
          onPress={() => router.push('/inside/profile/changePasswordScreen')}
        >
           <FontAwesome6 name="bookmark" size={24} color="gray" style={profileStyles.settingicon2}/>
          <Text style={profileStyles.settingsOptionText1}>Lagret</Text>
          <MaterialIcons name="arrow-forward-ios" size={20} color="gray" style={profileStyles.settingicon3}/>
        </TouchableOpacity>
        <TouchableOpacity 
          style={profileStyles.settingsOption} 
          onPress={() => router.push('/inside/profile/notificationSettingScreen')}
        >
          <MaterialCommunityIcons name="bell" size={24} color="gray" style={profileStyles.settingicon2}/>
          <Text style={profileStyles.settingsOptionText}>Varslinger</Text>
          <Fontisto name="toggle-off" size={24} color="gray" style={profileStyles.settingicon3}/>
        </TouchableOpacity>
      </View>

      <View style={profileStyles.settingsSection2}>
      <TouchableOpacity 
          style={profileStyles.settingsOption} 
          onPress={() => router.push('/inside/profile/changePasswordScreen')}
        >
           <MaterialIcons name="bar-chart" size={24} color="gray" style={profileStyles.settingicon2}/>
          <Text style={profileStyles.settingsOptionText2}>Din aktivitet</Text>
          <MaterialIcons name="arrow-forward-ios" size={20} color="gray" style={profileStyles.settingicon3}/>
        </TouchableOpacity>
        <TouchableOpacity 
          style={profileStyles.settingsOption} 
          onPress={() => router.push('/inside/profile/changePasswordScreen')}
        >
          <Octicons name="person-fill" size={24} color="gray" style={profileStyles.settingicon2}/>
          <Text style={profileStyles.settingsOptionText1}>Rediger Profil</Text>
          <MaterialIcons name="arrow-forward-ios" size={20} color="gray" style={profileStyles.settingicon3}/>
        </TouchableOpacity>
        <TouchableOpacity 
          style={profileStyles.settingsOption} 
          onPress={() => router.push('/inside/profile/changePasswordScreen')}
        >
          <Ionicons name="invert-mode" size={24} color="gray" style={profileStyles.settingicon2}/>
          <Text style={profileStyles.settingsOptionText}>Dark mode</Text>
          <Fontisto name="toggle-off" size={24} color="gray" style={profileStyles.settingicon3}/>
        </TouchableOpacity>
        <TouchableOpacity 
          style={profileStyles.settingsOption} 
          onPress={() => router.push('/inside/profile/changePasswordScreen')}
        >
          <MaterialIcons name="language" size={24} color="gray" style={profileStyles.settingicon2}/>
          <Text style={profileStyles.settingsOptionText}>Spårk</Text>
          <MaterialIcons name="arrow-forward-ios" size={20} color="gray" style={profileStyles.settingicon3}/>
        </TouchableOpacity>

      {/* Log Out Button */}
      <TouchableOpacity style={profileStyles.logoutButton} onPress={() => console.log('Logout pressed')}>
        <Text style={profileStyles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
      </View>
      </View>

    </ScrollView>

)};export default ProfileScreen;

