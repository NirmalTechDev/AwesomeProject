import React from "react";
import Apphome from "./projects_files/appHome";
import Calculator from "./projects_files/calculator";
import Tic_tac_toe from "./projects_files/tic_tac_toe";
import Facebook from "./projects_files/facebook";
import Simp_calcu from "./projects_files/simp_calcu";
import Numberpuzzle from "./projects_files/number_puzzle";

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Stu_Result from "./projects_files/student_result";


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

