import { View, Text, Button } from 'react-native'
import React from 'react'

const Login = ({navigation}) => {
  return (
    <View>
        
      <Text>Login </Text>

      <Button title='Login' onPress={()=>{navigation.navigate('DrawerNav')}}></Button>

    </View>
  )
}

export default Login