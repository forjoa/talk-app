import React, { useState } from 'react'
import { View, TextInput, Pressable, Text } from 'react-native'
import { API, styles } from '../utils/constants'

function MessageInput({ chatId, currentUserID, sendMessage }: any) {
  const [formData, setFormData] = useState({
    conversationId: chatId,
    senderId: currentUserID,
    content: '',
  })

  const handleSubmit = async () => {
    if (formData.conversationId && formData.senderId && formData.content) {
      sendMessage(formData.content)
      await fetch(`${API}/api/chats/message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      setFormData({ ...formData, content: '' })
    }
  }

  const handleInputChange = (text: string) => {
    setFormData({ ...formData, content: text })
  }

  const handleKeyPress = (e: any) => {
    if (e.nativeEvent.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  return (
    <View style={styles.messageInputContainer}>
      <View style={styles.messageInputInnerContainer}>
        <TextInput
          style={styles.messageTextInput}
          placeholder='Type your message...'
          placeholderTextColor='#888'
          multiline
          onChangeText={handleInputChange}
          value={formData.content}
          onKeyPress={handleKeyPress}
        />
        <Pressable onPress={handleSubmit} style={styles.messageSendButton}>
          <Text style={styles.text}>Send</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default MessageInput
