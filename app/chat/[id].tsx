import { useRouter, useLocalSearchParams } from 'expo-router'
import { View, Text, Pressable } from 'react-native'
import { styles } from '../../utils/constants'
import AntDesign from '@expo/vector-icons/AntDesign'

export default function DetailsScreen() {
  const { id } = useLocalSearchParams()
  const router = useRouter()

  return (
    <View style={styles.container}>
      <View style={styles.navContainer}>
        <View style={styles.header}>
          <View style={styles.chatHeader}>
            <Pressable onPress={() => router.back()}>
              <AntDesign name='arrowleft' size={24} color='white' />
            </Pressable>
            <Text style={styles.text}>Details of chat: {id} </Text>
          </View>
        </View>
      </View>
    </View>
  )
}
