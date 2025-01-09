import { StyleSheet, Dimensions} from 'react-native';
import { CircleSnail } from 'react-native-progress';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const videoStyle = StyleSheet.create({
    container: {
      flex: 1,
      height: hp('100%')
    },
    Pcontainer: {
      backgroundColor: 'white',
      height: hp('19%'),
      borderRadius: hp('3%'),
      marginBottom: hp('1.5%'),
      marginHorizontal: wp('4.5%'),
      borderWidth: hp('0.1%'),
      borderColor: '#dedcdc',
      shadowOffset: {width: 2, height: 2},
      shadowOpacity: 0.5,
      shadowColor: "grey",
      shadowRadius: 4,
    },
    Gcontainer: {
      backgroundColor: 'white',
      height: hp('30%'),
      borderRadius: hp('2%'),
      marginBottom: hp('3%'),
      marginHorizontal: wp('4.5%'),
      borderWidth: hp('0.1%'),
      borderColor: '#dedcdc',
      shadowOffset: {width: 2, height: 2},
      shadowOpacity: 0.5,
      shadowColor: "grey",
      shadowRadius: 4,
    },
    GXScontainer: {
      backgroundColor: 'white',
      height: hp('15.5%'),
      borderRadius: hp('2%'),
      marginBottom: hp('1.5%'),
      marginTop: hp('2%'),
      marginHorizontal: wp('15%'),
      borderWidth: hp('0.1%'),
      borderColor: '#dedcdc',
      shadowOffset: {width: 2, height: 2},
      shadowOpacity: 0.5,
      shadowColor: "grey",
      shadowRadius: 4,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: hp('0.02%'),
      borderColor: 'gray',
      marginBottom: hp('2.5%'),
    },
    GheaderText: {
      textAlign: 'center',
      fontSize: hp('2.6%'),
      fontWeight: '300',
      marginTop: hp('2%')
    },
    GsubText: {
      fontSize: hp('1.7%'),
      fontWeight: '300',
      left: wp('7%'),
      marginBottom: hp('0.5%'),
    },
    GsubsubText: {
      fontSize: hp('1.5%'),
      fontWeight: '300',
      left: wp('7%'),
    },
    GxsText: {
      marginTop: hp('2.5%'),
      fontSize: hp('1.8%'),
      fontWeight: '400',
      textAlign: 'center',
    },
    GxsText1: {
      marginTop: hp('1%'),
      fontSize: hp('1.1%'),
      fontWeight: '200',
      textAlign: 'center',
    },
    Gbutton: {
      backgroundColor: '#eee',
      borderRadius: hp('1%'),
      marginHorizontal: wp('14%'),
      paddingVertical: hp('0.5%'),
      bottom: hp('1.5%')
    },
    GbuttonText: {
      fontSize: hp('1%'),
      textAlign: 'center',
      color: 'green',
    },
    headerText: {
      fontSize: hp('3%'),
      fontWeight: '500',
      color: 'black',
      marginLeft: wp('13%'),
      marginTop: hp('10%'),
      marginBottom: hp('1%'),
    },
    headerText1: {
      fontSize: hp('3%'),
      fontWeight: '600',
      color: 'gray',
      marginLeft: wp('2%'),
      marginTop: hp('10%'),
      marginBottom: hp('1%'),
    },
    headerText2: {
      fontSize: hp('2.5%'),
      fontWeight: '600',
      color: 'black',
      marginLeft: wp('7%'),
      marginBottom: hp('1%')
    },
    headerText3: {
      fontSize: hp('2.2%'),
      fontWeight: '600',
      color: 'black',
      marginLeft: wp('7%'),
      marginBottom: hp('1.5%'),
    },
    PheaderText: {
      fontSize: hp('2%'),
      fontWeight: '400',
      color: 'black',
      marginTop: hp('6%'),
      marginLeft: wp('5%'),
      marginBottom: hp('0.8%')
    },
    PsubText: {
      fontSize: hp('3%'),
      fontWeight: '400',
      color: 'black',
      marginLeft: wp('5%'),
      marginBottom: hp('1.5%')
    },
    PButton: {
      backgroundColor: '#d4d4d4',
      paddingVertical: hp('0.6%'),
      marginLeft: wp('5%'),
      width: wp('24%'),
      borderRadius: hp('1%'),
      borderWidth: hp('0.01%'),
      borderColor: 'gray',
      marginBottom: hp('0.5%')
    },
    PButtonText: {
      fontSize: hp('1.5%'),
      fontWeight: '700',
      textAlign: 'center',
      color: 'white',
    },
    MapheaderText: {
      fontSize: hp('1.8%'),
      fontWeight: '700',
      color: 'white',
      marginTop: hp('11%'),
      marginLeft: wp('4%'),
    },
    MapsubText: {
      fontSize: hp('1.3%'),
      fontWeight: '800',
      color: 'white',
      marginTop: hp('0.5%'),
      marginLeft: wp('4%'),
    },
    videoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#eee',
      marginHorizontal: wp('7%'),
      marginVertical: hp('0%'),
      borderRadius: hp('2.5%'),
      height: hp('12%'),
      borderWidth: hp('0.02%'),
      borderColor: 'gray',
      marginBottom: hp('4%'),
      shadowOffset: {width: 2, height: 2},
      shadowOpacity: 0.5,
      shadowColor: "grey",
      shadowRadius: 5,
      overflow: 'hidden',
    },
    videoDetails: {
      flex: 1,
    },
    videoTitle: {
      fontSize: hp('2.1%'),
      fontWeight: '700',
      color: 'white',
      paddingLeft: wp('4%'),
      marginTop: hp('1%'),
    },
    videoDescription: {
      fontSize: hp('1.5%'),
      fontWeight: '800',
      color: 'white',
      paddingLeft: wp('4%'),
      marginBottom: hp('0%'),
    },
    header2: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: wp('4%'),
      marginRight: wp('4%'),
      marginBottom: hp('0%'),
    },
    ShowAll: {
      color: 'green',
      fontWeight: '400',
      marginTop: hp('1%')
    },
    ShowAll1: {
      color: 'gray',
      fontWeight: '400',
      marginTop: hp('1%')
    },
    Searchcontainer: {
      backgroundColor: '#636363',
      borderRadius: hp('2%'),
      height: hp('2.5%'),
      width: wp('45%'),
      marginBottom: hp('1%'),
      marginLeft: wp('7%'),
    },
    SearchText: {
      fontSize: hp('1.1%'),
      fontWeight: '800',
      color: 'white',
      top: hp('0.5%'),
      paddingLeft: wp('3.5%'),
    },
    Levelcontainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderRadius: hp('2%'),
      paddingVertical: hp('0.6%'),
      width: wp('47%'),
      marginBottom: hp('2%'),
      marginLeft: wp('7%'),
      shadowOffset: {width: 2, height: 2},
      shadowOpacity: 0.5,
      shadowColor: "grey",
      shadowRadius: 5,
    },
    Levellittlecontainer: {
      backgroundColor: '#eee',
      borderRadius: hp('1.2%'),
      borderWidth: hp('0.02%'),
      borderColor: 'gray',
      paddingVertical: hp('0.5%'),
      width: wp('24%'),
      marginRight: wp('7%'),
    },
    Levellittlecontainer1: {
      backgroundColor: '#51ad59',
      borderRadius: hp('1.2%'),
      borderWidth: hp('0.02%'),
      borderColor: 'gray',
      paddingVertical: hp('0.5%'),
      width: wp('24%'),
      marginRight: wp('7%'),
    },
    levels: {
      textAlign: 'center',
      fontSize: hp('1.7%'),
      fontWeight: '500',
      color: 'white',
    },
    marks: {
      paddingLeft: wp('76%'),
      bottom: hp('3.5%')
    },
    bellicon: {
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
    processcircle: {
      left: wp('60%'),
      
    },
    arrow: {
      left: wp('68%'),
      bottom: hp('8.5%'),
      fontWeight: '900',
    },
    icon: {
      bottom: hp('11%'),
      left: wp('52%')
    },
});export default videoStyle;
  