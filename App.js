import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NewsDetail from './NewsDetail';
import Home from './Home';
import NewsCard1 from './Home1';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NewsCard1">
        <Stack.Screen name="The Briefer" component={NewsCard1} />
        <Stack.Screen name="NewsDetail" component={NewsDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // borderWidth:1,
    // borderColor:'red',
    marginTop:25,
    marginLeft:10,
    marginRight:10,
    marginBottom:10,
  },
});
