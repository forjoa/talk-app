import React, { useState } from 'react'
import { View, TextInput, Pressable, Text } from 'react-native'
import { API, styles } from '../utils/constants'
import Feather from '@expo/vector-icons/Feather'

function MessageInput({ chatId, currentUserID, sendMessage }: any) {
  const [formData, setFormData] = useState({
    conversationId: chatId,
    senderId: currentUserID,
    content: '',
  })

  const handleSubmit = async () => {
    if (formData.conversationId && formData.senderId && formData.content) {
      sendMessage(formData.content.trim())
      await fetch(`${API}/api/chats/message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, content: formData.content.trim() }),
      })

      setFormData({ ...formData, content: '' })
    }
  }

  const handleInputChange = (text: string) => {
    setFormData({ ...formData, content: text })
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
        />
        <Pressable onPress={handleSubmit} style={styles.messageSendButton}>
          <Feather name='send' size={18} color='black' />
        </Pressable>
      </View>
    </View>
  )
}

export default MessageInput
