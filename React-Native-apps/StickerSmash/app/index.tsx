import { Text, View, StyleSheet } from 'react-native';
 import { Link } from 'expo-router'; 

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Accueil</Text>
      <Link href="/about" style={styles.button}>
        Direction Page About
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    color: '#fff',
  },
  button: {
    fontSize: 15,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
