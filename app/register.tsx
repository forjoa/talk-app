import { View, Text, Button, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'

export default function RegisterScreen() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Register Screen</Text>
      <Button
        title="Volver a Login"
        onPress={() => router.push('/login')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'JetBrainsMono',
    fontSize: 16,
    color: 'white',
  },
})
