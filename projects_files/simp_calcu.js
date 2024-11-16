import React,{useState} from "react";
import { Button, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

function Simp_calcu()
{
    const [txt,setTxt] = useState('');
    const [txt2,setTxt2] = useState('');
    const [ans,setAns] =useState('');

    function sum()
    {
        setAns((parseInt(txt)+parseInt(txt2)));
    }
    function sub()
    {
        setAns((parseInt(txt)-parseInt(txt2)));
    }
    function div()
    {
        setAns((parseInt(txt)/parseInt(txt2)));
    }
    function mul()
    {
        setAns((parseInt(txt)*parseInt(txt2)));
    }

    return(

        <View style={style.main}>

            <TextInput style={style.txt1} inputMode="numeric" onChangeText={(t)=>{setTxt(t)}}></TextInput>
            <TextInput style={style.txt1} inputMode="numeric" onChangeText={(t)=>{setTxt2(t)}}></TextInput>
 
            <Text style={style.output} >{ans}</Text>

            <View style={style.parent}>
                <Pressable style={style.button} onPress={sum} ><Text style={style.txtx}>+</Text></Pressable>
                <Pressable style={style.button} onPress={sub}><Text style={style.txtx}>-</Text></Pressable>
                <Pressable style={style.button} onPress={div}><Text style={style.txtx}>/</Text></Pressable>
                <Pressable style={style.button} onPress={mul}><Text style={style.txtx}>*</Text></Pressable>
            </View>
                
        </View>

    )
}
export default Simp_calcu;

const style=StyleSheet.create({

    main:{
        height:"100%",
        backgroundColor:"black"
    },
    txt1:{
        borderWidth:3,
        borderColor:"white",
        color:"white"
    },
    output:{
        height:50,
        backgroundColor:"green",
        fontSize:20,
        borderWidth:3,
        borderColor:"white",
        color:"white",
        textAlignVertical:"center",
        textAlign:"center",
    },
    parent:{
        marginTop:10,
        height:50,
        backgroundColor:"black",
        flexDirection:"row",
        justifyContent:"space-evenly"
    },
    button:{
      height:"100%",
      width:"15%",
      backgroundColor:"orange",
      borderWidth:3,
      borderColor:"green",  
    },
    txtx:{
        height:"100%",
        width:"auto",
        fontSize:30,
        color:"green",
        textAlign:"center",
        textAlignVertical:"center"
    },
})