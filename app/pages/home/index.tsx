
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../aplication/hooks-redux'
import ProviderAuth from '../../components/ProviderAuth'
import ButtonsOptions from '../../components/buttons'
interface HomeScreenProps {
  navigation: any
}
const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {

  return (
    <ProviderAuth >
      <ButtonsOptions navigation={navigation}></ButtonsOptions>
    </ProviderAuth>

  );
};



export default HomeScreen;