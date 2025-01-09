import { StyleSheet, Dimensions} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const IntroductionStyle = StyleSheet.create({
    IntroductionContainer: {
    flex: 1,
    justifyContent: 'center',
    },
    Headercontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    },
    skipcontainer: {
    backgroundColor: 'green',
    width: wp('16%'),
    height: hp('2.5%'),
    borderRadius: hp('1.1%'),
    marginRight: wp('7%'),
    },
    skipText: {
    fontSize: hp('1.5%'),
    fontWeight: '700',
    textAlign: 'center',
    color: 'white',
    marginTop: hp('0.4%'),
    },
    IntroductionTitle: {
    fontSize: hp('3.2%'),
    fontWeight: '600',
    marginHorizontal: 'auto',
    marginBottom: hp('5%'),
    },
    IntroductionSubtitle: {
    fontSize: hp('2%'),
    fontWeight: '600',
    marginHorizontal: 'auto',
    marginBottom: hp('5%'),
    },
    Inputcontainer: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderRadius: hp('1%'),
    marginHorizontal: wp('15%'),
    paddingVertical: hp('2.8%'),
    paddingLeft: wp('4%'),
    marginBottom: hp('40%'),
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowColor: "grey",
    shadowRadius: 5,
    },
    IntroductionInput: {
    fontSize: hp('1.5%'),
    },
    nextButton: {
        alignItems: 'center',
        backgroundColor: 'green',
        paddingVertical: hp('1.2%'),
        borderRadius: hp('3%'),
        marginHorizontal: wp('15%'),
        marginTop: hp('5%'),
    },
    nextButtonText: {
        fontSize: hp('2%'),
        color: 'white',
        fontWeight: '700',
    },
    backButton: {
        marginBottom: hp('4%'),
        paddingLeft: wp('9.5%'),
    },
});export default IntroductionStyle;