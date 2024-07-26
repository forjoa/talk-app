import { View, Text, Pressable, TextInput, FlatList } from 'react-native'
import { Link, useRouter } from 'expo-router'
import { API, styles } from '../utils/constants'
import { useEffect, useState } from 'react'
import { deleteItem, getData } from '../utils/localStorage'

interface UserI {
  user_id: number
  username: string
  fullname: string
  password: string
  created_at: Date
  iat: any
  exp: any
}

export default function HomeScreen() {
  const [user, setUser] = useState<UserI | null>(null)
  const [userSearching, setUserSearching] = useState<string>()
  const [myChats, setMyChats] = useState<any[]>([])
  const router = useRouter()

  useEffect(() => {
    const fetchUsername = async () => {
      const userSession = await getData('user')
      if (userSession) {
        const result = await fetch(`${API}/api/auth/getPayload`, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ encrypted: userSession }),
        }).then((res) => res.json())
        setUser(result)
      } else {
        router.replace('/login')
      }
    }
    fetchUsername()
  }, [])

  useEffect(() => {
    const fetchChats = async () => {
      if (user !== null) {
        const result = await fetch(`${API}/api/chats/${user.user_id}`).then(
          (res) => res.json()
        )
        setMyChats(result)
      }
    }
    fetchChats()
  }, [user])

  const logOut = async () => {
    await deleteItem('user')
    router.replace('/login')
  }

  if (user === null) {
    return null
  }

  return (
    <View style={styles.container}>
      <View style={styles.navContainer}>
        <View style={styles.header}>
          <Text style={styles.text}>Welcome, {user?.username}!</Text>
          <Pressable onPress={logOut}>
            <Text style={styles.warningButton}>Log out</Text>
          </Pressable>
        </View>
        <TextInput
          placeholder='Search a user'
          onChangeText={setUserSearching}
          value={userSearching}
          style={styles.input}
          placeholderTextColor='#888'
        />
        {myChats?.length === 0 ? (
          <Text style={styles.text}>Loading data...</Text>
        ) : (
          <FlatList
            data={myChats}
            keyExtractor={(myChats) => myChats.conversation_id}
            style={styles.chatList}
            renderItem={({ item }) => (
              <Link
                href={`/chat/${item.conversation_id}`}
                style={styles.listItem}
              >
                {item.other_username}
              </Link>
            )}
          />
        )}
      </View>
    </View>
  )
}
