import { StyleSheet, Dimensions} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const calendarStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        textAlign: 'center',
        fontSize: hp('3%'),
        fontWeight: '600',
        marginTop: hp('8%'),
        marginBottom: hp('3%'),
        color: '#555555'
    },
});export default calendarStyle;