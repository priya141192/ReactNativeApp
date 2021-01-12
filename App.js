/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  SplashScreen  from './Views/splashscreen';
import WelcomePage from './Views/welcomepage';
import  DashboardPage  from './Views/dashboardpage';
import ContactUsPage from './Views/contactuspage';

const Stack = createStackNavigator();

const App = () =>{  
 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splashscreen">
        <Stack.Screen name="welcomepage"
        component={WelcomePage}
        options={{
          headerShown : false
        }}/>
        <Stack.Screen name="splashscreen"
        component={SplashScreen}
        options={{
          headerShown : false
        }}/>
        <Stack.Screen name="dashboardpage"
        component={DashboardPage}
        options={{
          headerShown : false
        }}/>
         <Stack.Screen name="contactuspage"
        component={ContactUsPage}
        options={{
          title: 'Contact Us', 
          headerStyle: {
            backgroundColor: '#e91b1a',},
            headerTitleStyle: {color:'white'},
            headerTintColor: 'white'
            }} 
            />
      </Stack.Navigator>
    </NavigationContainer>
  ); 
}  
  
 

export default App;