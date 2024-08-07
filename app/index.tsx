import { View, Text, Pressable, TextInput, FlatList } from 'react-native'
import { Link, useRouter } from 'expo-router'
import { API, styles } from '../utils/constants'
import { useEffect, useState } from 'react'
import { deleteItem } from '../utils/localStorage'
import { fetchUsername } from '../utils/lib'
import Feather from '@expo/vector-icons/Feather'

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
    fetchUsername().then((res) => setUser(res))
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
          <Text style={styles.text}>
            Welcome,{' '}
            <Pressable
              onPress={() => router.push('/myProfile')}
              style={styles.linkButton}
            >
              <Text style={styles.textLink}>{user?.username}</Text>
            </Pressable>
            !
          </Text>
          <Pressable onPress={logOut}>
            <Text style={styles.warningButton}>
              <Feather name='log-out' size={22} color='red' />
            </Text>
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
                href={{
                  pathname: '/chat/[id]',
                  params: { id: item.conversation_id },
                }}
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
