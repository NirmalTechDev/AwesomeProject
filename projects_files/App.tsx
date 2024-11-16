import React from "react";
import Apphome from "./appHome";
import Calculator from "./calculator";
import Tic_tac_toe from "./tic_tac_toe";
import Facebook from "./facebook";
import Simp_calcu from "./simp_calcu";
import Numberpuzzle from "./number_puzzle";
import Stu_Result from "./student_result";

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

function App()
{
  return(
    <NavigationContainer>
        <Stack.Navigator>
              <Stack.Screen name="Home" component={Apphome} options={{headerShown:false}} ></Stack.Screen>
              <Stack.Screen name="facebook" component={Facebook} options={{headerShown:false}} ></Stack.Screen>
              <Stack.Screen name="simpal-calcu" component={Simp_calcu} options={{headerShown:false}} ></Stack.Screen>
              <Stack.Screen name="calculator" component={Calculator} options={{headerShown:false}} ></Stack.Screen>
              <Stack.Screen name="result" component={Stu_Result} options={{headerShown:false}} ></Stack.Screen>
              <Stack.Screen name="tic-tac-toe" component={Tic_tac_toe} options={{headerShown:false}} ></Stack.Screen>
              <Stack.Screen name="puzzle" component={Numberpuzzle} options={{headerShown:false}} ></Stack.Screen>
        </Stack.Navigator> 
    </NavigationContainer>
              // <Apphome></Apphome>
              // <Calculator></Calculator>
              // <Facebook></Facebook>
              // <Tic_tac_toe></Tic_tac_toe>
              // <Numberpuzzle></Numberpuzzle>
              // <Simp_calcu></Simp_calcu>
              // <Student_result></Student_result>
  )
}    

export default App;

