import React from 'react';
import { Text, View, Button } from 'react-native';

export default function Contato({route}) {
  return (
    <View >
       <Text> Gerente: {route.params.nome} </Text>
            <Text> Endereço: {route.params.end} </Text>
            <Text> Telefone: {route.params.tel} </Text>
    </View>
  );
}
