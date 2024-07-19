import { View, Text, Button, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'

export default function LoginScreen() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Screen</Text>
      <Button
        title="Iniciar Sesión"
        onPress={() => router.push('/')}
      />
      <Button
        title="Registrarse"
        onPress={() => router.push('/register')}
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
