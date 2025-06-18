import React from 'react';
import { View, Text, Button, StyleSheet, Platform } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

// Définition du type des routes
type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Home: undefined;
  Ticket: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const goToTicket = () => {
    navigation.navigate('Ticket');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenue sur L'Accueil</Text>
      <Button title="Aller aux tickets" onPress={goToTicket} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        backgroundColor: '#F2F2F7',
        paddingTop: 20,
      },
      android: {
        backgroundColor: '#FFFFFF',
        elevation: 4,
      },
    }),
  },
  text: {
    fontSize: Platform.OS === 'ios' ? 17 : 16,
    fontFamily: Platform.select({
      ios: 'San Francisco',
      android: 'Roboto',
    }),
    marginBottom: 20,
  },
});
