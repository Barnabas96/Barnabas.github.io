import { StyleSheet, Dimensions} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const kategorierStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: hp('10%'),
    },
    backgroundcontainer: {
        marginBottom: hp('1.5%'),
        height: hp('30%'),
        overflow: 'hidden',
        borderBottomLeftRadius: hp('3%'),
        borderBottomRightRadius: hp('3%'),
    },
    Mapstructure: {
        marginTop: hp('1.5%'),
        alignItems: 'center',
    },
    Mapcontainer: {
        height: hp('28%'),
        backgroundColor: 'gray',
        borderRadius: hp('3%'),
        marginLeft: wp('10%'),
        right: wp('5%'),
        width: wp('65%'),
        overflow: 'hidden',
        marginBottom: hp('4%'),
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.5,
        shadowColor: "grey",
        shadowRadius: 5,
    },
    MapheaderText: {
        fontSize: hp('2.8%'),
        fontWeight: '600',
        color: 'white',
        marginTop: hp('20%'),
        marginLeft: wp('2%'),
    },
    MapsubText: {
        fontSize: hp('1.9%'),
        fontWeight: '700',
        color: 'white',
        marginTop: hp('0.5%'),
        marginLeft: wp('2%'),
    },
    header: {
        fontSize: hp('2.9%'),
        fontWeight: '600',
        color: 'white',
        textAlign: 'center',
        bottom: hp('24%'),
    },
    headerText: {
        fontSize: hp('2.2%'),
        fontWeight: '400',
        color: 'white',
        paddingLeft: wp('8%'),
        bottom: hp('17%'),
    },
    headerText1: {
        fontSize: hp('3.2%'),
        fontWeight: '600',
        color: 'white',
        paddingLeft: wp('8%'),
        bottom: hp('20.5%'),
    },
    backButton: {
        bottom: hp('28%'),
        paddingLeft: wp('7%')
    },
    Searchcontainer: {
        opacity: 0.9,
        backgroundColor: '#a6a6a6',
        borderRadius: hp('2.5%'),
        borderWidth: hp('0.02%'),
        borderColor: 'white',
        height: hp('3%'),
        width: wp('55%'),
        marginBottom: hp('1%'),
        marginLeft: wp('7.5%'),
        bottom: hp('20%'),
      },
      SearchText: {
        fontSize: hp('1.5%'),
        fontWeight: '500',
        color: 'white',
        top: hp('0.6%'),
        paddingLeft: wp('4.6%'),
      },
      searchicon: {
        paddingLeft: wp('46%'),
        bottom: hp('1.5%'),
      },
      line: {
        fontWeight: '100',
        textAlign: 'center',
        color: 'gray',
      },
});export default kategorierStyle;