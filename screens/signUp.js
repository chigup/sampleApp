import React,{Component} from 'react';
import { StyleSheet, Text,Image,
    View,KeyboardAvoidingView,
    TouchableOpacity,alert } from 'react-native';
import {Form,Item,Input,Label,Button} from 'native-base';
import * as firebase from 'firebase';





export default class signUp extends Component {

     
    static navigationOptions = {
        title: 'sign Up screen',
        header:null
      };

      constructor(props){
          super(props);
          this.state={
              email:"",
              password:""
          }
      }

      signUp=(email,password)=>{
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(authenticate=>{
            this.props.navigation.navigate("homeScreen");
        })
        .catch(error=>{
            alert(error.message)
        }
        )
    } 

      render(){
        return (
            <KeyboardAvoidingView  styles={styles.container} behavior="position" enabled> 
            <Form style ={styles.form}>
                <Item floatingLabel>
                <Label> Email</Label>
                <Input 
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                onChangeText={ email=>this.setState({email})}
                  />
                </Item>
                <Item floatingLabel>
                <Label> Password</Label>
                <Input 
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                onChangeText={ password=>this.setState({password})}
                  />
                </Item>
                <Button
                style={styles.button}
                full
                rounded
                onPress={()=>{
                    this.signUp(
                        this.state.email,
                        this.state.password
                    )  ;
                }}>
                <Text style={styles.buttonText}>Sign Up</Text>    
                </Button>
                <Text styles={styles.button}>OR</Text>
                <TouchableOpacity onPress={()=>{
                    this.props.navigation.navigate("signInScreen")
                }}>
                    <Text  styles={styles.button}>Already have a account</Text>
                </TouchableOpacity>
            </Form>
            </KeyboardAvoidingView>
          
          );
    }
       
   
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#000",
     
    },
    logoContainer: {
      alignItems: "center",
  
      marginTop: 100,
      marginBottom: 100
    },
    form: {
      padding: 20,
      width: "100%",
      marginBottom: 30
    },
    button: {
      marginTop: 20
    },
    buttonText: {
      color: "#fff"
    },
    footer: {
      alignItems: "center"
    }
  });
  
  
