import React, { useState } from 'react';
import { useRouter, Link, } from 'expo-router';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, ImageBackground } from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import kategorierStyles from '../../../styles/kategorierStyles';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import PlanScreen from './planScreen'


const KategorierScreen = () => {
    const [search, setSearch] = useState('');
    const router = useRouter();

    const navigateToPlan = () => {
        console.log("Navigating to PlanScreen");
        router.push('/(inside)/video/planScreen');  // Push the route based on file structure
      };
      
    return (
    <ScrollView>
    {/* Video Play Section */}
    
    <View style={kategorierStyles.backgroundcontainer}>
    <ImageBackground source={require("../../../../assets/Kategorier1.png")} style={{width: '100%', height: '100%',}}></ImageBackground>
    <View>
    <Text style={kategorierStyles.header}>Core Capacity</Text>
    <Text style={kategorierStyles.headerText}>Kategorier</Text>
    <TouchableOpacity style={kategorierStyles.backButton} onPress={() => router.back()}>
    <EvilIcons name="arrow-left" size={45} color="white" />
    </TouchableOpacity>
    </View>


    <View>
        <Text style={kategorierStyles.headerText1}>Finn Din Trening</Text>
    </View>

    <View style={kategorierStyles.Searchcontainer}>

    <TextInput
    style={kategorierStyles.SearchText}
    placeholder="Søk her..."
    placeholderTextColor={'white'}
    value={search}
    onChangeText={setSearch}
    />

    <TouchableOpacity style={kategorierStyles.searchicon}>
    <FontAwesome name="search" size={18} color="white"/>
    </TouchableOpacity>
    </View>
    </View>

   <View style={kategorierStyles.Mapstructure}>
    <TouchableOpacity
    onPress={navigateToPlan}
    >
    <View style={kategorierStyles.Mapcontainer}>
        <ImageBackground source={require("../../../../assets/Mapimage.png")} style={{width: '100%', height: '100%'}}>
        <Text style={kategorierStyles.MapheaderText}>Rygg Mage Plan</Text>  
        <Text style={kategorierStyles.MapsubText}>20 videor 3 Nivåer</Text>  
        </ImageBackground>
    </View>
    </TouchableOpacity>

    <TouchableOpacity
    onPress={navigateToPlan}
    >
    <View style={kategorierStyles.Mapcontainer}>
        <ImageBackground source={require("../../../../assets/Mapimage.png")} style={{width: '100%', height: '100%'}}>
        <Text style={kategorierStyles.MapheaderText}>Nakke Skulder Plan</Text>  
        <Text style={kategorierStyles.MapsubText}>27 videor 3 Nivåer</Text>  
        </ImageBackground>
    </View>
    </TouchableOpacity>

    <TouchableOpacity>
    <View style={kategorierStyles.Mapcontainer}>
        <ImageBackground source={require("../../../../assets/Mapimage.png")} style={{width: '100%', height: '100%'}}>
        <Text style={kategorierStyles.MapheaderText}>Plan</Text>  
        <Text style={kategorierStyles.MapsubText}>0 videor 3 Nivåer</Text>  
        </ImageBackground>
    </View>
    </TouchableOpacity>

    <TouchableOpacity>
    <View style={kategorierStyles.Mapcontainer}>
        <ImageBackground source={require("../../../../assets/Mapimage.png")} style={{width: '100%', height: '100%'}}>
        <Text style={kategorierStyles.MapheaderText}>Plan</Text>  
        <Text style={kategorierStyles.MapsubText}>0 videor 3 Nivåer</Text>  
        </ImageBackground>
    </View>
    </TouchableOpacity>
    </View>

    </ScrollView>
)};export default KategorierScreen;