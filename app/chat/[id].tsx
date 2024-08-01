import { useRouter, useLocalSearchParams } from 'expo-router'
import { View, Text, Pressable } from 'react-native'
import { API, styles } from '../../utils/constants'
import AntDesign from '@expo/vector-icons/AntDesign'
import { useEffect, useState } from 'react'
import io from 'socket.io-client'
import { fetchUsername } from '../../utils/lib'
import Messages from '../../components/Messages'
import MessageInput from '../../components/MessageInput'

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
      fetch(`${API}/api/users/getOtherUsername`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          conversation_id: id,
          current_user_id: currentUserID,
        }),
      })
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

  const sendMessage = (message: string) => {
    if (socket && id) {
      socket.emit('chat message', {
        room: id.toString(),
        msg: { message, currentUserID },
      })
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.navContainer}>
        <View style={styles.header}>
          <View style={styles.chatHeader}>
            <Pressable onPress={() => router.back()}>
              <AntDesign name='arrowleft' size={20} color='white' />
            </Pressable>
            <View style={styles.avatar}>
              <Text style={styles.text}>
                {otherFullname
                  ? otherFullname
                      .toString()
                      .split(' ')
                      .map((name: string) => name.charAt(0))
                      .join('')
                  : ''}
              </Text>
            </View>
            <Text style={styles.text}>{otherFullname}</Text>
          </View>
        </View>
        <Messages messages={messages} currentUserID={currentUserID as number} />
        {currentUserID && (
          <MessageInput
            sendMessage={sendMessage}
            chatId={id}
            currentUserID={currentUserID}
          />
        )}
      </View>
    </View>
  )
}
