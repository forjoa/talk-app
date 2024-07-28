import React, { useEffect, useRef } from 'react'
import { ScrollView, View, Text } from 'react-native'
import { styles } from '../utils/constants'

const Messages = ({
  messages,
  currentUserID,
}: {
  messages: any[]
  currentUserID: number
}) => {
  const messagesEndRef = useRef<ScrollView>(null)

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollToEnd({ animated: true })
    }
  }, [messages])

  return (
    <ScrollView
      style={styles.navContainer}
      contentContainerStyle={styles.chatList}
      ref={messagesEndRef}
    >
      {messages?.map((message, index) => (
        <View
          key={message.message_id ?? index}
          style={[
            styles.messageContainer,
            message.sender_id === currentUserID
              ? styles.messageRight
              : styles.messageLeft,
          ]}
        >
          <View
            style={[
              styles.messageBubble,
              message.sender_id === currentUserID
                ? styles.messageBubbleRight
                : styles.messageBubbleLeft,
            ]}
          >
            <Text style={styles.messageText}>{message.content}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  )
}

export default Messages
