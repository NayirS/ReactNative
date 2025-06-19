import React from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Ticket'>;

export default function TicketScreen() {
  const navigation = useNavigation<NavigationProp>();

  const handlePress = () => {
    navigation.navigate('TicketDetails', {
      id: '1',
      title: 'Problème de connexion',
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.ticket} onPress={handlePress}>
        <Text style={styles.ticketTitle}>🎫 Ticket #1</Text>
        <Text style={styles.ticketSubtitle}>Problème de connexion</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
  ticket: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 10,
  },
  ticketTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  ticketSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});
