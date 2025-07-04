// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import TicketScreen from './screens/TicketScreen';
import TicketDetailsScreen from './screens/TicketDetailsScreen';
export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Home: undefined;
  Ticket: undefined;
 TicketDetails: { id: string; title: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Ticket" component={TicketScreen} />
        <Stack.Screen name="TicketDetails" component={TicketDetailsScreen} options={{ title: 'Détail du Ticket' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
