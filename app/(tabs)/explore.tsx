import { useState } from 'react'
import { View, Text, StyleSheet, Alert, TextInput, Button } from 'react-native'

export default function TabTwoScreen() {
  const [fullname, setFullname] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleRegister = () => {

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register form</Text>
      <TextInput
        placeholder='Fullname'
        value={fullname}
        onChangeText={(text) => setFullname(text)}
        style={styles.input}
      />
      <TextInput
        placeholder='Username'
        value={username}
        onChangeText={(text) => setUsername(text)}
        style={styles.input}
      />
      <TextInput
        placeholder='Password'
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        style={styles.input}
      />
      <View style={styles.button}>
      <Button title='Send' onPress={handleRegister} color={'white'} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 800,
  },
  input: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    width: '80%',
    color: '#fff',
  },
  button: {
    width: '80%',
    backgroundColor: '#2563eb',
    color: '#fff',
    borderRadius: 5,
  },
})
