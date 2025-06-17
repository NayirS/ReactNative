import React from 'react';
import { View, Text, Button } from 'react-native';
import { auth } from '../firebase/firebaseConfig';
import { signOut } from 'firebase/auth';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const handleLogout = async () => {
    await signOut(auth);
    navigation.navigate('Login');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Test de connexion</Text>
      <Button title="Déconnexion" onPress={handleLogout} />
    </View>
  );
}
