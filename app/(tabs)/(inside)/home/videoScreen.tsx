import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView, TextInput, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons like back arrow and play button
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useRouter, Link, } from 'expo-router'; // Use useRouter for navigation
import videoStyles from '../../../styles/videoStyles';
import PlayScreen from '../video/playScreen';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native'
import { Circle, Svg, Text as SvgText} from 'react-native-svg';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';


const CircularProgress = ({ percentage }) => {
  const radius = 50;
  const strokeWidth = 20;
  const circumference = 2 * Math.PI * radius;
  const progress = (1 - percentage / 100) * circumference;

  return (
    <View style={{ position: 'relative', width: 120, height: 120, alignItems: 'center', justifyContent: 'center', left: '65%', bottom: '60%'}}>
      <View
        style={{
          position: 'absolute',
          top: strokeWidth / 10, // Position at top perimeter of the circle
          left: '50%',
          transform: [{ translateX: -8 }], // Center horizontally (assuming arrow width is 16px)
          zIndex: 1, // Ensure it's layered above the circle
        }}
      >
        <MaterialIcons name="arrow-forward" size={16} color="white" left="50%"/>
      </View>
      <Svg height="120" width="120">
        <Circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#c1cbbf"
          strokeWidth={strokeWidth}
          opacity="0.8"
          fill="none"
        />
        <Circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#60b358"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={progress}
          strokeLinecap="round" // This adds rounded ends
          transform="rotate (-90 60 60)"
        />
        <SvgText
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          fontSize="20"
          fill="#333"
        >
          {`${percentage}%`}
        </SvgText>
      </Svg>
    </View>
  );
};
 

const percentage = 15;



const videos = [
    { id: '1', title: 'Rygg Mage Øvelse', description: '20 minutter    Middels Nivå' },
    { id: '2', title: 'Nakke Skuldre Øvelse', description: '25 minutter    Middels Nivå' },
    { id: '3', title: 'Video 3', description: 'lorem lorem..' },
    { id: '4', title: 'Video 4', description: 'lorem lorem..' },
    { id: '5', title: 'Video 5', description: 'lorem lorem..' }, // Corrected duplicate IDs
    { id: '6', title: 'Video 6', description: 'lorem lorem..' },
    { id: '7', title: 'Video 7', description: 'lorem lorem..' },
    { id: '8', title: 'Video 8', description: 'lorem lorem..' },
    { id: '9', title: 'Video 9', description: 'lorem lorem..' },
    { id: '10', title: 'Video 10', description: 'lorem lorem..' },
];



const VideoScreen = () => {


  const router = useRouter(); 
{/*Render each video item*/}
  const renderVideoItem = ({ item }) => (
      <View style={videoStyles.videoDetails}>
        <TouchableOpacity style={videoStyles.videoContainer} onPress={() => router.push('/video/playScreen')}>
        <ImageBackground source={require("../../../../assets/videoScreen1.png")} style={{width: '100%', height: '100%'}}>
        <View>
        <Text style={videoStyles.videoTitle}>{item.title}</Text>
        <Text style={videoStyles.videoDescription}>{item.description}</Text>


        <TouchableOpacity style={videoStyles.marks}>
        <FontAwesome6 name="bookmark" size={27} color="white" />
        </TouchableOpacity>
        </View>
        </ImageBackground>
        </TouchableOpacity>

      </View>
  );
  return (
    <View style={videoStyles.container}>
      {/* Main Title */}
      <View style={videoStyles.header}>
        <Text style={videoStyles.headerText}>Velkommen</Text>
        <Text style={videoStyles.headerText1}>Brukernavn!</Text>
        <TouchableOpacity>
        <View style={videoStyles.bellicon}>
        <View style={videoStyles.circle}></View>
          <View style={videoStyles.calendar}>
          <FontAwesome5 name="calendar-alt" size={24} color="gray" onPress={() => router.push('./calendarScreen')}/>
        </View>
        </View>
        </TouchableOpacity>
      </View>
      
      <ScrollView>

      <Text style={videoStyles.headerText2}>
        Aktivitet
      </Text>
      
      <View style={videoStyles.Pcontainer}>
        <Text style={videoStyles.PheaderText}>Ukentlig progresjon</Text>
        <Text style={videoStyles.PsubText}>10/40 minutter</Text>

        <CircularProgress percentage={percentage} />

      </View>


      
       
      <Text style={videoStyles.headerText3}>
        For deg
      </Text>

      <View style={videoStyles.Gcontainer}>
        <Text style={videoStyles.GheaderText}>Anbefalt basert på din data</Text>
        <View style={videoStyles.GXScontainer}>
          <Text style={videoStyles.GxsText}>
            Trening generert ved hjelp av dataanalyse og AI
          </Text>

          <Text style={videoStyles.GxsText1}>
            Fullfør registering og oppgi data {"\n"}for å få en personlig tilpasset {"\n"}video.
          </Text>

          <View style={videoStyles.icon}>
          <Feather name="info" size={18} color="green" />
          </View>

          <View>
          <TouchableOpacity style={videoStyles.Gbutton}>
            <Text style={videoStyles.GbuttonText}>
              Gå til konto redigering
            </Text>
          </TouchableOpacity>
          </View>

        </View>
        <Text style={videoStyles.GsubText}>
          Rygg Mage
        </Text>
        <Text style={videoStyles.GsubsubText}>
          Middels Nivå 20 minutter
        </Text>
      </View>
      </ScrollView>
    </View>
    
  );
};export default VideoScreen;