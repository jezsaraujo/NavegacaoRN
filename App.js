import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Perfil from './src/pages/Perfil';

const Stack = createNativeStackNavigator(); 
const Tab = createBottomTabNavigator();

function Tabs(){
  return(
    <Tab.Navigator>
      <Tab.Screen name= "Feed" component={Home}/>
      <Tab.Screen name= "Sobre" component={Sobre}/>
    </Tab.Navigator>
  )
}

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName = 'Home'>
      <Stack.Screen 
      name= "Home" 
      component={Tabs}
      options={{ 
        title: 'Bem Vindo',
        headerStyle:{
          backgroundColor: '#0D8999'
        },
        headerTintColor: '#fff'
    }}/>
      <Stack.Screen name= "Perfil" component={Perfil}/> 
    </Stack.Navigator>
  </NavigationContainer>
  );
}
