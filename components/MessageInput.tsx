import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Pressable, Text } from 'react-native'
import { API } from '../utils/constants'

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
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Type your message...'
          placeholderTextColor='#888'
          multiline
          onChangeText={handleInputChange}
          value={formData.content}
          onKeyPress={handleKeyPress}
        />
        <Pressable onPress={handleSubmit} style={styles.sendButton}>
          <Text style={styles.text}>Send</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: '#333',
    backgroundColor: '#000',
    padding: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#666',
    borderRadius: 8,
    padding: 8,
  },
  textInput: {
    flex: 1,
    color: '#fff',
    fontSize: 14,
    fontFamily: 'JetBrainsMono',
  },
  sendButton: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
  },
  sendIcon: {
    width: 24,
    height: 24,
  },
  text: {
    fontFamily: 'JetBrainsMono',
  },
})

export default MessageInput
