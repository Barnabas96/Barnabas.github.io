import { Text, View, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import globalStyles from './styles/globalStyles';
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useStore } from './stores/zustandStores'

type RootStackParamList = {
  HomeScreen: undefined;
  loginScreen: undefined;
  registerScreen: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>



const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const navigateToLogin = () => {
    navigation.navigate('loginScreen');
  }
  const navigateToRegister = () => {
    navigation.navigate('registerScreen');
  }

  const { username } = useStore();



  return (
      <ImageBackground source={require("../assets/Index.png")} style={{width: '100%', height: '100%'}}>
      <View style={globalStyles.Indexcontainer}>
        <Text style={{ fontSize: 20}}></Text>
        <Text style={globalStyles.Indextitle}>Velkommen!</Text>
        <Text style={globalStyles.Indexsubtitle}>Beste {"\n"}App For {"\n"}Aktivering av Core</Text>
        <Text style={globalStyles.subsubtitle}>CoreCapacity leverer nyskapende, gøyal og prestasjonsfremmende trening av {"\n"}kjernemuskulatur. Med dokumentert effekt.</Text>
        </View>
        <TouchableOpacity onPress={navigateToLogin} style={globalStyles.Indexbutton}>
          <Text style={globalStyles.linkTextHome}>Start</Text>
          
        </TouchableOpacity>
        
        {/* <TouchableOpacity onPress={navigateToRegister} style={globalStyles.Indexbutton}>
          <Text style={globalStyles.linkTextHome}>Register</Text>
        </TouchableOpacity> */}
      </ImageBackground>
  );
};export default HomeScreen;
