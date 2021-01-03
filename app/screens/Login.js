import React from 'react';
import { StyleSheet, View,Text,Button} from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import  Buttons from '../components/Buttons'
import Textinput from '../components/TextInput'
import { loadImages } from '../ducks/users'

function Login (){
  const dispatch = useDispatch()
  const data = useSelector(state => state.images)
  const handler = () =>{
    dispatch(loadImages())
}
console.log(data)
    return (
      <>
        <View style={styles.container}>
            <Textinput  placeholder="email" />
            <Textinput  placeholder="password" />
            <Button onPress={handler} title="Login"/>
           
        </View>
        <Text>{
                data && data.map(todo=>(
                    <Text>{todo.name}</Text>
                ))
            }</Text>
        <Text>WELCOME TO REACT-NATIVE</Text>
      </>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
        marginTop:40,
        backgroundColor: '#f7f7f7',
        borderWidth: 5,
        borderColor:"black",
      },
      
})
  export default Login;
  