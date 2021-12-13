import { TabRouter } from '@react-navigation/routers';
import React from 'react';
import { Text, View } from 'react-native';

export default function Sobre({router}) {
  return (
    <View >
      <Text>Meu nome é: {router.params.nome}</Text>
    </View>
  );
}
