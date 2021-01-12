import React,{ Component } from 'react';
import { AppRegistry, View, TextInput, SafeAreaView,StyleSheet,Image,Text,TouchableOpacity,Button } from 'react-native'; 

const DashboardPage = ({navigation}) => 
{
    const handleContactus = (() => {
        navigation.navigate('contactuspage');
    });

    return(
        <SafeAreaView>
            <View style = {{height : '35%'}}>
            {/* <Text style={styles.textstyles}>DASHBOARD</Text> */}
            <Image style = {styles.imageStyle} source = {{uri : 'https://cdn.pixabay.com/photo/2017/12/28/15/06/background-3045402_960_720.png'}}></Image>
            </View>
           <View style={styles.firstcontainer}>
                <View style={styles.dashboardcontainer}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.dashboardButtonContainer}>
                        <Text style={{alignSelf:'center', alignItems :'center',
                    justifyContent:'center',
                    color:'white',
                    fontWeight : 'bold',
                    fontSize: 15}}>Profile</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.dashboardButtonContainer}>
                        <Text style={{alignSelf:'center', alignItems :'center',
                    justifyContent:'center',
                    color:'white',
                    fontWeight : 'bold',
                    fontSize: 15}}>My Account</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.dashboardcontainer}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.dashboardButtonContainer}>
                        <Text style={{alignSelf:'center', alignItems :'center',
                    justifyContent:'center',
                    color:'white',
                    fontWeight : 'bold',
                    fontSize: 15}}>My Orders</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.dashboardButtonContainer}>
                        <Text style={{alignSelf:'center', alignItems :'center',
                    justifyContent:'center',
                    color:'white',
                    fontWeight : 'bold',
                    fontSize: 15}}>Profile</Text>
                    </TouchableOpacity>
                </View>
           </View>
           <View style={styles.secondcontainer}>
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.appButtonContainer}>
                <Text style={{alignSelf:'center', alignItems :'center',
                    justifyContent:'center',
                    color:'#e91b1a',
                    fontWeight : 'bold',
                    fontSize: 15}}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.appButtonContainer} onPress = {handleContactus}>
                <Text style={{alignSelf:'center', alignItems :'center',
                    justifyContent:'center',
                    color:'#e91b1a',
                    fontWeight : 'bold',
                    fontSize: 15}}>Contact Us</Text>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.appButtonContainer}>
                <Text style={{alignSelf:'center', alignItems :'center',
                    justifyContent:'center',
                    color:'#e91b1a',
                    fontWeight : 'bold',
                    fontSize: 15}}>Settings</Text>
            </TouchableOpacity>
           </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    firstcontainer : {
        justifyContent : 'flex-start',
        alignItems:'center',
        height:'50%',
        width : '100%'
    },
    secondcontainer : {
        justifyContent : 'flex-start',
        alignItems:'center',
        height:'15%',
        width : '100%',
        flexDirection:'row',
    },
    dashboardcontainer : {
        flex:1,
        justifyContent : 'flex-start',
        alignItems:'center',
        width : '100%',
        flexDirection:'row'
    },
    dashboardButtonContainer: {
        elevation: 1,
        borderRadius:5,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius:20,
        marginTop:30,
        alignSelf:'center',
        flex:1,
        height:'80%',
        padding:5,
        margin:5,
        alignItems:'center',
        justifyContent:'center',
        color : 'white',
        backgroundColor : '#e91b1a',
        borderColor : 'white',
    },
    appButtonContainer: {
        elevation: 10,
        borderWidth: 1,
        marginTop:30,
        alignSelf:'center',
        height:'70%',
        width:'35%',
        alignItems:'center',
        justifyContent:'center',
        color : '#e91b1a',
        backgroundColor : 'white',
        borderColor : '#e91b1a',
    },
    textstyles : {
        color : '#e91b1a',
        fontStyle : 'normal',
        fontWeight : 'bold',
        fontSize : 15,
        justifyContent : 'center',
        alignSelf : 'center',
        alignItems : 'center'
    },
    imageStyle: {
        height: 230,
        width: 400,
        resizeMode: 'center',
        alignItems : 'center',
        alignSelf : 'center',
        justifyContent : 'center'
      },
});

export default DashboardPage;