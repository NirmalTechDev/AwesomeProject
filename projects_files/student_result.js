import React,{useState} from "react";
import { Alert, Button, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

function Stu_Result()
{
    const [name,nameInput] = useState('');

    const [sub1mark,sub1] = useState('');
    const [sub2mark,sub2] = useState('');
    const [sub3mark,sub3] = useState('');
    const [sub4mark,sub4] = useState('');
    const [sub5mark,sub5] = useState('');

    const [sumofsub,sum] = useState('');

    const [percentage,getpercentage] = useState('');
    const [sign,getsign] = useState('')

    const [gred,getgred] = useState('');

    const [note,getnote] = useState('');
    const [fail,getfail] =useState('');

    const [max,getmax] = useState('');
    const [min,getmin] = useState('');


    function Result()
    {
        if(sub1mark!='' && sub2mark!='' && sub3mark!='' && sub4mark!='' && sub5mark!='')
        {
            
                goToDown = () => {
                    this.scroll.scrollTo({x:1000,y:1000, animated:true});
                }

                    tempsum=parseInt(sub1mark)+parseInt(sub2mark)+parseInt(sub3mark)+parseInt(sub4mark)+parseInt(sub5mark)
                    sum(tempsum)
            //=====================
                    if(sub1mark > 35 && sub2mark > 35 && sub3mark > 35 && sub4mark > 35 && sub5mark > 36)
                    {
                        tempper=parseFloat(tempsum)/5;
                        getpercentage(tempper);
                        getsign("%");
                    }
                    else
                    {
                        tempper="***";
                        getpercentage("***");
                    }
            //===================== 
                    if(tempper=="***")
                    {
                        getgred("***");
                    }
                    else
                    {
                        if(tempper>95){getgred("A++")}
                        else if(tempper<=95 && tempper>=90){getgred("A+")}
                        else if(tempper<=90 && tempper>=80){getgred("B+")}
                        else if(tempper<=80 && tempper>=70){getgred("B")}
                        else if(tempper<=70 && tempper>=50){getgred("C")}
                        else if(tempper<=50 && tempper>=35){getgred("d")}                
                    }
            //====================
                        t=0;
                    if(sub1mark<= 35 || sub2mark<=35 || sub3mark<=35 || sub4mark<=35 || sub5mark<=35)
                    {
                        getnote("Your are Fail in ")
                            if(sub1mark<=35)
                            {
                                t="sub - 1";
                            }
                            if(sub2mark<=35)
                            {
                                t="sub - 2";
                            } 
                            if(sub3mark<=35)
                            {
                                t="sub - 3";
                            }
                            if(sub4mark<=35)
                            {
                                t="sub - 4";
                            } 
                            if(sub5mark<=35)
                            {
                                t="sub - 5";
                            }  
                            
                            getfail(t);
                    }
                    else
                    {
                        getnote("You are Pass.. congratulations");
                    } 

                    // maximum
                    if(sub1mark>sub2mark && sub1mark>sub3mark && sub1mark>sub4mark && sub1mark>sub5mark)
                    {
                        getmax("* Maximum mark obtained in Sub - 1");
                    }
                    else if(sub2mark>sub3mark && sub2mark>sub4mark && sub2mark>sub5mark)
                    {
                        getmax("* Maximum mark obtained in Sub - 2");
                    }
                    else if(sub3mark>sub4mark && sub3mark>sub5mark)
                    {
                        getmax("* Maximum mark obtained in sub - 3");
                    }
                    else if(sub4mark>sub5mark)
                    {
                        getmax("* Maximum mark obtained in sub - 4");
                    }
                    else 
                    {
                        getmax("* Maximum mark obtained in sub - 5");
                    }

                    // minimum
                    if(sub1mark<sub2mark && sub1mark<sub3mark && sub1mark<sub4mark && sub1mark<sub5mark)
                    {
                        getmin("* Minimum mark obtained in Sub - 1");
                    }
                    else if(sub2mark<sub3mark && sub2mark<sub4mark && sub2mark<sub5mark)
                    {
                        getmin("* Minimum mark obtained in Sub - 2");
                    }
                    else if(sub3mark<sub4mark && sub3mark<sub5mark)
                    {
                        getmin("* Minimum mark obtained in sub - 3");
                    }
                    else if(sub4mark<sub5mark)
                    {
                        getmin("* Minimum mark obtained in sub - 4");
                    }
                    else 
                    {
                        getmin("* Minimum mark obtained in sub - 5");
                    }

        }
        else
        {           
            goToTop = () => {
                this.scroll.scrollTo({x: 0, y: 0, animated: true});
            }
            Alert.alert("Warning","Enter details first...")
        }
            
                

    }

    function Remake()
    {
        nameInput('');
        sub1('');
        sub2('');
        sub3('');
        sub4('');
        sub5('');
        sum('');
        getpercentage('');
        getsign('');
        getgred('');
        getnote('');
        getfail('');
        getmax('');
        getmin('');

        // goToTop = () => {
        //      this.scroll.scrollTo({x: 0, y: 0, animated: true});
        // }
    }


    return (
        <>
        <ScrollView  ref={(c) => {this.scroll = c}}>    
            <View style={style.main}>
                <View style={style.fullinputfild}> 
                        <View style={style.heding_parent}>
                                <Text style={style.heding}>Fill Detail To Make Result</Text>
                        </View> 
                        <View style={style.input_parant}>
                                <View style={style.input_chaild}>
                                    <Text style={style.gaidpoint}>Student Name :</Text>
                                    <TextInput placeholder="Name" style={style.textinput} onChangeText={(n)=>{{nameInput(n)}}}></TextInput>
                                </View>
                                
                                <View style={style.input_chaild}>
                                    <Text style={style.gaidpoint}>Mark Subject-1 :</Text>
                                    <TextInput placeholder="mark " style={style.textinput} inputMode="numeric" onChangeText={(n)=>{{sub1(n)}}}></TextInput>
                                </View>
                                
                                <View style={style.input_chaild}>
                                    <Text style={style.gaidpoint}>Mark Subject-2 :</Text>
                                    <TextInput placeholder="mark" style={style.textinput} inputMode="numeric" onChangeText={(n)=>{{sub2(n)}}}></TextInput>
                                </View>
                                
                                <View style={style.input_chaild}>
                                    <Text style={style.gaidpoint}>Mark Subject-3 :</Text>
                                    <TextInput placeholder="mark" style={style.textinput} inputMode="numeric" onChangeText={(n)=>{{sub3(n)}}}></TextInput>
                                </View>
                                
                                <View style={style.input_chaild}>
                                    <Text style={style.gaidpoint}>Mark Subject-4 :</Text>
                                    <TextInput placeholder="mark" style={style.textinput} inputMode="numeric" onChangeText={(n)=>{{sub4(n)}}}></TextInput>
                                </View>
                                
                                <View style={style.input_chaild}>
                                    <Text style={style.gaidpoint}>Mark Subject-5 :</Text>
                                    <TextInput placeholder="mark" style={style.textinput} inputMode="numeric" onChangeText={(n)=>{{sub5(n)}}}></TextInput>
                                </View>
                        </View>
                        <View style={style.button_parent}>
                                 <Pressable style={style.button} onPress={Result} onPressIn={this.goToDown}><Text style={style.button_txt}>Result</Text></Pressable>
                        </View>
                </View>
            </View>
            
{/* =================================================================================================== */}
             <View style={style.main_second}>
                 <View style={style.Result_parent}>
                        <View style={style.result_heding}>
                                <Text style={style.nameheding}>Result</Text>
                        </View>
                        <View style={style.output_parent}>
                                <View style={style.name_out_Pere}>
                                    <Text style={style.name_out}>Name:- {name}</Text>
                                </View>

                                <View style={style.menu_parent}>
                                    <Text style={style.subject_menu}>Subject</Text>
                                    <Text style={style.subject_menu}>To Get</Text>
                                    <Text style={style.subject_menu}>obtained</Text>
                                </View>

                                {/* marks...  */}
                                <View style={style.menu_parent1}>
                                    <Text style={style.subject_menu1}>Sub - 1</Text>
                                    <Text style={style.subject_menu1}>100</Text>
                                    <Text style={style.subject_menu1}>{sub1mark}</Text>
                                </View> 
                                <View style={style.menu_parent1}>
                                    <Text style={style.subject_menu1}>Sub - 2</Text>
                                    <Text style={style.subject_menu1}>100</Text>
                                    <Text style={style.subject_menu1}>{sub2mark}</Text>
                                </View> 
                                <View style={style.menu_parent1}>
                                    <Text style={style.subject_menu1}>Sub - 3</Text>
                                    <Text style={style.subject_menu1}>100</Text>
                                    <Text style={style.subject_menu1}>{sub3mark}</Text>
                                </View>
                                <View style={style.menu_parent1}>
                                    <Text style={style.subject_menu1}>Sub - 4</Text>
                                    <Text style={style.subject_menu1}>100</Text>
                                    <Text style={style.subject_menu1}>{sub4mark}</Text>
                                </View>
                                <View style={style.menu_parent5}>
                                    <Text style={style.subject_menu1}>Sub - 5</Text>
                                    <Text style={style.subject_menu1}>100</Text>
                                    <Text style={style.subject_menu1}>{sub5mark}</Text>
                                </View>

                                {/* total ... */}
                                <View style={style.menu_parent6}>
                                    <Text style={style.subject_menu6_1}>Total</Text>
                                    <Text style={style.subject_menu6_2}>500</Text>
                                    <Text style={style.subject_menu6_3}>{sumofsub}</Text>
                                </View>
                                <View style={style.menu_parent6}>
                                    <Text style={style.subject_menu6_1}>Grade</Text>
                                    <Text style={style.subject_menu6_2}> - </Text>
                                    <Text style={style.subject_menu6_3}>{gred}</Text>
                                </View>
                                <View style={style.menu_parent6}>
                                    <Text style={style.subject_menu6_1}>Percentage</Text>
                                    <Text style={style.subject_menu6_2}> - </Text>
                                    <Text style={style.subject_menu6_3}>{percentage}{sign}</Text>
                                </View>

                                <View style={style.max_min_status}>
                                    <Text style={style.max_min_status_font}>{max}</Text>
                                    <Text style={style.max_min_status_font}>{min}</Text>
                                </View>

                                <View style={style.note_parent}>
                                    <Text style={style.note} >{note}{fail}</Text>
                                </View>

                                <View style={style.button_parent}>
                                 <Pressable style={style.button} onPress={Remake} onPressIn={this.goToTop} ><Text style={style.button_txt}>Re-make</Text></Pressable>
                                </View>
                        </View>
                 </View>
             </View>
        </ScrollView>
        </>

          
    )
}
export default Stu_Result;

const style=StyleSheet.create({

    main :{
        height:765,
    },
    fullinputfild:{
        height:"100%",
        borderBottomWidth:5,
        borderColor:"skyblue",
    },
    heding_parent:{
        height:"10%",
    },
    heding:{
        height:"100%",
        backgroundColor:"black",
        fontSize:30,
        fontWeight:"bold",
        textAlign:"center",
        textAlignVertical:"center",
        color:"skyblue",
        borderBottomWidth:5,
        borderTopWidth:5,
        borderColor:"skyblue",
    },
    input_parant:{
        height:"80%",
        flexDirection:"column",
        justifyContent:"space-evenly",
    },
    input_chaild:{
        width:"100%",
        flexDirection:"column",
    },

    gaidpoint:{
        width:"100%",
        fontSize:20,
        color:"black",
        fontWeight:"bold",
    },
    textinput:{
        width:"100%",
        borderWidth:3,
        fontSize:20,
        color:"black",
        fontWeight:"bold",
        borderRadius:10,
    },

    button_parent:{
        width:"100%",
        height:"10%",
        alignSelf:"center",
        justifyContent:"center",
    },
    button:{
        width:"40%",
        alignSelf:"center",
        borderRadius:20,
        borderWidth:3,
        borderColor:"skyblue",
    },
    button_txt:{
        fontSize:30,
        letterSpacing:4,
        color:"skyblue",
        fontWeight:"bold",
        textAlign:"center",
    },
// ===========================================================================================

    main_second:{
        height:765,
        // backgroundColor:"black",
    },

    Result_parent:{
        height:"100%",
        // backgroundColor:"pink",
    },
    result_heding:{
        height:"10%",
    },
    nameheding:{
        height:"100%",
        backgroundColor:"black",
        fontSize:30,
        fontWeight:"bold",
        textAlign:"center",
        textAlignVertical:"center",
        color:"skyblue",
        borderBottomWidth:5,
        borderTopWidth:5,
        borderColor:"skyblue",
        letterSpacing:5,
    },

    output_parent:{
        height:"90%",
        // backgroundColor:"darkgrey"
    },

    name_out_Pere:{
        height:"7%",
        // backgroundColor:"white",
        borderBottomWidth:5,
        borderTopWidth:1,
    },
    name_out:{
        height:"100%",
        textAlignVertical:"center",
        fontSize:25,
        fontWeight:"bold",
        color:"black",
        letterSpacing:1,
    },
    menu_parent:{
        height:"7%",
        borderBottomWidth:2,
        flexDirection:"row",
    },
    subject_menu:{
        height:"100%",
        width:"33.33%",
        fontSize:20,
        textAlign:"center",
        textAlignVertical:"center",
        fontWeight:"900",
        color:"black",
        backgroundColor:"skyblue",
        borderRightWidth:3,
        borderBottomWidth:3,
    },

    menu_parent1:{
        height:"6%",
        borderBottomWidth:1,
        flexDirection:"row",
    },
    menu_parent5:{
        height:"6%",
        borderBottomWidth:5,
        flexDirection:"row",
    },

    subject_menu1:{
        height:"100%",
        width:"33.33%",
        fontSize:20,
        textAlign:"center",
        textAlignVertical:"center",
        fontWeight:"bold",
        color:"black",
        borderRightWidth:3,
    },

    menu_parent6:{
        height:"6%",
        // borderBottomWidth:2,
        flexDirection:"row",
        // justifyContent:"flex-end",
    },
    subject_menu6_1:{
        height:"100%",
        width:"33.33%",
        fontSize:20,
        backgroundColor:"rgba(135,206,235,0.4)",
        textAlign:"center",
        textAlignVertical:"center",
        fontWeight:"bold",
        color:"black",
        borderRightWidth:3, 
        borderLeftWidth:3,
        borderBottomWidth:3
    },
    subject_menu6_2:{
        height:"100%",
        width:"33.33%",
        fontSize:20,
        textAlign:"center",
        textAlignVertical:"center",
        fontWeight:"900",
        color:"black",
        borderRightWidth:3, 
        borderBottomWidth:3 
    },
    subject_menu6_3:{
        height:"100%",
        width:"33.33%",
        fontSize:25,
        textAlign:"center",
        textAlignVertical:"center",
        fontWeight:"900",
        color:"black",
        borderRightWidth:3, 
        borderBottomWidth:3
    },

    max_min_status:{
        height:"10%",
    },
    max_min_status_font:{
        height:"50%",
        fontSize:18,
        textAlign:"center",
        textAlignVertical:"center",
        color:"black",
        fontWeight:"bold",
        borderBottomWidth:1
    },

    note_parent:{
        height:"6%",
    },
    note:{
        height:"100%",
        borderWidth:3,
        fontSize:22,
        textAlign:"center",
        textAlignVertical:"center",
        color:"black",
        fontWeight:"bold",
        borderColor:"skyblue"
    },
})