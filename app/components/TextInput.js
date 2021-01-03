import React from 'react';
import {TextInput} from 'react-native'
import inputStyle from '../styles/textInput'

export default function Textinput(props){
 return (
    <TextInput style={inputStyle.input} placeholder={props.placeholder} />
 )
}