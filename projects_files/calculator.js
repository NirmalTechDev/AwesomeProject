import React, { useState } from "react";
import { Alert, Button, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

function Calculator() {

  var string1=""
  var string2=""

  const [output1, getoutput1] = useState('');
  const [output2,getoutput2] = useState('');
  
  function calculator(no) {
    getoutput1(output1 + no)
    // console.log(output1)
  }

  function calcdata(x)
  { 
    var temp
    for(var i = 0 ; i < output1.length; i++)
    {
        if(output1[i]=="+" || output1[i]=="×" || output1[i]=="÷" || output1[i]=="-")
        {
            temp=i;
        }
    }

    for(var j = 0 ; j < temp; j++)
    {
      string1 = string1+output1[j]
    }

    for(var k = temp+1 ; k < output1.length; k++)
    {
      string2 = string2+output1[k]
    }

    if(output1[temp]=="+")
    {
        getoutput2(output1)
        getoutput1(parseFloat(string1)+parseFloat(string2))
    }
    if(output1[temp]=="×")
    {
        getoutput2(output1)
        getoutput1(parseFloat(string1)*parseFloat(string2))
    }
    if(output1[temp]=="÷")
    {
        getoutput2(output1)
        getoutput1(parseFloat(string1)/parseFloat(string2))
    }
    if(output1[temp]=="-")
    {
        getoutput2(output1)
        getoutput1(parseFloat(string1)-parseFloat(string2))
    }
  }

  function clearall(c) 
  {
    if(c==1)
    {
      let temp = output1;
      let temp2 = temp.toString()
      getoutput1(temp2.substring(0,temp2.length-1));
    }
    if(c==2)
    {
      getoutput1('');
      getoutput2('');
    }
  }
  
  return (
    <View style={style.main}>
      <View style={style.perant_textarea}>
        {/* <Text style={style.calcu}>Calculator</Text> */}
        <Text style={style.output2}>{output2}</Text>
        <Text style={style.output1}>{output1}</Text>
      </View>

      <View style={style.perant_button}>

          <View style={style.child_button}>
              <Pressable onPress={()=>{clearall(2)}} style={style.button}>
                  <Text style={style.control_txt1}>AC</Text>
              </Pressable>
          </View>

          <View style={style.child_button}>
              <Pressable onPress={()=>{clearall(1)}} style={style.button}>
                  <Text style={style.control_txt1}>C</Text>
              </Pressable>
          </View>

          <View style={style.child_button}>
              <Pressable  style={style.button}>
                  <Text style={style.control_txt1}>%</Text>
              </Pressable>
          </View>

          <View style={style.child_button}>
              <Pressable  style={style.button } onPress={()=>{calculator("÷")}}>
                  <Text style={style.control_txt}>÷</Text>
              </Pressable>
          </View>

          <View style={style.child_button}>
              <Pressable onPress={() => { calculator("7") }} style={style.button}>
                  <Text style={style.txt}>7</Text>
              </Pressable>
          </View>

          <View style={style.child_button}>
              <Pressable onPress={() => { calculator("8") }} style={style.button}>
                  <Text style={style.txt}>8</Text>
              </Pressable>
          </View>

          <View style={style.child_button}>
              <Pressable onPress={() => { calculator("9") }} style={style.button}>
                  <Text style={style.txt}>9</Text>
              </Pressable>
          </View>

          <View style={style.child_button}>
              <Pressable  style={style.button} onPress={()=>{calculator("×")}}>
                  <Text style={style.control_txt}>×</Text>
              </Pressable>
          </View>

          <View style={style.child_button}>
              <Pressable onPress={() => { calculator("4") }} style={style.button}>
                  <Text style={style.txt}>4</Text>
              </Pressable>
          </View>

          <View style={style.child_button}>
              <Pressable onPress={() => { calculator("5") }} style={style.button}>
                  <Text style={style.txt}>5</Text>
              </Pressable>
          </View>

          <View style={style.child_button}>
              <Pressable onPress={() => { calculator("6") }} style={style.button}>
                  <Text style={style.txt}>6</Text>
              </Pressable>
          </View>

          <View style={style.child_button}>
              <Pressable  style={style.button} onPress={()=>{calculator("-")}}>
                  <Text style={style.control_txt}>-</Text>
              </Pressable>
          </View>

          <View style={style.child_button}>
              <Pressable onPress={() => { calculator("1") }} style={style.button}>
                  <Text style={style.txt}>1</Text>
              </Pressable>
          </View>

          <View style={style.child_button}>
              <Pressable onPress={() => { calculator("2") }} style={style.button}>
                  <Text style={style.txt}>2</Text>
              </Pressable>
          </View>

          <View style={style.child_button}>
              <Pressable onPress={() => { calculator("3") }} style={style.button}>
                  <Text style={style.txt}>3</Text>
              </Pressable>
          </View>

          <View style={style.child_button}>
              <Pressable  style={style.button} onPress={()=>{calculator("+")}}>
                  <Text style={style.control_txt}>+</Text>
              </Pressable>
          </View>

          <View style={style.child__button}>
              <Pressable onPress={() => { calculator(0) }} style={style.button_}>
                  <Text style={style.txtzero}>0</Text>
              </Pressable>
          </View>

          <View style={style.child_button}>
              <Pressable  style={style.button}>
                  <Text style={style.txt} onPress={() => {calculator('.')}}>.</Text>
              </Pressable>
          </View>

          <View style={style.child_button}>
              <Pressable style={style.button} onPress={calcdata} >
                  <Text style={style.control_txt}>=</Text>
              </Pressable>
          </View>

      </View>
    </View>

  )
}
export default Calculator;

const style = StyleSheet.create({

  main: {
    height: "100%",
    backgroundColor: "black",
  },

  perant_textarea: {
    height: "37%",
    backgroundColor: "black",
  },
  // calcu: {
  //   height: "20%",
  //   fontSize: 45,
  //   fontFamily: 'calibri',
  //   fontWeight: "bold",
  //   textAlignVertical: "center",
  //   color: "white",
  // },
  output1: {
    height: "50%",
    fontSize:40,
    fontWeight: "800",
    color: "white",
    padding: 15,
    letterSpacing:5,
    textAlign: "right",
    textAlignVertical: "top",
    borderBottomWidth:1,
    borderColor:"white",
    backgroundColor: "rgba(0,0,0,0.1)",
    shadowColor:"black",
    elevation:155,
  },
  output2: {
    height: "50%",
    fontSize:30,
    fontWeight: "200",
    color: "rgba(255,255,255,0.5)",
    padding: 15,
    letterSpacing:2,
    textAlign: "right",
    textAlignVertical: "bottom",
    backgroundColor: "rgba(0,0,0,0.1)",
    shadowColor:"white",
    elevation:155,
  },

  perant_button: {
    flex:1,
    width: "100%",
    height: "63%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignContent: "space-around",
    columnGap: 10,
    backgroundColor: "rgba(0,0,0,0.1)",
    shadowColor:"white",
    elevation:155,
  },

  child_button: {
    width: "18.2%",
    height: "14.2%",
    borderRadius: 50,
    backgroundColor: "blue"
  },

  child__button: { width: "45%", height: "14%", borderRadius: 50 },
  button_: { width: "100%", height: "100%", backgroundColor: "white", borderRadius: 50 },

  button: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    borderRadius: 50,

  },

  control_txt1: {
    fontSize: 35,
    fontWeight: "bold",
    height: "100%",
    width: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    color: "black",
    backgroundColor: "rgb(169,169,169)",
    borderRadius: 50,
  },
  control_txt: {
    fontSize: 40,
    fontWeight: "bold",
    textAlignVertical: "center",
    height: "100%",
    width: "100%",
    textAlign: "center",
    color: "white",
    backgroundColor: "orange",
    borderRadius: 50,
  },

  txt: {
    fontSize: 40,
    textAlignVertical: "center",
    fontWeight: "bold",
    height: "100%",
    width: "100%",
    textAlign: "center",
    color: "white",
    borderRadius:50,
    backgroundColor: "rgba(0,0,0,0.8)",
    textShadowColor:"orange",
    textShadowRadius:50,
  },

  txtzero: {
    fontSize: 40,
    textAlignVertical: "center",
    fontWeight: "bold",
    height: "100%",
    width: "100%",
    textAlign: "center",
    color: "white",
    backgroundColor: "rgba(0,0,0,0.8)",
    textShadowColor:"orange",
    textShadowRadius:50,
    borderRadius:50,
  }

})