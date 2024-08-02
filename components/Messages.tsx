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
      style={styles.chatListContainer}
      contentContainerStyle={styles.chatList}
      ref={messagesEndRef}
      onContentSizeChange={() => messagesEndRef.current?.scrollToEnd({ animated: true })}
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
            <Text style={message.sender_id === currentUserID
                ? styles.messageTextRight
                : styles.messageTextLeft}>{message.content}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  )
}

export default Messages
