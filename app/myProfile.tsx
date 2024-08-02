import { View, Text, Pressable, TextInput } from 'react-native'
import { API, styles } from '../utils/constants'
import AntDesign from '@expo/vector-icons/AntDesign'
import { useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import { fetchUsername } from '../utils/lib'
import ToastManager, { Toast } from 'toastify-react-native'

export default function MyProfile() {
  const [fullname, setFullname] = useState<string>()
  const [username, setUsername] = useState<string>()
  const [userId, setuserId] = useState<any>()
  const router = useRouter()

  useEffect(() => {
    fetchUsername().then((response) => {
      setFullname(response.fullname)
      setUsername(response.username)
      setuserId(response.user_id)
    })
  }, [])

  const handleSubmit = async () => {
    try {
      const result = await fetch(`${API}/api/users/update`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, fullname, user_id: userId }),
      }).then((res) => res.json())

      if (result.success) {
        Toast.success(result.message, 'top')
      } else {
        Toast.error(result.message, 'top')
      }
    } catch (e) {
      console.log(e)
      Toast.error('Error while updating info', 'top')
    }
  }

  return (
    <View style={styles.container}>
      <ToastManager height={55} textStyle={styles.textSecondaryButton} />
      <View style={styles.formContainer}>
        <Pressable onPress={() => router.back()}>
          <AntDesign name='arrowleft' size={20} color='white' />
        </Pressable>
        <Text style={styles.title}>Edit user information</Text>
        <Text style={styles.subtitle}>Update your profile details.</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder='Fullname'
            onChangeText={setFullname}
            value={fullname}
            style={styles.input}
            placeholderTextColor='#888'
          />
          <TextInput
            placeholder='Username'
            onChangeText={setUsername}
            value={username}
            style={styles.input}
            placeholderTextColor='#888'
          />
        </View>
        <Pressable onPress={handleSubmit}>
          <View style={styles.secondaryButton}>
            <Text style={styles.textSecondaryButton}>Save changes</Text>
          </View>
        </Pressable>
      </View>
    </View>
  )
}
