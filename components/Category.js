import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { categories } from '../data/data';

const Category = (props) => {
  function update(ab){
    props.handleCallBack(ab);
  }

  return (
    <View style={styles.scrollable}>
      <ScrollView horizontal={true}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => {update(category)}}
          >
            <Text style={styles.text}>{category}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>{categories[categories.length - 1]}</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollable: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#deb887',
    borderRadius: 10,
    marginHorizontal: 5,
    marginVertical: 8,
  },
  text: {
    fontSize: 20,
    paddingHorizontal: 10,
    fontWeight: '500',
  },
});

export default Category;