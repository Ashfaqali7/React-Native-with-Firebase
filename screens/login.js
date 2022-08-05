import React, {useState} from 'react';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import styles from '../styles';

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
      <View
        style={[
          styles.h100,
          styles.justifyContentCenter,
          styles.p2,
          styles.bgInfo,
        ]}>
        <View>
          <Text style={[styles.textCenter, styles.fs1, styles.textWhite]}>
            Login
          </Text>
        </View>
        <View style={styles.py2}>
          <TextInput
            style={[styles.input, styles.w100]}
            value={email}
            onChangeText={e => setEmail(e)}
            placeholder="Email"
          />
        </View>
        <View style={styles.py2}>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={e => setPassword(e)}
            placeholder="Password"
          />
        </View>
        <View>
          <Button onPress={createUser} title="Create User" />
        </View>
        <View style={[styles.py2, styles.flexRow]}>
          <Text style={[styles.textWhite, styles.fs4]}>
            do you have an account?
          </Text>
          <TouchableOpacity
            style={[
              styles.borderBottom1,
              styles.borderBottomWhite,
              styles.ms1,
            ]}>
            <Text style={[styles.textWhite, styles.fs4]}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
export default Login;
