import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function TicketDetailsScreen() {
  const route = useRoute();
  const { id, title } = route.params as { id: string; title: string };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎫 Ticket #{id}</Text>
      <Text style={styles.subtitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    ...Platform.select({
      ios: { backgroundColor: '#F2F2F7' },
      android: { backgroundColor: '#FFFFFF' },
    }),
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginTop: 10,
  },
});
