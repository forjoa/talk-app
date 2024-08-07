import { View, Text, Pressable, TextInput } from 'react-native'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { API, styles } from '../utils/constants'
import { storeData } from '../utils/localStorage'
import ToastManager, { Toast } from 'toastify-react-native'

export default function LoginScreen() {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const router = useRouter()

  const handleLogin = async () => {
    if (username == '' || password == '') {
      Toast.error('Please, complete the form', 'top')
    } else {
      const result = await fetch(
        `${API}/api/auth/login`,
        {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        }
      ).then((res) => res.json())

      if (result.success) {
        await storeData('user', result.session)
        router.push('/')
      } else {
        Toast.error(result.message, 'top')
      }
    }
  }

  return (
    <View style={styles.container}>
      <ToastManager height={55} textStyle={styles.textSecondaryButton} />
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
