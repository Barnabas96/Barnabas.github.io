import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter, Stack } from 'expo-router'; 
import EvilIcons from '@expo/vector-icons/EvilIcons';
import playStyles from '../../../../app/styles/playStyles';

const recommendedVideos = [
    { id: '1', title: '' },
    { id: '2', title: '' },
    { id: '3', title: '' },
    { id: '4', title: '' },
    { id: '5', title: '' },
    { id: '6', title: '' },
    { id: '7', title: '' },
    { id: '8', title: '' },
    { id: '9', title: '' },
    { id: '10', title: '' },
];
const PlayScreen = () => {
  const [feedback, setFeedback] = useState('');
  const router = useRouter();
  return (
    <>
      {/* Custom Header */}
      <Stack.Screen
        options={{
          headerRight: () => (
            <TouchableOpacity onPress={() => router.push('/inside/profile/profileScreen')}>
              <Ionicons name="person-circle-outline" size={30} color="#888" />
            </TouchableOpacity>
          ),
        }}
      />
      <ScrollView contentContainerStyle={playStyles.container}>
        {/* Video Play Section */}
        <View style={playStyles.backgroundcontainer}>
        <TouchableOpacity style={playStyles.backButton} onPress={() => router.back()}>
        <EvilIcons name="arrow-left" size={50} color="white" />
        </TouchableOpacity>
        
        <View style={playStyles.videoContainer}>
          <TouchableOpacity style={playStyles.playButton}>
          <AntDesign name="playcircleo" size={100} color="white" />
            <Text></Text>
          </TouchableOpacity>
        </View>
        </View>
        {/* About Section */}
        <View style={playStyles.aboutSection}>
          <Text style={playStyles.aboutTitle}>Feedback</Text>
          <Text style={playStyles.line}>____________________________________________________</Text>
          <Text style={playStyles.aboutTitle1}>Hvordan føler du etter denne økten?</Text>
          <Text style={playStyles.aboutText}>
            Din kommentar hjelper oss å forstå behvoene dine {"\n"}bedre og forbedre tjenestene våres
          </Text>
          <View style={playStyles.starcontainer}>
              <TouchableOpacity>
              <Feather name="star" size={20} color="gray" />
              </TouchableOpacity>
              <TouchableOpacity>
              <Feather name="star" size={20} color="gray" />
              </TouchableOpacity>
              <TouchableOpacity>
              <Feather name="star" size={20} color="gray" />
              </TouchableOpacity>
              <TouchableOpacity>
              <Feather name="star" size={20} color="gray" />
              </TouchableOpacity>
              <TouchableOpacity>
              <Feather name="star" size={20} color="gray" />
              </TouchableOpacity>
          </View>
        </View>

        <View style={playStyles.Feedbackcontainer}>
        <TextInput
        style={playStyles.FeedbackInput}
        placeholder="Add a Comment..."
        value={feedback}
        onChangeText={setFeedback}
        />
        </View>

        <View>
        <TouchableOpacity style={playStyles.submitbtn}>
        <Text style={playStyles.submitText}>Submit</Text>
        </TouchableOpacity>
        </View>


        {/* Recommended Videos Section */}
        <View style={playStyles.recommendedSection}>
        <Text style={playStyles.line1}>____________________________________________________</Text>
          <Text style={playStyles.recommendedTitle}>Recommended</Text>
          
          <ScrollView 
          horizontal={true}
          >
            {recommendedVideos.map((video) => (
              <TouchableOpacity key={video.id} style={playStyles.recommendedVideo}>
                <View style={playStyles.recommendedplay}>
                <AntDesign name="playcircleo" size={30} color="white" />
                </View>
                <Text style={playStyles.recommendedVideoTitle}>{video.title}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </>
  );
};export default PlayScreen;
