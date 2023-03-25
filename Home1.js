import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  VirtualizedList,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Category from './components/Category';


const NewsCard1 = () => {
  const [quer,setQuer]=useState("India");
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetchNYTData(quer);
  }, []);

  function CallBack(que) {

    setQuer(String(que));
    fetchNYTData(quer);
  }
  async function fetchNYTData(er) {
    const apiKey = 'a5IKPFRxRi9M4kJUVk0H9NZrHGPejNKt'; // Replace with your actual API key
    const url = `https://newsapi.org/v2/everything?q=`+String(quer)+`&from=2023-03-24&sortBy=popularity&apiKey=29adb5fe15bf48fc8b25660c4d3336ed`;
    console.log(url);

    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.articles);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const renderNewsItem = ({ item }) => {
    return (
    
      <TouchableOpacity
        style={{ marginHorizontal: 10, marginVertical: 5 }}
        onPress={() =>
          navigation.navigate('NewsDetail', {
            title: item.title,
            abstract: item.content,
            multimedia: item.urlToImage,
            url1: item.url,
          })
        }
      >
        <View style={styles.card}>
            <Image
        style={styles.img}
        source={{
          uri: item.urlToImage,
        }}
      />
            
            <Text style={styles.txtTitle}>{item.title}</Text>
            </View>
      </TouchableOpacity>
      
    );

  };

  const getItemCount = (data) => data.length;

  const getItem = (data, index) => data[index];

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <View style={{paddingBottom:10}}> 
    <Category handleCallBack={CallBack} />
      <VirtualizedList
        data={data}
        renderItem={renderNewsItem}
        keyExtractor={(item) => item.url}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </View>
  );
};
const styles = StyleSheet.create({
    img:{
        height:200,
        width:'100%',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        marginBottom:7
    },
    card:{
        marginVertical:5,
        backgroundColor: '#bdb76b',
        paddingBottom:10,
        borderRadius:10
        
    },
    txtTitle:{
        fontSize: 16,
        marginLeft:3,   
        fontWeight:'400',
    }
});
export default NewsCard1;