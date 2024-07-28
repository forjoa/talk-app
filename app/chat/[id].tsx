import { useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'
import { styles } from '../../utils/constants'

export default function DetailsScreen() {
  const { id } = useLocalSearchParams()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details of chat: {id} </Text>
    </View>
  )
}
