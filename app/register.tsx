import { View, Text, Pressable, TextInput } from 'react-native'
import { useRouter } from 'expo-router'
import { API, styles } from '../utils/constants'
import { useState } from 'react'
import ToastManager, { Toast } from 'toastify-react-native'

export default function RegisterScreen() {
  const [fullname, setFullname] = useState<string>()
  const [username, setUsername] = useState<string>()
  const [password, setPassword] = useState<string>()
  const router = useRouter()

  const handleSubmit = async () => {
    if (username == '' || password == '') {
      Toast.error('Please, complete the form', 'top')
    } else {
      const result = await fetch(`${API}/api/auth/register`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, fullname, password }),
      }).then((res) => res.json())

      if (result.success) {
        router.push('/login')
      } else {
        Toast.error(result.message, 'top')
      }
    }
  }

  return (
    <View style={styles.container}>
      <ToastManager height={55} textStyle={styles.textSecondaryButton} />
      <View style={styles.formContainer}>
        <Text style={styles.title}>Register</Text>
        <Text style={styles.subtitle}>You are welcome again!</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder='Fullname'
            onChangeText={setFullname}
            value={fullname}
            style={styles.input}
            placeholderTextColor='#888'
          />
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
        <Pressable onPress={handleSubmit}>
          <View style={styles.primaryButton}>
            <Text style={styles.text}>Sign up</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => router.back()}>
          <View style={styles.secondaryButton}>
            <Text style={styles.textSecondaryButton}>Return to login</Text>
          </View>
        </Pressable>
      </View>
    </View>
  )
}
