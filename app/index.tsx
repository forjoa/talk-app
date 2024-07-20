import { View, Text, Pressable } from 'react-native'
import { useRouter } from 'expo-router'
import { styles } from '../utils/constants'
import { useEffect, useState } from 'react'
import { deleteItem, getData } from '../utils/localStorage'

export default function HomeScreen() {
  const [username, setUsername] = useState<string>()
  const router = useRouter()

  useEffect(() => {
    getData('user').then((u) => setUsername(u))
  }, [username])

  const logOut = async () => {
    await deleteItem('user')
    router.push('/login')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido a la app, {username}!</Text>
      <Pressable onPress={logOut}>
        <Text style={styles.warningButton}>Log out</Text>
      </Pressable>
    </View>
  )
}
