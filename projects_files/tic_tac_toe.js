import React, { useState,useEffect } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from "@react-navigation/native";

function Tic_tac_toe() {

    const [scorno,setscorno] = useState(10)
    // ============[Stordata_Scor]===============
    const storeData = async (value) => {
        try {
          await AsyncStorage.setItem('Scor', value);
        } catch (e) {
          // saving error
        }
      };
    // ============[Getdata_Scor]==================
    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('Scor');
          if (value !== null) {
            setscorno(parseInt(value))
          }
        } catch (e) {
          // error reading value
        }
      };  
    useFocusEffect(
        React.useCallback(() => {
            getData();  
        })
    )



    const [btn1, setbtn1] = useState();
    const [btn2, setbtn2] = useState();
    const [btn3, setbtn3] = useState();
    const [btn4, setbtn4] = useState();
    const [btn5, setbtn5] = useState();
    const [btn6, setbtn6] = useState();
    const [btn7, setbtn7] = useState();
    const [btn8, setbtn8] = useState();
    const [btn9, setbtn9] = useState();

    const [b1, setb1] = useState(false);
    const [b2, setb2] = useState(false);
    const [b3, setb3] = useState(false);
    const [b4, setb4] = useState(false);
    const [b5, setb5] = useState(false);
    const [b6, setb6] = useState(false);
    const [b7, setb7] = useState(false);
    const [b8, setb8] = useState(false);
    const [b9, setb9] = useState(false);

    const [temp, settemp] = useState(0);

    const [turn, setturn] = useState();

    useEffect(()=>{
        if (temp % 2 == 0) {
            setturn("User Turn: X")
        }
        else {
            setturn("User Turn: O")
        }
    },[btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9])

    function Game(n) {

        if (temp % 2 == 1) {
            if (n == 0) {
                setbtn1("O")
                setb1(true)
            }
            if (n == 1) {
                setbtn2("O")
                setb2(true)
            }
            if (n == 2) {
                setbtn3("O")
                setb3(true)
            }
            if (n == 3) {
                setbtn4("O")
                setb4(true)
            }
            if (n == 4) {
                setbtn5("O")
                setb5(true)
            }
            if (n == 5) {
                setbtn6("O")
                setb6(true)
            }
            if (n == 6) {
                setbtn7("O")
                setb7(true)
            }
            if (n == 7) {
                setbtn8("O")
                setb8(true)
            }
            if (n == 8) {
                setbtn9("O")
                setb9(true)
            }
        }
        else {
            if (n == 0) {
                setbtn1("X")
                setb1(true)
            }
            if (n == 1) {
                setbtn2("X")
                setb2(true)
            }
            if (n == 2) {
                setbtn3("X")
                setb3(true)
            }
            if (n == 3) {
                setbtn4("X")
                setb4(true)
            }
            if (n == 4) {
                setbtn5("X")
                setb5(true)
            }
            if (n == 5) {
                setbtn6("X")
                setb6(true)
            }
            if (n == 6) {
                setbtn7("X")
                setb7(true)
            }
            if (n == 7) {
                setbtn8("X")
                setb8(true)
            }
            if (n == 8) {
                setbtn9("X")
                setb9(true)
            }
        }
        settemp(temp + 1)    
    }
    
    function chackwinner() {
        if ( (btn1 == "O" && btn2 == "O" && btn3 == "O") || (btn4 == "O" && btn5 == "O" && btn6 == "O") ||
            (btn7 == "O" && btn8 == "O" && btn9 == "O") || (btn1 == "O" && btn4 == "O" && btn7 == "O") ||
            (btn2 == "O" && btn5 == "O" && btn8 == "O") || (btn3 == "O" && btn6 == "O" && btn9 == "O") ||
            (btn1 == "O" && btn5 == "O" && btn9 == "O") || (btn3 == "O" && btn5 == "O" && btn7 == "O") )
        {
            storeData(String(scorno+10))
            setturn("O IS WINN...🎉")
            Alert.alert("congratulations..."," O iS Winner 💎🎉")
            setb1(true);setb2(true);setb3(true);setb4(true);setb5(true);setb6(true);setb7(true);setb8(true);setb9(true);
        }   
        else if ((btn1 == "X" && btn2 == "X" && btn3 == "X") || (btn4 == "X" && btn5 == "X" && btn6 == "X") ||
                (btn7 == "X" && btn8 == "X" && btn9 == "X") || (btn1 == "X" && btn4 == "X" && btn7 == "X") ||
                (btn2 == "X" && btn5 == "X" && btn8 == "X") || (btn3 == "X" && btn6 == "X" && btn9 == "X") ||
                (btn1 == "X" && btn5 == "X" && btn9 == "X") || (btn3 == "X" && btn5 == "X" && btn7 == "X"))
        {
            storeData(String(scorno+10))
            setturn("X IS WINN...🎉")
            Alert.alert("congratulations..."," X iS Winner 💎🎉")
            setb1(true);setb2(true);setb3(true);setb4(true);setb5(true);setb6(true);setb7(true);setb8(true);setb9(true);
        }
        // if (btn1 != undefined && btn2 != undefined && btn3 != undefined && 
        //     btn4 != undefined && btn5 != undefined && btn6 != undefined && 
        //     btn7 != undefined && btn8 != undefined && btn9 != undefined ) 
        // {
        //     Alert.alert("hello","match is tie!");
        // }
    }

    useEffect( () => {
        chackwinner();
    },[btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9])
    
    function restart() {
        setbtn1("");
        setbtn2("");
        setbtn3("");
        setbtn4("");
        setbtn5("");
        setbtn6("");
        setbtn7("");
        setbtn8("");
        setbtn9("");

        setb1(false)
        setb2(false)
        setb3(false)
        setb4(false)
        setb5(false)
        setb6(false)
        setb7(false)
        setb8(false)
        setb9(false)

        settemp(0)
        setturn("User Turn: O")

    }

    return (

        <View style={style.main}>
            <View style={style.name}><Text style={style.name1}>Tic-Tac-Toe</Text></View>
            <View style={style.scorperent}>
                <Text style={style.scorname}>Your Score :</Text>
                <Text style={style.scortxt}>{scorno}</Text>
            </View>
            <View style={style.parent}>
                <View style={style.child_of_parent}>
                    <Pressable style={style.button} disabled={b1} onPress={() => { Game(0) }} ><Text style={style.txt}>{btn1}</Text></Pressable>
                    <Pressable style={style.button} disabled={b2} onPress={() => { Game(1) }} ><Text style={style.txt}>{btn2}</Text></Pressable>
                    <Pressable style={style.button} disabled={b3} onPress={() => { Game(2) }} ><Text style={style.txt}>{btn3}</Text></Pressable>
                    <Pressable style={style.button} disabled={b4} onPress={() => { Game(3) }} ><Text style={style.txt}>{btn4}</Text></Pressable>
                    <Pressable style={style.button} disabled={b5} onPress={() => { Game(4) }} ><Text style={style.txt}>{btn5}</Text></Pressable>
                    <Pressable style={style.button} disabled={b6} onPress={() => { Game(5) }} ><Text style={style.txt}>{btn6}</Text></Pressable>
                    <Pressable style={style.button} disabled={b7} onPress={() => { Game(6) }} ><Text style={style.txt}>{btn7}</Text></Pressable>
                    <Pressable style={style.button} disabled={b8} onPress={() => { Game(7) }} ><Text style={style.txt}>{btn8}</Text></Pressable>
                    <Pressable style={style.button} disabled={b9} onPress={() => { Game(8) }} ><Text style={style.txt}>{btn9}</Text></Pressable>
                </View>
            </View>
            <View style={style.footer}>
                <Text style={style.turn}>{turn}</Text>
                <Pressable style={style.buton} onPress={restart} ><Text style={style.restart} >Restart</Text></Pressable>
            </View>
        </View>

    )
} 

export default Tic_tac_toe;

const style = StyleSheet.create({

    main: {
        height: "100%",
        backgroundColor: "black",
        justifyContent:"space-between"
    },
    name: {
        height: "10%",
        backgroundColor: "black",
    },
    name1: {
        fontSize: 40,
        fontWeight: "bold",
        color: "skyblue",
        textAlign: "center",
    },
    scorperent:{
        height:"8%",
        // backgroundColor:"white",
    },
    scorname:{
        height:"40%",
        fontSize:17,
        textAlignVertical:"bottom",
        alignSelf:"center",
        fontWeight:"700",
        color:"white",
    },
    scortxt:{
        height:"60%",
        width:"30%",
        alignSelf:"center",
        fontSize:25,
        fontWeight:"900",
        color:"white",
        textAlign:"center",
        textAlignVertical:"top",
        borderBottomWidth:4,
        borderBottomColor:"white"
    },
    parent: {
        height: "50%",
        backgroundColor: "black",
        borderRadius: 50,
        justifyContent: "center",
    },
    child_of_parent: {
        height: "90%",
        width: "90%",
        backgroundColor: "skyblue",
        alignSelf: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        alignContent: "space-between",
        justifyContent: "space-between"  
    },

    button: {
        height: "31%",
        width: "31%",
        backgroundColor: "black",
        justifyContent: "center",
    },

    txt: {
        height: "70%",
        width: "70%",
        alignSelf: "center",
        backgroundColor: "black",
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 55,
        color: "skyblue",
        fontWeight: "bold",
    },

    footer: {
        height: "20%",
        backgroundColor: "black",
        justifyContent: "center",
    },
    buton: {
        height: "30%",
        width: "40%",
        alignSelf: "center",
        backgroundColor: "skyblue",
    },
    turn: {
        height: "30%",
        width: "50%",
        backgroundColor: "black",
        fontSize: 25,
        color: "white",
        fontWeight: "900",
        alignSelf: "center",
        textAlign: "center",
        textAlignVertical: "center",
    },
    restart: {
        height: "100%",
        fontSize: 30,
        fontWeight: "900",
        color: "black",
        textAlign: "center",
        textAlignVertical: "center",
    }
})