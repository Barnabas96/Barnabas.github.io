import { NavigationContainer } from '@react-navigation/native';
import VideoScreen from "./(inside)/home/videoScreen";
import  KategorierScreen from "./(inside)/video/kategoriScreen"
import  ProfilScreen from "./(inside)/profile/profileScreen"
import  CalendarScreen from "./(inside)/home/calendarScreen"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tabs } from 'expo-router';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Octicons from '@expo/vector-icons/Octicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import StatisticScreen from './(inside)/statistic/statisticScreen';
import tabStyle from '../styles/tabStyles';


// const Tab = createBottomTabNavigator();

export default function Tablayout() {
  return (
      <Tabs 
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {...tabStyle.tabcontainer},
          headerShown: false,
        }}
        initialRouteName="(inside)/home"
      >
          <Tabs.Screen
          
          name="(inside)/home"
          // component={VideoScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <AntDesign name="home" size={26} color="black" />
            ),
          }}
          />

          <Tabs.Screen
          name="(inside)/video"
          // component={KategorierScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Play',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="motion-play-outline" size={30} color="black" />
            ),
          }}
          />

          <Tabs.Screen
          name="(inside)/statistic/statisticScreen"
          // component={StatisticScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Statistic',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="bar-chart" size={30} color="black" />
            ),
          }}
          />

          <Tabs.Screen
          name="(inside)/profile"
          // component={ProfilScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Profil',
            tabBarIcon: ({ color }) => (
              <Octicons name="person-fill" size={26} color="black" />
            ),
          }}
          />
      </Tabs>
      
  )
}


// export default function TabLayout() {
//   return (
//     <NavigationContainer>
//     <Tabs screenOptions={{ headerShown: false }}>
//       <Tabs.Screen
//         name="introduction"
//         options={{ title: 'Introduction' }}
//       />
//       <Tabs.Screen
//         name="video"
//         options={{ title: 'Videos' }}
//       />
//       <Tabs.Screen
//         name="profile"
//         options={{ title: 'Profile' }}
//       />
//     </Tabs>
//     </NavigationContainer>
//   );
// }
