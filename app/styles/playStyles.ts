import { StyleSheet, Dimensions} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const playStyle = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    starcontainer: {
        flexDirection: 'row',
        marginHorizontal: 'auto',
    },
    backgroundcontainer: {
        backgroundColor: '#9faba0',
        marginBottom: hp('1%'),
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: '#eee',
    },
    videoContainer: {
        justifyContent: 'center',
        height: hp('25%'),
        backgroundColor: '#e0e0e0',
        borderRadius: hp('2%'),
        marginTop: hp('12%'),
        marginBottom: hp('8%'),
        width: wp('96%'),
        marginHorizontal: wp('2.4%'),
    },
    playButton: {
        alignItems: 'center',
    },
    aboutSection: {
        marginVertical: hp('1.5%'),
    },
    aboutTitle: {
        fontSize: hp('2%'),
        fontWeight: 'bold',
        color: 'black',
        paddingLeft: wp('6%'),
    },
    aboutTitle1: {
        fontSize: hp('2.4%'),
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginTop: hp('0.2%'),
        marginBottom: hp('2%'),
    },
    aboutText: {
        fontSize: hp('1.2%'),
        textAlign: 'center',
        color: 'black',
        marginBottom: hp('1%'),
    },
    recommendedSection: {
        marginVertical: 20,
    },
    recommendedTitle: {
        fontSize: hp('2.5%'),
        fontWeight: '600',
        color: 'black',
        marginBottom: hp('1.5%'),
        paddingLeft: wp('6%'),
    },
    recommendedVideo: {
        alignItems: 'center',
        marginRight: wp('2%'),
        backgroundColor: '#e0e0e0',
        paddingVertical: hp('1%'),
        width: wp('25%'),
        borderRadius: hp('1.5%'),
        borderColor: 'gray',
        borderWidth: hp('0.02%'),
        left: wp('4%'),
        marginBottom: hp('10%'),
    },
    recommendedplay: {
        top: hp('1%'),
    },
    recommendedVideoTitle: {
        marginTop: 5,
        fontSize: 12,
        color: '#888',
    },
    Feedbackcontainer: {
        paddingVertical: hp('3%'),
        borderColor: '#b3b3b3',
        backgroundColor: '#ebebeb',
        borderRadius: hp('0.5%'),
        color: '#737373',
        borderWidth: wp('0.05%'),
        marginBottom: hp('1.5%'),
        marginHorizontal: wp('6%'),
        paddingLeft: wp('3%'),
    },
    FeedbackInput: {
        fontSize: hp('1.2%'),
        paddingLeft: wp('1.5%'),
        bottom: hp('1.5%'),
    },
    submitbtn: {
        backgroundColor: '#9faba0',
        marginHorizontal: wp('6%'),
        borderRadius: hp('0.5%'),
        paddingVertical: hp('0.8%'),
    },
    submitText: {
        fontSize: hp('1.5%'),
        textAlign: 'center',
        color: 'white',
        fontWeight: '800',
    },
    line: {
        fontWeight: '100',
        color: 'gray',
        textAlign: 'center',
        bottom: hp('0.5%'),
    },
    line1: {
        fontWeight: '200',
        color: 'black',
        bottom: hp('1.5%'),
        textAlign: 'center',
    },
    backButton: {
        top: hp('10%'),
        paddingLeft: wp('4%')
    },
});export default playStyle;
  