import { View, Text, Pressable } from 'react-native'
import { useRouter } from 'expo-router'
import { styles } from '../utils/constants'

export default function HomeScreen() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido a la app!</Text>
      <Pressable onPress={() => router.push('/login')}>
        <Text style={styles.warningButton}>Log out</Text>
      </Pressable>
    </View>
  )
}
