import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/views/Home';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Rules from './src/views/Rules';
import Create from './src/views/Create';
import Join from './src/views/Join';

const Stack = createStackNavigator();

const App = ({ }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen component={Home} name='Home' />
        <Stack.Screen component={Create} name='Create' />
        <Stack.Screen component={Join} name='Join' />
        <Stack.Screen component={Rules} name='Rules' />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
