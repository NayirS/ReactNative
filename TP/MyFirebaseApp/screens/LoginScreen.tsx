import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text, StyleSheet } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('Home');
    } catch (error: any) {
      Alert.alert('Erreur', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Mot de passe" onChangeText={setPassword} secureTextEntry />
      <Button title="Se connecter" onPress={handleLogin} />
      <Text style={styles.link} onPress={() => navigation.navigate('Signup')}>
        Pas encore de compte ? Créez-en un
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderBottomWidth: 1, marginBottom: 10, padding: 8 },
  link: { color: 'blue', marginTop: 10 }
});
