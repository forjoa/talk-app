import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value)
    console.log('Data successfully saved')
  } catch (e) {
    console.error('Failed to save the data to the storage', e)
  }
}

export const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if (value !== null) {
      console.log('Data retrieved successfully:', value)
      return value
    }
  } catch (e) {
    console.error('Failed to fetch the data from storage', e)
  }
}
