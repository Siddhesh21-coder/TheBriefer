import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Category from './components/Category';
import Header from './components/Header';
import NewsCard from './components/News';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Category />
      <NewsCard />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
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
export default Home