import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Pressable, Alert } from "react-native";

function Numberpuzzle()
{
    const [numarr,setnumarr] = useState([])
    const [moves,setmoves] = useState(0)

    function randomvalue()
    {
        setmoves(0)
        var temp = [];

        for(var i = 0 ; i < 9 ;)
        {
            var randomnum = Math.round(Math.random()*8)
            if(!temp.includes(randomnum))
            {
                temp.push(randomnum)
                i++;
            }
        }
        for(var j = 0 ; j < temp.length ; j++)
        {
            if(temp[j]=="")
            {
                temp[j]="";
            }
        }
        setnumarr(temp)
    }
    useEffect(()=>{
        randomvalue();
    },[])

    const button = (ind) => {
                var temparr =[...numarr]

                if(ind==0)
                {
                    if(temparr[1]=="")
                    {
                        temparr[1]=temparr[ind]
                        temparr[ind]=""
                        setmoves(moves+1)
                    }
                    if(temparr[3]=="")
                    {
                        temparr[3]=temparr[ind]
                        temparr[ind]=""
                        setmoves(moves+1)
                    }
                }
                else if(ind==1)
                {
                    if(temparr[0]=="")
                    {
                        temparr[0]=temparr[ind]
                        temparr[ind]=""
                        setmoves(moves+1)
                    }
                    if(temparr[2]=="")
                    {
                        temparr[2]=temparr[ind]
                        temparr[ind]=""
                        setmoves(moves+1)
                    }
                    if(temparr[4]=="")
                    {
                        temparr[4]=temparr[ind]
                        temparr[ind]=""
                        setmoves(moves+1)
                    }
                }
                else if(ind==2)
                {
                    if(temparr[1]=="")
                    {
                        temparr[1]=temparr[ind]
                        temparr[ind]=""
                        setmoves(moves+1)
                    }
                    if(temparr[5]=="")
                    {
                        temparr[5]=temparr[ind]
                        temparr[ind]=""
                        setmoves(moves+1)
                    }
                }
                else if(ind==3)
                {
                    if(temparr[0]=="")
                    {
                        temparr[0]=temparr[ind]
                        temparr[ind]=""
                        setmoves(moves+1)
                    }
                    if(temparr[4]=="")
                    {
                        temparr[4]=temparr[ind]
                        temparr[ind]=""
                        setmoves(moves+1)
                    }
                    if(temparr[6]=="")
                    {
                        temparr[6]=temparr[ind]
                        temparr[ind]=""
                        setmoves(moves+1)
                    }
                }
                else if(ind==4)
                {
                    if(temparr[1]=="")
                    {
                        temparr[1]=temparr[ind]
                        temparr[ind]=""
                        setmoves(moves+1)
                    }
                    if(temparr[3]=="")
                    {
                        temparr[3]=temparr[ind]
                        temparr[ind]=""
                        setmoves(moves+1)
                    }
                    if(temparr[5]=="")
                    {
                        temparr[5]=temparr[ind]
                        temparr[ind]=""
                        setmoves(moves+1)
                    }
                    if(temparr[7]=="")
                    {
                        temparr[7]=temparr[ind]
                        temparr[ind]=""
                        setmoves(moves+1)
                    }
                }
                else if(ind==5)
                {
                    if(temparr[2]=="")
                    {
                        temparr[2]=temparr[ind]
                        temparr[ind]=""
                        setmoves(moves+1)
                    }
                    if(temparr[4]=="")
                    {
                        temparr[4]=temparr[ind]
                        temparr[ind]=""
                        setmoves(moves+1)
                    }
                    if(temparr[8]=="")
                    {
                        temparr[8]=temparr[ind]
                        temparr[ind]=""
                        setmoves(moves+1)
                    }
                }
                else if(ind==6)
                {
                    if(temparr[3]=="")
                    {
                        temparr[3]=temparr[ind]
                        temparr[ind]=""
                        setmoves(moves+1)
                    }
                    if(temparr[7]=="")
                    {
                        temparr[7]=temparr[ind]
                        temparr[ind]=""
                        setmoves(moves+1)
                    }
                }
                else if(ind==7)
                {
                    if(temparr[6]=="")
                    {
                        temparr[6]=temparr[ind]
                        temparr[ind]=""
                        setmoves(moves+1)
                    }
                    if(temparr[4]=="")
                    {
                        temparr[4]=temparr[ind]
                        temparr[ind]=""
                        setmoves(moves+1)
                    }
                    if(temparr[8]=="")
                    {
                        temparr[8]=temparr[ind]
                        temparr[ind]=""
                        setmoves(moves+1)
                    }
                }
                else if(ind==8)
                {
                    if(temparr[5]=="")
                    {
                        temparr[5]=temparr[ind]
                        temparr[ind]=""
                        setmoves(moves+1)
                    }
                    if(temparr[7]=="")
                    {
                        temparr[7]=temparr[ind]
                        temparr[ind]=""
                        setmoves(moves+1)
                    }
                }

                setnumarr(temparr)
    }

    useEffect(()=>{
        if(numarr[0]=="1" && numarr[1]=="2" && numarr[2]=="3" && numarr[3]=="4" && numarr[4]=="5" && numarr[5]=="6" && numarr[6]=="7" && numarr[7]=="8" && numarr[8]=="")
        {
             Alert.alert("Developer Team 🎉","Awesome... You are really clever. you completed the game.")
        }
    },[numarr])
       



    return(
        <View style={style.main}>
            <View style={style.heding}>
                <Text style={style.name}> Number Puzzle</Text>
            </View>

            <View style={style.perent_button_box}>
                <View style={style.moveparent}>
                        <Text style={style.move}>Move : {moves}</Text>
                </View>
                <View style={style.box_button}>
                        {
                            numarr.map((item,ind)=>{
                                return(
                                    <Pressable style={style.button} onPress={()=>{button(ind)}}>
                                        <Text style={style.buton_txt}>{item}</Text>
                                    </Pressable>
                                )
                            })
                        }
                </View>
                <View style={style.footer}>
                        <Pressable style={style.restart} onPress={()=>{randomvalue()}} ><Text style={style.rebuton}>Refresh</Text></Pressable>
                </View>
            </View>
        </View>
    )
}
export default Numberpuzzle;

const style = StyleSheet.create({

    main:{
        height:"100%",
        backgroundColor:"#FAF0D7",
    },
    heding:{
        height:"10%",
        backgroundColor:"#8CC0DE",
    },
    name:{
        height:"100%",
        fontSize:35,
        fontWeight:"900",
        color:"#FAF0D7",
        textAlign:"center",
        textAlignVertical:"center",
    },
    perent_button_box:{
        height:"91%",
        flexDirection:"column",
        justifyContent:"center",
        rowGap:15
    },
    moveparent:{
        height:"10%",
        backgroundColor:"#FFD9C0"
    },
    move:{
        height:"100%",
        width:"100%",
        fontSize:26,
        fontWeight:"900",
        color:"#8CC0DE",
        textAlign:"center",
        textAlignVertical:"center",
    },
    box_button:{
        height:"43%",
        width:"85%",
        backgroundColor:"#FFD9C0",
        alignSelf:'center',
        borderWidth:10,
        borderStyle:"solid",
        borderColor:"#8CC0DE",
        borderRadius:15,
        flexDirection:"row",
        justifyContent:"center",
        alignContent:"center",
        rowGap:3,
        columnGap:3,
        flexWrap:"wrap"
    },
    button:{
        height:"31%",
        width:"31%",
        backgroundColor:"#CCEEBC",
        borderWidth:5,
        borderRadius:3,
        borderColor:"#331D2C"
    },
    buton_txt:{
        height:"100%",
        fontSize:50,
        fontWeight:"900",
        textAlign:"center",
        textAlignVertical:"center",
        color:"#3F2E3E"
    },
    footer:{
        height:"25%",
    },
    restart:{
        height:"25%",
        width:"35%",
        backgroundColor:"#8CC0DE",
        alignSelf:"center",
        borderRadius:10,
    },
    rebuton:{
        height:"100%",
        fontSize:30,
        fontWeight:"900",
        textAlign:"center",
        textAlignVertical:"center",
        color:"#FAF0D7"
    }

})