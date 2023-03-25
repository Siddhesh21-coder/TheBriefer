
import React, { Component } from 'react'
import {Text, StyleSheet,View,Image} from 'react-native';
export class Header extends Component {
  render() {
    return (
      <View style={styles.alignment}>
        <View style={styles.headerContainer}>
        <Image
        style={styles.logo}
        source={require('../assets/logo.jpg')} 
        />
        <Text style={styles.header}>The Briefer</Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    header:{
        fontSize: 25,
        fontWeight:'bold',
    },
    alignment: {
        // alignItems:'center',
        backgroundColor:'#AC2334',
        borderRadius: 10,
        paddingVertical:3
        
    },
    logo:{
        height:40,
        width:40,
        borderRadius:20,
        marginRight:19,
        marginLeft: 0
    },
    headerContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    }
  });
  
export default Header