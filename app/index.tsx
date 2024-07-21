import { View, Text, Pressable } from 'react-native'
import { useRouter } from 'expo-router'
import { styles } from '../utils/constants'
import { useEffect, useState } from 'react'
import { deleteItem, getData } from '../utils/localStorage'

export default function HomeScreen() {
  const [username, setUsername] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const fetchUsername = async () => {
      const user = await getData('user')
      if (user) {
        setUsername(user)
      } else {
        router.replace('/login')
      }
    }
    fetchUsername()
  }, [])

  const logOut = async () => {
    await deleteItem('user')
    router.replace('/login')
  }

  if (username === null) {
    return null
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
