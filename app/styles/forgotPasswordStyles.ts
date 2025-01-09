import { StyleSheet, Dimensions} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const forgotPasswordStyle = StyleSheet.create({
    Passwordcontainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: wp('3%')
    },
    Passwordtitle: {
    fontSize: hp('2.5%'),
    marginBottom: hp('6%'),
    textAlign: 'center',
    color: 'black',
    fontWeight: '500',
    },  
    PasswordInput: {
    textAlign: 'center',
    fontSize: hp('2%'),
    height: hp('4%'),
    borderColor: 'gray',
    backgroundColor: 'white',
    borderRadius: wp('3.5%'),
    borderWidth: wp('0.2%'),
    marginBottom: hp('5%'),
    paddingVertical: hp('2%'),
    fontWeight: '700',
    marginHorizontal: wp('15%'),
    },
    Passwordsubtitle: {
fontSize: hp('1.5%'),
    marginBottom: hp('5%'),
    textAlign: 'center',
    color: 'black', // Subtitle color for contrast
    },
    Passwordbutton: {
    alignItems: 'center',
    backgroundColor: '#62b547',
    paddingVertical: hp('0.6%'),
    borderRadius: wp('3.6%'),
    marginTop: hp('0.2%'),
    width: wp('30%'),
    marginBottom: hp('25%'),
    marginHorizontal: 'auto',
    },
    PasswordbuttonText: {
        color: '#fff',
        fontSize: hp('2%'), //percent of height device screen
        fontWeight: '700',
    },
});export default forgotPasswordStyle;