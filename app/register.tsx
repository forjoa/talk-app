import { View, Text, Pressable, TextInput } from 'react-native'
import { useRouter } from 'expo-router'
import { styles } from '../utils/constants'
import { useState } from 'react'

export default function RegisterScreen() {
  const [fullname, setFullname] = useState<string>()
  const [username, setUsername] = useState<string>()
  const [password, setPassword] = useState<string>()
  const router = useRouter()

  return (
    <View style={styles.container}>
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
        <Pressable>
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
