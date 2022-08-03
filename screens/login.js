import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let createUser = () => {
    let obj = {
      email,
      password,
    };
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('User account created & signed in!');
        database()
          .ref('/users/' + res.user.uid)
          .set(obj);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  return (
    <>
      <View>
        <View>
          <Text>Login</Text>
        </View>
        <View>
          <TextInput
            value={email}
            onChangeText={e => setEmail(e)}
            placeholder="Email"
          />
        </View>
        <View>
          <TextInput
            value={password}
            onChangeText={e => setPassword(e)}
            placeholder="Password"
          />
        </View>
        <View>
          <Button onPress={createUser} title="Create User" />
        </View>
      </View>
    </>
  );
}
export default Login;
