import React from "react";
import { StyleSheet, View ,Image ,Text,Button,Alert, ScrollView, ImageBackground, Pressable  } from "react-native";

function Apphome({navigation})
{
    return(
        <View style={style.main}>
          <View style={style.acount}>
                <View style={style.nameimagebg}>
                      <View style={style.imgbg}>
                          <Image source={require("./img/dp.jpg")} style={style.img}></Image>
                      </View>
                      <View style={style.namebg}>
                          <Text style={style.name}> Admin Name </Text>
                          <Text style={style.bio}>Bio...</Text>
                      </View>
                </View>
          </View>
          <ScrollView>
          <View style={style.peta}>
                  <View style={style.itemsbg}>
                  <View style={style.iteme}>
                              <ImageBackground source={require("./img/facebook.jpg")} resizeMode="contain" style={{height:"100%",width:"100%",margin:0}}>
                                  <View style={style.imgtxt}></View>
                                  <Pressable style={style.button} onPress={()=>navigation.navigate('facebook')} ><Text style={style.go}>Facebook demo</Text></Pressable>
                              </ImageBackground>
                        </View>
                        <View style={style.iteme}>
                              <ImageBackground source={require("./img/calcu.png")} resizeMode="contain" style={{height:"100%",width:"100%",margin:0}}>
                                  <View style={style.imgtxt}></View>
                                  <Pressable style={style.button} onPress={()=>navigation.navigate('simpal-calcu')} ><Text style={style.go}>Simpel calculator</Text></Pressable>
                              </ImageBackground>
                        </View>
                        <View style={style.iteme}>
                              <ImageBackground source={require("./img/calcu.jpg")} resizeMode="contain" style={{height:"100%",width:"100%",margin:0}}>
                                  <View style={style.imgtxt}></View>
                                  <Pressable style={style.button} onPress={()=>navigation.navigate('calculator')} ><Text style={style.go}>Calculator</Text></Pressable>
                              </ImageBackground>
                        </View>
                        <View style={style.iteme}>
                              <ImageBackground source={require("./img/result.jpg")} resizeMode="contain" style={{height:"100%",width:"100%",margin:0}}>
                                  <View style={style.imgtxt}></View>
                                  <Pressable style={style.button} onPress={()=>navigation.navigate('result')} ><Text style={style.go}>Student-Result</Text></Pressable>
                              </ImageBackground>
                        </View>
                        <View style={style.iteme}>
                              <ImageBackground source={require("./img/tictactoe.png")} resizeMode="contain" style={{height:"100%",width:"100%",margin:0}}>
                                  <View style={style.imgtxt}></View>
                                  <Pressable style={style.button} onPress={()=>navigation.navigate('tic-tac-toe')}><Text style={style.go}>Tic-Tac-Toe</Text></Pressable>
                              </ImageBackground>
                        </View>
                        <View style={style.iteme}>
                              <ImageBackground source={require("./img/puzzle.png")} resizeMode="contain" style={{height:"100%",width:"100%",margin:0}}>
                                  <View style={style.imgtxt}></View>
                                  <Pressable style={style.button} onPress={()=>navigation.navigate('puzzle')}><Text style={style.go}>Number Puzzle</Text></Pressable>
                              </ImageBackground>
                        </View>
                  </View>            
          </View>
          </ScrollView>
      </View>
    )
}
export default Apphome
const style =StyleSheet.create({

    main:{
      height:"100%",
    },
    peta:{
      height:1000,
      backgroundColor:"black",
    },
    acount:{
      height:"15%",
      backgroundColor:"orange",
    },
    nameimagebg:{
      height:"85%",
      width:"90%",
      marginVertical:10,
      flexDirection:"row",
      justifyContent:"space-evenly",
      alignSelf:"center",
      backgroundColor:"black",
      borderRadius:15
    },
    imgbg:{
      height:"90%",
      width:"25%",
      alignSelf:"center",
    },
    img:{
      height:"100%",
      width:"100%",
      borderRadius:70,
      borderWidth:3,
      borderColor:"orange",
    },
    namebg:{
      height:"100%",
    },
    name:{
      height:"40%",
      color:"orange",
      fontSize:25,
      fontWeight:"900",
      // textAlign:"center",
      textAlignVertical:"center",
    },
    bio:{
      height:"60%",
      fontSize:14,
      fontWeight:"900",
      color:"white",
      textAlign:"center",
      textAlignVertical:"center",
    },
    itemsbg:{
      height:"100%",
      width:"95%",
      backgroundColor:"black",
      alignSelf:"center",
      flexDirection:"column",
      justifyContent:"space-evenly",
    },
    iteme:{
      height:155,
      backgroundColor:"white",
      borderRadius:50,
      overflow:"hidden",
      borderTopWidth:5,
      borderRightWidth:5,
      borderLeftWidth:5,
      borderColor:"orange"
    },
    imgtxt:{
      height:"75%",
      fontSize:30,
      textAlign:"center",
      textAlignVertical:"center",
      color:"orange",
      // backgroundColor:"rgba(255,255,255,0.4)",
      backgroundColor:"rgba(0,0,0,0.6)",
    },
    button:{
        height:"25%",
        backgroundColor:"orange",
    },
    go:{
        height:"100%",
        fontSize:30,
        textAlign:"center",
        color:"black",
        textAlignVertical:"center",
    },
  })