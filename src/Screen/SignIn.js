import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { AuthContext } from '../App';

export default function SignInScreen() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
  
    const { signIn } = React.useContext(AuthContext);
  
    return (
      <View>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.inputBox}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.inputBox}
        />
        <Button title="Sign in" onPress={() => signIn({ username, password })} />
      </View>
    );
  };

  const styles =  StyleSheet.create({
    inputBox: {
        margin: 20,
    }
});