import React, { useState } from 'react';
import { Text, View, ActivityIndicator, TouchableOpacity } from 'react-native';
import cheerio from 'cheerio';
import { ScrollView } from 'react-native-gesture-handler';
import Sentiment from './components/Sentiment';

const NewsScreen = (props) => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  const [analysis, setAnalysis] = useState(1);

  const summarizeArticle = (articleBody) => {
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '0eaa05ba9fmsh38d3fe5a19e790dp135cd7jsn47f06b576f8c',
        'X-RapidAPI-Host': 'text-analysis12.p.rapidapi.com'
      },
      body: JSON.stringify({
        language: 'english',
        summary_percent:5,
        text: articleBody,
        
      })
    };

    fetch('https://text-analysis12.p.rapidapi.com/summarize-text/api/v1.1', options)
      .then(response => response.json())
      .then(data => {
        const summary = data.summary;
        setAnalysis(summary);
      })
      .catch(error => console.error(error));
  }

  React.useEffect(() => {
    fetch(props.url)
      .then(response => response.text())
      .then(html => {
        const $ = cheerio.load(html);

        const newsItems = [];
        $('article').each((index, element) => {
          const title = $(element).find('h2').text();
          const body = $(element).find('p').text();
          newsItems.push({ title, body });
        });

        setNews(newsItems);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View>
      {news.map(item => (
        <View key={item.title} style={{ paddingBottom: 20 }}>
          <TouchableOpacity
            style={{
              marginLeft: '46%',
              alignItems: 'center',
              borderRadius: 20,
              backgroundColor: '#bdb76b',
              marginBottom: 12
            }}
            onPress={() => summarizeArticle(item.body)}>
            <Text>Summarize</Text>
          </TouchableOpacity>
          <Sentiment article={item.body} />
          <ScrollView style={{ paddingBottom: 200 }}>
            <Text style={{ fontSize: 16, fontWeight: '500', textAlign: 'justify', marginHorizontal: 2 }}>
              {analysis === 1 ? item.body : analysis}
            </Text>
          </ScrollView>
        </View>
      ))}
    </View>
  );
};

export default NewsScreen;