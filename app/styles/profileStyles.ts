import { StyleSheet, Dimensions} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


export const ProfileStyle = StyleSheet.create({
    profilecontainer: {
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderTopLeftRadius: wp('14%'),
        borderTopRightRadius: wp('14%'),
        backgroundColor: '#9faba0',
        opacity: 0.78,
        marginHorizontal: wp('0.5%'),
        shadowColor: 'gray',
        width: wp('99%'),
        height: hp('98%'),
        top: hp('15%'),
    },
    profileHeader: {
      alignItems: 'center',
      bottom: hp('6%'),
    },
    profileImage: {
      width: wp('30%'),
      height: hp('14%'),
      borderRadius: hp('20%'),
      marginBottom: hp('1%'),
    },
    userName: {
        textAlign: 'center',
        fontSize: hp('2.2%'),
        fontWeight: '600',
        marginBottom: hp('1.5%')
    },
    info: {
        textAlign: 'center',
        fontSize: hp('1.4%'),
        color: '#666',
    },
    statsSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: wp('10%'),
        bottom: hp('62%'),
    },
    statsTitle: {
      fontSize: hp('2.2%'),
      fontWeight: 'bold',
      paddingRight: wp('2%'),
    },
    statsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: hp('2%'),
    },
    statBox: {
      backgroundColor: 'white',
      paddingVertical: hp('2%'),
      width: wp('18%'),
      borderRadius: hp('100%'),
      alignItems: 'center',
      flex: 1,
      marginRight: wp('2.5%'),
      left: wp('6%'),
      marginBottom: hp('2%'),
    },
    statNumber: {
      fontSize: hp('2%'),
      fontWeight: 'bold',
      color: 'black',
    },
    statLabel: {
      fontSize: hp('2%'),
      color: 'black',
      fontWeight: 'bold',
      marginTop: hp('1%'),
    },
    settingsSection: {
      backgroundColor: 'white',
      borderRadius: hp('1%'),
      marginHorizontal: wp('8%'),
    },
    settingsSection2: {
        backgroundColor: 'white',
        borderRadius: hp('1%'),
        marginTop: hp('2%'),
        marginHorizontal: wp('8%'),
      },
    settingsOption: {
      flexDirection: 'row',
      paddingVertical: hp('2%'),
      borderBottomColor: '#ccc',
      borderBottomWidth: hp('0.1%'),
    },
    settingsOptionText: {
      flex: 1,
      fontSize: hp('1.8%'),
      color: 'gray',
      top: hp('0.4%'),
    },
    settingsOptionText1: {
        flex: 1,
        fontSize: hp('1.8%'),
        color: 'gray',
        top: hp('0.4%'),
        left: wp('1.2%'),
      },
    settingsOptionText2: {
        flex: 1,
        fontSize: hp('1.8%'),
        color: 'gray',
        top: hp('0.4%'),
      },
    logoutButton: {
      backgroundColor: 'white',
      paddingVertical: hp('2%'),
      borderRadius: hp('1%'),
      alignItems: 'center',
    },
    logoutButtonText: {
      color: 'green',
      fontSize: hp('2%'),
      fontWeight: 'bold',
    },
    streakicon: {
        flexDirection: 'row',
    },
    streakday: {
        fontSize: hp('2%'),
        fontWeight: '700',
        marginLeft: wp('1.5%'),
    },
    streakdaycontainer: {
        bottom: hp('60%'),
    },
    settingcontainer: {
        flexDirection: 'row',
    },
    settingheader: {
        fontSize: hp('2%'),
        fontWeight: '700',
        color: 'white',
        marginBottom: hp('1%')
    },
    settingicon: {
        paddingLeft: wp('11%'),
        marginRight: wp('2%')
    },
    settingicon2: {
    marginRight: wp('5%'),
    paddingLeft: wp('8%'),
    },
    settingicon3: {
        marginRight: wp('3%'),
    },
  });
export default ProfileStyle;
  