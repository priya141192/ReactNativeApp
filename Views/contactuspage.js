import React,{ useState } from 'react';  
import { StyleSheet,Platform, Text, View,SafeAreaView ,TextInput,TouchableOpacity,Alert} from 'react-native';  
navigator.geolocation = require('@react-native-community/geolocation');
import MapView ,{Marker}from 'react-native-maps';
  
const ContactUsPage = () =>
{  
    let[Name,setName] = useState('');
    let[Mobileno,setMobileNo] = useState('');
    let[Message,setMessage] = useState('');

    const handlecontactus = () => {
        console.log(Name, Mobileno,Message);
        if(!Name){
            alert("Please enter Name");
            return;
        }
        if(!Mobileno){
            alert("Please enter Mobileno");
            return;
        }
        if(!Message){
            alert("Please enter Message");
            return;
        }
        
        Alert.alert("Success","Thank you for Contacting us.",[{
            text : 'Ok'
        }])
    };

    return(
        <SafeAreaView>
            <MapView
            style = {{height : '50%', width : '100%',alignSelf : 'flex-start',justifyContent : 'flex-start'}}
            initialRegion = {{
                latitude : 19.107786,
                longitude : 72.928551,
                longitudeDelta : 0.1,
                latitudeDelta : 0.1
            }}>
            <Marker coordinate={{ latitude: 19.107786, longitude: 72.928551 }}>
            </Marker>
            </MapView>
            <View style = {{alignSelf : 'flex-start'}}>
            <View style = {styles.textinputcontainerStyle}>
                    <TextInput style = {styles.textinputStyle} onChangeText = {(Name) => setName(Name)}  placeholder = 'Name' placeholderTextColor = '#e91b1a'></TextInput>
            </View>
            </View>
            <View style = {styles.textinputcontainerStyle}>
                    <TextInput style = {styles.textinputStyle} onChangeText = {(Mobileno) => setMobileNo(Mobileno)}  placeholder = 'Mobile No.' placeholderTextColor = '#e91b1a'></TextInput>
            </View>
            <View style = {styles.textinputcontainerStyle}>
                    <TextInput style = {styles.textinputStyle} onChangeText = {(Message) => setMessage(Message)}  placeholder = 'Message' placeholderTextColor = '#e91b1a'></TextInput>
            </View>

            <TouchableOpacity style = {styles.buttonStyle} activeOpacity = {0.5} onPress = {handlecontactus}>
                <Text style = {styles.buttontextStyle}>LOGIN</Text>
                </TouchableOpacity>
        </SafeAreaView>

    );
}  

const styles = StyleSheet.create({
    textStyle : {
        color : '#e91b1a',
        fontStyle : 'normal',
        fontWeight : 'bold',
        fontSize : 50,
        justifyContent : 'center',
        alignSelf : 'center',
        alignItems : 'center',
        marginLeft : 10
    },
    textinputStyle : {
        color : '#e91b1a',
        backgroundColor : 'white',
        fontSize : 15,
        fontWeight : 'bold',
        width : '100%'
    },
    textinputcontainerStyle : {
        elevation : 10,
        borderColor :'#e91b1a',
        padding : 10,
        borderRadius : 40,
        borderWidth : 1,
        justifyContent : 'center',
        flexDirection : 'row',
        backgroundColor : 'white',
        margin : 10
    },
    buttonStyle : {
        elevation : 10,
        backgroundColor : '#e91b1a',
        color :'white',
        borderRadius : 40,
        fontSize : 58,
        padding : 10,
        margin : 10
    },
    buttontextStyle : {
        color : 'white',
        backgroundColor : '#e91b1a',
        fontStyle : 'normal',
        fontWeight : 'bold',
        fontSize : 15,
        justifyContent : 'center',
        alignSelf : 'center',
        padding : 10
    },
});
   

export default ContactUsPage;