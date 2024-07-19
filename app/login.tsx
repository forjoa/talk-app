import { View, Text, Pressable } from 'react-native'
import { useRouter } from 'expo-router'
import { styles } from '../utils/constants'

export default function LoginScreen() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Screen</Text>
      <Pressable onPress={() => router.push('/')}>
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
  )
}
