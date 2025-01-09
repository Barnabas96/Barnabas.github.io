import { StyleSheet, Dimensions} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const planStyle = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexBasis: 50,
        flexGrow: 1,
        backgroundColor: 'white',
        top: hp('10%'),
        paddingVertical: hp('10%'),
        borderTopRightRadius: hp('4%'),
        borderTopLeftRadius: hp('4%'),
      },
      headerbackground: {
        overflow: 'hidden',
      },
      title: {
        marginLeft: wp('15%'),
        fontSize: hp('3.5%'),
        fontWeight: '500',
        bottom: hp('5%'),
        marginBottom: hp('2%')
      },
      backButton: {
        marginTop: hp('8%'),
        paddingLeft: wp('7%'),
      },
      levels: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      },
      levelbutton: {
        backgroundColor: '#eee',
        width: wp('22%'),
        borderRadius: hp('1%'),
        height: hp('2.6%'),
        borderWidth: hp('0.1%'),
        borderColor: '#dedcdc',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.5,
        shadowColor: "grey",
        shadowRadius: 4,
        marginBottom: hp('2%'),
        bottom: hp('5%')
      },
      leveltitle: {
        marginTop: hp('0.2%'),
        textAlign: 'center',
      },
      header1: {
        fontSize: hp('2.8%'),
        marginLeft: wp('11%'),
        marginBottom: hp('3%'),
        bottom: hp('5%')
      },
      videoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eee',
        marginHorizontal: wp('10%'),
        borderRadius: hp('3%'),
        height: hp('11%'),
        marginBottom: hp('4%'),
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 1,
        shadowColor: "grey",
        shadowRadius: 5,
        overflow: 'hidden',
        bottom: hp('5%')
      },
      videoDetails: {
        flex: 1,
      },
      videoTitle: {
        fontSize: hp('2%'),
        fontWeight: '700',
        color: 'gray',
        right: wp('15%'),
        marginBottom: hp('0.5%')
      },
      videoDescription: {
        fontSize: hp('1.2%'),
        fontWeight: '400',
        color: 'gray',
        right: wp('15%'),
        marginBottom: hp('0%'),
      },
});export default planStyle;