import { StyleSheet, Dimensions} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const globalStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
      },
      Logincontainer: {
        alignContent: 'center',
        flexDirection: 'row',
        borderTopLeftRadius: wp('14%'),
        borderTopRightRadius: wp('14%'),
        backgroundColor: '#ffffff',
        opacity: 0.78,
        shadowColor: 'gray',
        paddingHorizontal: wp('7%%'),
        width: wp('90%'),
        height: hp('80%'),
        top: hp('8%'),
        left: wp('5%'),
      },
      Indexcontainer: {
        borderTopLeftRadius: wp('14%'),
        borderBottomLeftRadius: wp('14%'),
        backgroundColor: '#ffffff',
        opacity: 0.78,
        shadowColor: 'gray',
        padding: wp('6%'),
        width: wp('86%'),
        height: hp('60%'),
        left: wp('14%'),
        top: hp('29%'),
      },
      title: {
        fontSize: 30,
        marginTop: 10,
        marginBottom: 60,
        textAlign: 'center',
        color: '#595959',
      },
      Logintitle: {
        textAlign: 'center',
        paddingHorizontal: wp('2.5%'),
        fontSize: hp('5%'),
        fontWeight: '500',
        color: '#black',
        bottom: hp('69.5%')
      },  
      Indextitle: {
        fontSize: hp('5%'),
        marginBottom: hp('2%'),
        color: 'Black',
        fontWeight: '500',
      },  
      Text: {
        fontSize: hp('1.2%'),
        textAlign: 'center',
        color: 'black',
        bottom: hp('50%'),
      },
      input: {
        height: 40,
        borderColor: '#b3b3b3',
        backgroundColor: 'white',
        shadowColor: 'gray',
        borderRadius: 14,
        color: '#737373',
        borderWidth: 0,
        marginBottom: 10,
        paddingLeft: 8,
        paddingVertical: 8,
      },
      LoginInput: {
        fontSize: hp('2%'),
        height: hp('4.2%'),
        borderColor: '#b3b3b3',
        backgroundColor: 'white',
        borderRadius: wp('3%'),
        color: '#737373',
        borderWidth: wp('0.2%'),
        marginBottom: hp('2%'),
        marginHorizontal: wp('7%'),
        paddingLeft: wp('4%'),
        bottom: hp('69%'),
        width: wp('76%'),
        left: wp('5%'), //5% is the start point of the inner container
      },
      linkText: {
        textAlign: 'center',
        color: 'black',
      },
      Forgotpasswordlink: {
        textAlign: 'center',
        fontSize: hp('1.8%'),
        color: 'black',
        bottom: hp('53.5%')
      },
      linkTextHome: {
        fontSize: hp('3%'),
        marginVertical: hp('1%'),
        textAlign: 'center',
        color: 'white',
        fontWeight: '500',
      },
      button: {
        backgroundColor: '#696969',
        paddingVertical: 12,
        borderRadius: 25,
        marginTop: 5,
        alignItems: 'center',
      },
      Indexbutton: {
        backgroundColor: '#62b547', // Primary button color
        marginHorizontal: wp('10%'),
        borderRadius: hp('10%'),
        paddingVertical: hp('0.2'),
        width: wp('65%'),
        top: hp('14%'),
        left: wp('14%'),
        marginTop: hp('3%'),
        alignItems: 'center',
        textAlign: 'center',
      },
      Loginbutton: {
        backgroundColor: '#62b547',
        paddingVertical: hp('1.2%'),
        marginHorizontal: wp('14%'),
        borderRadius: wp('10%'),
        width: wp('62%'),
        alignItems: 'center',
        bottom: hp('35%'),
        left: wp('5%'),
      },
      buttonText: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
      },
      SkipButtonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: '700',
        textAlign: 'center',
      },
      LoginbuttonText: {
        color: '#fff',
        fontSize: hp('3%'),
        fontWeight: '600',
      },
      subtitle: {
        fontSize: 18,
        marginBottom: 30,
        textAlign: 'center',
        color: '#555', // Subtitle color for contrast
      },
      Indexsubtitle: {
        fontSize: hp('2.5%'),
        marginBottom: hp('1%'),
        color: 'black', // Subtitle color for contrast
        fontWeight: '600',
      },
      subsubtitle: {
        fontSize: hp('1.4%'),
        lineHeight: hp('1.8%'),
        color: 'black', // Subtitle color for contrast
      },
      
  recommendedSection: {
    marginVertical: 20,
  },
  recommendedTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  recommendedVideo: {
    alignItems: 'center',
    marginRight: 15,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  recommendedVideoTitle: {
    marginTop: 5,
    fontSize: 12,
    color: '#888',
  },
  headerBackground: {
    width: 200,
    height: 200,
  },
  backButton: {
    marginTop: hp('8%'),
    paddingLeft: wp('7%'),
  },
});export default globalStyle;