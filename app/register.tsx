import { View, Text, Pressable } from 'react-native'
import { useRouter } from 'expo-router'
import { styles } from '../utils/constants'

export default function RegisterScreen() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Register Screen</Text>
      <Pressable onPress={() => router.push('/login')}>
        <View style={styles.secondaryButton}>
          <Text style={styles.textSecondaryButton}>Return to login</Text>
        </View>
      </Pressable>
    </View>
  )
}
