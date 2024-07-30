import { useRouter, useLocalSearchParams } from 'expo-router'
import { View, Text, Pressable } from 'react-native'
import { API, styles } from '../../utils/constants'
import AntDesign from '@expo/vector-icons/AntDesign'
import { useEffect, useState } from 'react'
import io from 'socket.io-client'
import { fetchUsername } from '../../utils/lib'

export default function DetailsScreen() {
  const [currentUserID, setCurrentUserID] = useState<number | undefined>(
    undefined
  )
  const [messages, setMessages] = useState<any[]>([])
  const [otherFullname, setOtherFullname] = useState<any>()
  const [socket, setSocket] = useState<any>(null)
  const [saving, setSaving] = useState<boolean>()
  const { id } = useLocalSearchParams()
  const router = useRouter()

  useEffect((): any => {
    const newSocket = io('wss://talk-backend-l15w.onrender.com')
    setSocket(newSocket)

    fetchUsername().then((response) => setCurrentUserID(response.user_id))

    return () => newSocket.close()
  }, [])

  useEffect(() => {
    if (id) {
      fetch(`${API}/api/chats/conversation/${id}`)
        .then((res) => res.json())
        .then((response) => setMessages(response))
    }
  }, [id])

  useEffect(() => {
    if (id && currentUserID) {
      fetch(`${API}/api/users/getOtherUsername`)
        .then((res) => res.json())
        .then((response) => setOtherFullname(response.other_fullname))
    }
  }, [id, currentUserID])

  useEffect(() => {
    if (socket && id) {
      socket.emit('joinRoom', id.toString()) // join to the room with that id

      socket.on('chat message', (message: any) => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { content: message.message, sender_id: message.currentUserID },
        ])
      })
    }
  }, [socket, id])

  return (
    <View style={styles.container}>
      <View style={styles.navContainer}>
        <View style={styles.header}>
          <View style={styles.chatHeader}>
            <Pressable onPress={() => router.back()}>
              <AntDesign name='arrowleft' size={20} color='white' />
            </Pressable>
            <Text style={styles.text}>Details of chat: {id} </Text>
          </View>
        </View>
      </View>
    </View>
  )
}
