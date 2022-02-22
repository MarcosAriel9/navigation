import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Index from '../screens/index'
import Training from '../screens/training'
import { Icon } from 'react-native-elements/dist/icons/Icon';
import Navigation from './navigation';

const Stack = createStackNavigator();

export default function indexStack(props) {
  const {navigation}= props;  
  return (
      <Stack.Navigator>
          <Stack.Screen name='Index' component={Index} options={{title: "Inicio", headerLeft:() => 
        <Icon onPress={()=> navigation.openDrawer()} type='material-community' name='menu' size={22} color={"black"}/>}}/>
          {/* <Stack.Screen name='Training' component={Training} options={{title: "Training"}}/> */}
      </Stack.Navigator>
  )
}