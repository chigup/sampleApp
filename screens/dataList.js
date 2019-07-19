import React from 'react';
import { StyleSheet, Text, View,FlatList,ScrollView,Image } from 'react-native';
import * as firebase from 'firebase';
import { Container, Header, Content, Card, CardItem,
   Thumbnail,  Button, Icon, Left, Body, Right, ListItem } from 'native-base';

export default  class dataList extends React.Component {
    constructor(){
        super();
        this.state = {
            
            firebaseData:[]
        }
    }
    getData(){
      
        firebase.database().ref().child('0').on('value',(snap)=>{
         
          let data = snap.val();
          let firebaseData = Object.values(data);
          this.setState({firebaseData: firebaseData});
         console.log(firebaseData);
        
       
      });   
      }


    componentWillMount(){
        this.getData();
       
       }

 
       render() {
        return (
            <FlatList
            data={this.state.firebaseData}
            renderItem={({item,index})=>{
               return   <ListItem  image={item}/>
                   
                 
            }}/>




        );}
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    big: {
        fontSize: 30,
        flex:1
    }
});

