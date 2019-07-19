import React from 'react';
import { StyleSheet, Text, View,FlatList,ScrollView,Image,ListView } from 'react-native';
import * as firebase from 'firebase';
import { Container, Header, Content, Card, CardItem,
   Thumbnail,  Button, Icon, Left, Body, Right, ListItem } from 'native-base';

export default  class dataList extends React.Component {
    constructor(){
       // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        super();
        this.state = {
            
            firebaseData:[]
              //dataSource: ds.cloneWithRows(['row 1', 'row 2']),
           
        }
    }
    getData(){
      
        firebase.database().ref().child('0').on('value',(snap)=>{
         
          let data = snap.val();
          let firebaseData = Object.values(data);
          this.setState({firebaseData: firebaseData,
           
        
        });
           // this.setState.firebaseData.json();
            console.log(this.state.firebaseData);
          //  let datamap = new Map(keyy,this.state.firebaseData);
        //  console.log(this.state.dataSource);
       
      });   
      }


    componentWillMount(){
        this.getData();
       
       }

 
       render() {
        return (
            <ScrollView>
            <View style={styles.MainContainer}>
 
            { this.state.firebaseData.map((item, key)=>(
                <Image style={{height:300,width:300}}   source={{uri:item}}/>)
            )}
    
        </View>
            </ScrollView>
           
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
    },
    MainContainer: {
        flex: 1,
        margin: 10
        
      }
});

