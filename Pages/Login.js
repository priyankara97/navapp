import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react'

const Login = ({ navigation }) => {

  const [id, setId] = useState('');
  const [name, setName] = useState('');

  const [address,setAddress] = useState('');

  const [tel, setTel] = useState('');

  const [weight, setWeight] = useState('');

  const saveStudent=()=>{
    fetch('https://192.168.8.112:3000/api/student/save_students', {
  method: 'POST',
  body: JSON.stringify({
    std_id:id,
    name:name,
    address:address,
    tel_no:tel,
    weight:weight
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

  }

  return (
    <View>



      <TextInput value={id} onChangeText={(val) => {setId(val)}} placeholder='enter id'></TextInput>
      <TextInput value={name} onChangeText={(val)=>{setName(val)}}    placeholder='enter name'></TextInput>

      <TextInput  value={address} onChangeText={(val)=>{setAddress(val)}} placeholder='enter address'></TextInput>

      <TextInput value={tel} onChangeText={(val)=>{setTel(val)}} placeholder='enter tel_no'></TextInput>

      <TextInput value={weight} onChangeText={(val)=>{setWeight(val)}} placeholder='enter weight'></TextInput>

      <Button  onPress={saveStudent()} title='Save student'></Button>
      <View style={{ marginTop: 20 }}>
        <Button title='Login' onPress={() => { navigation.navigate('DrawerNav') }}></Button>

      </View>


    </View>
  )
}

export default Login