import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ScrollView, TouchableOpacity, Image,StyleSheet,ActivityIndicator } from 'react-native';

const NewsCard = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
  
    async function fetchNYTData() {
      const apiKey = 'a5IKPFRxRi9M4kJUVk0H9NZrHGPejNKt';
      const url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`;
  
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  
    useEffect(() => {
      fetchNYTData();
    }, []);
  
    if (isLoading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
  
  return (
    <View style={{paddingBottom:100}}>
      <ScrollView > 
        {data.map((row, index) => (
            <View style={styles.card}> 
          <TouchableOpacity
            key={index}
            
            onPress={() => {}}
          >
            <View>
            <Image
        style={styles.img}
        source={{
          uri: row.multimedia[0].url,
        }}
      />
            
            </View>
            <Text style={styles.txtTitle}>{row.title}</Text>
          </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
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
export default NewsCard;