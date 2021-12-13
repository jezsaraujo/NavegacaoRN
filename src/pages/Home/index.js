import React from 'react';
import { Text, View, Button } from 'react-native';

export default function Home({navigation}) {
  return (
    <View >
      <Text>Home</Text>
      <Button
      title = "Sobre"
      onPress = {() => navigation.navigate('Sobre', {nome : 'Jess'})}
      options={{ 
        headerStyle:{
          backgroundColor: '#0D8999'
        },
        headerTintColor: '#fff'
    }}
      />

      <Button
      title = "Muda título"
      onPress = {()=> navigation.setOptions({title: "Inicio"})}
      />

<Button
      title = "Voltar título"
      onPress = {()=> navigation.setOptions({title: "Home"})}
      />
    </View>
  );
}
