import React, { useState } from 'react';
import { useRouter, Link, } from 'expo-router';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, ImageBackground } from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import planStyles from '../../../styles/planStyles';

const video = [
    { id: '1', title: 'Rygg Mage Øvelse', description: '20 minutter    Middels Nivå' },
    { id: '2', title: 'Rygg Mage Øvelse', description: '20 minutter    Middels Nivå' },
    { id: '3', title: 'Rygg Mage Øvelse', description: '20 minutter    Middels Nivå' },
    { id: '4', title: 'Rygg Mage Øvelse', description: '20 minutter    Middels Nivå' },
    { id: '5', title: 'Rygg Mage Øvelse', description: '20 minutter    Middels Nivå' },
    { id: '6', title: 'Rygg Mage Øvelse', description: '20 minutter    Middels Nivå' },
    { id: '7', title: 'Rygg Mage Øvelse', description: '20 minutter    Middels Nivå' },
    { id: '8', title: 'Rygg Mage Øvelse', description: '20 minutter    Middels Nivå' },
    { id: '9', title: 'Rygg Mage Øvelse', description: '20 minutter    Middels Nivå' },
    { id: '10', title: 'Rygg Mage Øvelse', description: '20 minutter    Middels Nivå' },
];

const PlanScreen = () => {
    const router = useRouter();
    {/*Render each video item*/}
      const renderVideoItem = ({ item }) => (
          <View style={planStyles.videoDetails}>
            <TouchableOpacity style={planStyles.videoContainer} onPress={() => router.push('/video/playScreen')}>
            <ImageBackground source={require("../../../../assets/planimage1.png")} style={{width: '100%', height: '100%'}}>
            <View>
            <Text style={planStyles.videoTitle}>{item.title}</Text>
            <Text style={planStyles.videoDescription}>{item.description}</Text>
            <AntDesign name="playcircleo" size={20} color="white" />
            </View>
            </ImageBackground>
            </TouchableOpacity>
    
          </View>
);
    return (
        <View>
        <ScrollView>
            <View style={planStyles.headerbackground}>
        <ImageBackground source={require("../../../../assets/Index.png")} style={{flex: 1, width: '100%', height: '240%'}}>
            
        <TouchableOpacity style={planStyles.backButton} onPress={() => router.back()}>
       <EvilIcons name="arrow-left" size={50} color="white" />
       </TouchableOpacity>
       </ImageBackground>
       <View style={planStyles.container}>


       <Text style={planStyles.title}>Rygg Mage Plan</Text>

       <View style={planStyles.levels}>
        <TouchableOpacity style={planStyles.levelbutton}>
            <Text style={planStyles.leveltitle}>Lett</Text>
        </TouchableOpacity>

        <TouchableOpacity style={planStyles.levelbutton}>
            <Text style={planStyles.leveltitle}>Middels</Text>
        </TouchableOpacity>

        <TouchableOpacity style={planStyles.levelbutton}>
            <Text style={planStyles.leveltitle}>Intens</Text>
        </TouchableOpacity>
       </View>

       <View>
        <Text style={planStyles.header1}>Middels Nivå</Text>
       </View>

       {video.map((item) => (
              <TouchableOpacity key={item.id} style={planStyles.videoContainer} onPress={() => router.push('/video/playScreen')}>
                <ImageBackground source={require("../../../../assets/planimage1.png")} style={{width: '55%', height: '100%'}}>
                <AntDesign name="playcircleo" size={45} color="white" top='26%' left='15%'/>
                </ImageBackground>
                <View>
                <Text style={planStyles.videoTitle}>{item.title}</Text>
                <Text style={planStyles.videoDescription}>{item.description}</Text>
                </View>
              </TouchableOpacity>
       ))}
       </View>
       </View>
    </ScrollView>

    </View>

)};export default PlanScreen;