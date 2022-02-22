import { Text, View, Button } from 'react-native'
import React from 'react'

export default function index(props) {
  const {navigation}=props;
  return (
    <View>
      <Text>Mi Index🐱‍🐉</Text>
      <Button title='Ir a Smart'
      onPress={()=>navigation.navigate("Smart")}
      />
      <Button title='Ir al Perfil'
      onPress={()=>navigation.navigate("Profile")}
      />
      <Button title='Ir a Training'
      onPress={()=>navigation.navigate("Smart", {screen :"Training"})}
      />
    </View>
  )
}

