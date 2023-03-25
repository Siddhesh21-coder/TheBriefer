import React from 'react';
import { View, Text,Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import NewsScreen from './FetchNews';

const NewsDetail = ({ route }) => {
  const { title, abstract,multimedia,url1 } = route.params;

  return (
    <View style={{ 
        flex: 1, 
        marginTop:25,
        marginLeft:10,
        marginRight:10,
        marginBottom:10, }}>
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>
        {title}
      </Text>

        <Image 
        style={{height:200, width:"100%", marginBottom:20}}
        source={{uri:multimedia}}
        />
        
        
      
      <NewsScreen url={url1} />
      </ScrollView>
      {/* <Text style={{fontSize:18,fontWeight:'600'}}>{abstract}</Text> */}
    </View>
  );
};

export default NewsDetail;