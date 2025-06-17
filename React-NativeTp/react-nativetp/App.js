import React from 'react';
import { View, StyleSheet } from 'react-native';
import Profile from './components/Profile';

export default function App() {
  return (
    <View style={styles.container}>
      <Profile
        name="Nayir S."
        role="Développeur Mobile"
        isOnline={true}
        avatar={null}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
});
