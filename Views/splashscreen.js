import { NavigationContainer } from '@react-navigation/native';
import React,{ Component,useEffect } from 'react';
import { AppRegistry, View, TextInput, SafeAreaView,StyleSheet,Image } from 'react-native'; 
const SplashScreen = ({navigation}) =>
{
    useEffect(() => {
        setTimeout(() => {navigation.navigate('welcomepage')},2000);
    });

    return(
        <View style={style.viewStyles}>
            <Image style={style.image} source={{uri : 'https://cdn.pixabay.com/photo/2018/07/31/00/20/canada-3573898__340.png'}} />
        </View>
    );
};

const style = StyleSheet.create({
    image: {
        height:400,
        width:400,
        borderRadius : 20,
        alignSelf : 'center'
      },
      viewStyles:
      {
          flex:1,
          alignSelf:'stretch',
          alignItems:'center',
          justifyContent:'center',
          borderRadius : 10
      }
});

export default SplashScreen;

