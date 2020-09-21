import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, YellowBox, TouchableOpacity } from 'react-native';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'black',
      show: false
    };
  }
  makeRed = () => {
    if(this.state.show===false){
    this.setState({
      color: 'red',
      show: true
    })
  }else{
    this.makeNormal()
  }
    }
  makeGreen = () => {
    if(this.state.show===false){
    this.setState({
      color: 'green',
      show: true
     })
    }else{
      this.makeNormal()
    }
    }
    makeBlue = () => {
      if(this.state.show===false){
    this.setState({
      color: 'blue',
      show: true
    })
  }else{
    this.makeNormal()
  }
  }
    makePink = () => {
      if(this.state.show===false){
    this.setState({
       color: 'pink',
       show: true
    })
  }else{
    this.makeNormal()
  }
  }
  makeNormal = () => {
    this.setState({
       color: 'black',
       show: false
    });
  }
  render(){
  return (
    <View style={styles.parentView}>
      <View style={styles.yellowView}>
        <View style={styles.viewView}>
      <TouchableOpacity onPressIn={this.makeRed} onPressOut={this.textStyle}>
        <View style={styles.buttonStyle}>
          <Text>Button1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPressIn={this.makeBlue} onPressOut={this.textStyle}>
        <View style={styles.buttonStyle}>
          <Text>Button2</Text>
        </View>
      </TouchableOpacity >
      </View>
      <View style={styles.viewView}>
      <TouchableOpacity onPressIn={this.makeGreen} onPressOut={this.textStyle}>
        <View style={styles.buttonStyle}>
          <Text>Button3</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPressIn={this.makePink} onPressOut={this.textStyle}>
        <View style={styles.buttonStyle}>
          <Text>Button4</Text>
        </View>
      </TouchableOpacity>
      </View>
      </View>
      <View style={styles.redView}>
        <View>
          <Text style={[styles.textStyle, {color: this.state.color}]}>{this.state.text}text1</Text>
          <Text style={[styles.textStyle, {color: this.state.color}]}>{this.state.text}text2</Text>
          <Text style={[styles.textStyle, {color: this.state.color}]}>{this.state.text}text3</Text>
          <Text style={[styles.textStyle, {color: this.state.color}]}>{this.state.text}text4</Text>
        </View>
      </View>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  parentView:{
    flex:1
  },
  viewView:{
    flex: 1,
    flexDirection:'row',
    flexWrap:'wrap'
  },
  yellowView:{
    flex:1,
    backgroundColor:'#c3c3c3',
    flexWrap:'wrap',
    flexDirection: 'column',
    alignItems:'center'
  },
  redView:{
    flex:1,
    backgroundColor:'#feaec9',
    flexWrap:'wrap',
    flexDirection: 'column',
    alignItems:'center'
  },
  buttonStyle:{
    height:50,
    width:150,
    borderRadius: 50,
    borderColor:'yellow',
    borderWidth:1,
    backgroundColor:'white',
    margin:20,
    justifyContent:'center',
    alignItems:'center'    
  },
  textStyle:{
    height:50,
    width:150,
    borderColor:'black',
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    fontSize:21
  },
  text1:{
    colorText:'red'
  },
  colorText: function() {
    this.setState({textColored: true});
  },
  resetText: function() {
    this.setState({textColored: false});
  },
  textColored: function() {
    if(this.state.textColored) {
      return styles.text1;
    } else {
      return styles.textStyle;
    }
  }
});
