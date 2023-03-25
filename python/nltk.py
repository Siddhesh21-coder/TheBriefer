import nltk
nltk.download('vader_lexicon')
def analyze_sentiment(text):
    sid = nltk.sentiment.SentimentIntensityAnalyzer()
    polarity_scores = sid.polarity_scores(text)
    
    if polarity_scores['compound'] >= 0.05:
        return 'Positive'
    elif polarity_scores['compound'] <= -0.05:
        return 'Negative'
    else:
        return 'Neutral'