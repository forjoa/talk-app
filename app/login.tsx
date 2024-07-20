import { View, Text, Pressable, TextInput, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { styles } from '../utils/constants'
import { storeData } from '../utils/localStorage'

export default function LoginScreen() {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const router = useRouter()

  const handleLogin = () => {
    storeData('user', username)
    router.push('/')
  }

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>You are welcome again!</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder='Username'
            onChangeText={setUsername}
            value={username}
            style={styles.input}
            placeholderTextColor='#888'
          />
          <TextInput
            placeholder='Password'
            onChangeText={setPassword}
            value={password}
            style={styles.input}
            placeholderTextColor='#888'
            secureTextEntry={true}
          />
        </View>
        <Pressable onPress={handleLogin}>
          <View style={styles.primaryButton}>
            <Text style={styles.text}>Log in</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => router.push('/register')}>
          <View style={styles.secondaryButton}>
            <Text style={styles.textSecondaryButton}>Register</Text>
          </View>
        </Pressable>
      </View>
    </View>
  )
}
