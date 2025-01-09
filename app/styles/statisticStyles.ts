import { StyleSheet, Dimensions} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const statisticStyle = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderBottomWidth: hp('0.02%'),
        height: hp('23%')
    },
    headercontainer: {
       height: hp('10%'),
       bottom: hp('6%')
    },
    secondcontainer: {
        backgroundColor: 'white',
    },
    Pcontainer: {
        height: hp('10%'),
        marginTop: hp('4%')
    },
    header: {
        marginTop: hp('2%')
    },
    headerText: {
        textAlign: 'center',
        fontSize: hp('3%'),
        fontWeight: '600',
        marginTop: hp('6%'),
    },
    bellicon: {
        left: wp('85%'),
        bottom: hp('9%')
    },
    circle:{
      backgroundColor: '#ffffff',
      paddingVertical: hp('2.2%'),
      width: wp('10%'),
      borderRadius: hp('20%'),
      borderWidth: hp('0.02%'),
      borderColor: 'gray',
      top: hp('2%'),
    },
    calendar: {
      left: wp('2.4%'),
      bottom: hp('1.6%'),
    },
    button: {
        paddingVertical: hp('1%'),
        backgroundColor: 'lightgray',
        borderRadius: hp('4%'),
        marginHorizontal: wp('20%'),
    },
    buttonText: {
        textAlign: 'center',
        fontSize: hp('1.5%'),
        fontWeight: '700',
        color: 'green',
    },
    subText: {

    },
    subText1: {

    },
    subsubText: {

    },
    Wcontainer: {
    },
    weeks: {
        textAlign: 'center',
    },
});export default statisticStyle;