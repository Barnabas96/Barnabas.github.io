import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import calendarStyles from '../../../styles/calendarStyles';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


const CalendarScreen = () => {
    return (
        <View style={calendarStyles.container}>
            <Text style={calendarStyles.header}>
                Activity calendar
            </Text>
            <View>
            <CalendarList
                style={{
                borderWidth: 1,
                borderColor: 'gray',
                height: hp('100%'),
                borderTopLeftRadius: hp('6%'),
                borderTopRightRadius: hp('6%'),
                 }}
                theme={{
                textMonthFontSize: hp('2.5%'),
                textMonthFontWeight: '700',
                textDayFontSize: hp('2%'),
                textDayFontWeight: '700',
                textDayHeaderFontWeight: '700',
                dayTextColor: 'white',
                monthTextColor: '#555555',
                textSectionTitleColor: '#555555',
                calendarBackground: '#d5d5d5',
                selectedDayTextColor: 'green',
                selectedDayBackgroundColor: 'false',
                }}
                // Specify the current date
                current={'2024-09-01'}
                // Callback that gets called when the user selects a day
                onDayPress={day => {
                    console.log('selected day', day);
                }}
                // Mark specific dates as marked
                markedDates={{
                    '2024-09-16': {selected: true, selectedTextColor: '#60b358'},
                    '2024-09-17': {selected: true, selectedTextColor: '#60b358'}
                }}
                />
            </View>
        </View>
        
    )
};

export default CalendarScreen;