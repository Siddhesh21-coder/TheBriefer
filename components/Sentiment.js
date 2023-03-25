import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Sentiment(props) {
  const [articleData, setArticleData] = useState(props.article);
  const[sent,setSent]=useState('');
  useEffect(() => {
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '0eaa05ba9fmsh38d3fe5a19e790dp135cd7jsn47f06b576f8c',
        'X-RapidAPI-Host': 'text-analysis12.p.rapidapi.com'
      },
      body: JSON.stringify({
        language: 'english',
        text: articleData // or pass the text you want to analyze here
      })
    };

    fetch('https://text-analysis12.p.rapidapi.com/sentiment-analysis/api/v1.1', options)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setSent(response);
        // set the sentiment data to the state
      })
      .catch(err => console.error(err));
  }, [articleData]);
  
  return (
    <View>
        <View style={{display:'flex',flexDirection:'row', alignItems:'center', marginLeft:5, marginBottom:10}}>
            <Text style={{fontWeight:'500', color:'#ab08ff'}}>Sentiment: </Text>
      <View style={{ marginRight :10, backgroundColor: sent.sentiment === 'positive' ? 'green' : sent.sentiment === 'negative' ? 'red' : 'blue',height:10, width:10, borderRadius:10 }}></View>
      <Text>{sent.sentiment}</Text>
      
    </View></View>
  );
}

export default Sentiment;