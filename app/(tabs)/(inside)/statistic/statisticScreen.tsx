import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import statisticStyles from '../../../styles/statisticStyles';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useRouter, Link, } from 'expo-router'; // Use useRouter for navigation
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Circle, Svg, Text as SvgText} from 'react-native-svg';


const weeklyProgress = [
    { id: '1', title: '39' },
    { id: '2', title: '40' },
    { id: '3', title: '41' },
    { id: '4', title: '' },
    { id: '5', title: '' },
    { id: '6', title: '' },
    { id: '7', title: '' },
    { id: '8', title: '' },
    { id: '9', title: '' },
    { id: '10', title: '' },
];

const CircularProgress = ({ percentage }) => {
    const radius = 60;
    const strokeWidth = 20;
    const circumference = 2 * Math.PI * radius;
    const progress = (1 - percentage / 100) * circumference;


    return (
        <View style={{ position: 'relative', width: "100%", height: "25%", alignItems: 'center', justifyContent: 'space-evenly', top: '25%'}}>
          <View
            style={{
              position: 'absolute',
              top: strokeWidth / 10, // Position at top perimeter of the circle
              left: '50%',
              transform: [{ translateX: -8 }], // Center horizontally (assuming arrow width is 16px)
              zIndex: 1, // Ensure it's layered above the circle
            }}
          >
            <MaterialIcons name="arrow-forward" size={10} color="white" left="50%" bottom="190%"/>
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



const StatisticScreen = () => {
    const router = useRouter(); 
    return (
        <View>
        <View style={statisticStyles.container}>
            <View style={statisticStyles.header}>
            <Text style={statisticStyles.headerText}>
                Uke 42
            </Text>
            
            <TouchableOpacity>
                <View style={statisticStyles.bellicon}>
                <View style={statisticStyles.circle}></View>
                <View style={statisticStyles.calendar}>
                <FontAwesome5 name="calendar-alt" size={24} color="black" onPress={() => router.push('/calendar/calendarScreen')}/>
                </View>
                </View>
            </TouchableOpacity>
            
            <View style={statisticStyles.headercontainer}>
            <ScrollView
          horizontal={true}
          >
            {weeklyProgress.map((weeklyProgress) => (
              <TouchableOpacity key={weeklyProgress.id} style={statisticStyles.Wcontainer}>
                <Text style={statisticStyles.weeks}>{weeklyProgress.title}</Text>
                <CircularProgress percentage={percentage} />
              </TouchableOpacity>
            ))}
          </ScrollView>
          </View>
          </View>
        </View>
        
        <View style={statisticStyles.secondcontainer}>
            <View style={statisticStyles.Pcontainer}>
        <CircularProgress percentage={percentage} />
        </View>
        
        <Text style={statisticStyles.subText}>
            Ukentlig progresjon
        </Text>
        <Text style={statisticStyles.subText1}>
            10/40 minutter
        </Text>

        <Text style={statisticStyles.subsubText}>
            Totalt 60 minutter
        </Text>
        <View>
        <TouchableOpacity style={statisticStyles.button}>
            <Text style={statisticStyles.buttonText}>
                Endre progresjon mål
            </Text>
        </TouchableOpacity>
        </View>
        </View>
        </View>
    )
};

export default StatisticScreen;