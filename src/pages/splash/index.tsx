import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import React, {useEffect} from 'react'
import { Logo, SplashBG } from '../../assets';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
    Splash: undefined;
    MainApp: undefined;
  };
  
  type SplashScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Splash'>;

const Splash = () => {
    const navigation = useNavigation<SplashScreenNavigationProp>();
    useEffect(() => {
        setTimeout( ()=> {
            navigation.replace('MainApp')
        }, 300)
    }, [navigation]);
  return (
    <ImageBackground source={SplashBG} style={styles.background}>
        <Image source={Logo} style={styles.logo} />
    </ImageBackground>
  )
}

export default Splash

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 222,
        height: 105
    }
})