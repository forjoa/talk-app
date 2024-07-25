import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    console.error('Failed to save the data to the storage', e)
  }
}

export const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if (value !== null) {
      return value
    }
  } catch (e) {
    console.error('Failed to fetch the data from storage', e)
  }
}

export const deleteItem = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (e) {
    console.error(`Error while deleting data: ${e}`)
  }
}
