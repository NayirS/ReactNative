import React from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';

export default function TicketScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Liste des tickets (à venir)</Text>
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
  },
});
