import { useIsFocused } from '@react-navigation/native';
import { StyleSheet, Dimensions} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const tabStyle = StyleSheet.create({
    tabcontainer: {
        borderTopLeftRadius: hp('4.6%'),
        borderTopRightRadius: hp('4.6%'),
        height: hp('10%'),
        position: 'absolute',
    },
});export default tabStyle;