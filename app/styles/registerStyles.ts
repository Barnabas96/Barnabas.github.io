import { StyleSheet, Dimensions} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const registerStyle = StyleSheet.create({
    RegisterContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: wp('2%')
    },
    RegisterTitle: {
        fontSize: hp('3.5%'),
        marginTop: hp('5%'),
        marginBottom: hp('4%'),
        textAlign: 'center',
        color: 'black',
        fontWeight: '600',
    },
    RegisterInput: {
        height: hp('6%'),
        borderColor: '#b3b3b3',
        backgroundColor: 'white',
        borderRadius: hp('1%'),
        color: '#737373',
        borderWidth: wp('0.2%'),
        marginBottom: hp('3%'),
        marginHorizontal: wp('14%'),
        paddingLeft: wp('3%'),
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.5,
        shadowColor: "grey",
        shadowRadius: 5,
    },
    RegisterButton: {
        backgroundColor: '#62b547', // Primary button color
        borderRadius: hp('10%'),
        paddingVertical: hp('1.2%'),
        marginBottom: hp('12%'),
        marginHorizontal: wp('16.5%'),
        alignItems: 'center',
        textAlign: 'center',
    },
    RegisterLinkText: {
        fontSize: hp('3%'),
        fontWeight: '700',
        textAlign: 'center',
        color: 'white',
    },
    RegisterSubtitle: {
        fontSize: hp('1%'),
        fontWeight: '400',
        paddingLeft: wp('10%'),
        marginBottom: hp('10%'),
        marginHorizontal: 'auto',
        lineHeight: hp('1.5'),
        color: 'gray', // Subtitle color for contrast
    },
    backButton: {
        top: hp('1%'),
        paddingLeft: wp('4%'),
    },
});export default registerStyle;