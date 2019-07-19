import React,{Component} from 'react';
import { View,ActivityIndicator} from 'react-native';
import * as firebase from 'firebase';



  


export default class loadingScreen extends Component {
   
componentDidMount(){
    firebase.auth().onAuthStateChanged((authenticate)=>{
        if(authenticate){
            this.props.navigation.replace("homeScreen")    
        }else{
            this.props.navigation.replace("signInScreen") 
        }
    })
}

render(){
    return (
        <View style={{alignItems:"center",justifyContent:"center"}}>
            <ActivityIndicator
            size="large"
            />
        </View>
      );
}

  }

 