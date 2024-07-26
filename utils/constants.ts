import { StyleSheet } from 'react-native'

export const fontFamily = 'JetBrainsMono'
export const borderRadius = 8

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    backgroundColor: '#303136',
    width: '80%',
    padding: 20,
    borderRadius: 10,
    gap: 10,
    borderWidth: 1,
    borderColor: '#6C6E79',
  },
  inputContainer: {
    gap: 8,
  },
  title: {
    fontFamily: fontFamily,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontFamily: fontFamily,
    fontSize: 16,
    color: '#B2B3BD',
  },
  text: {
    fontFamily: fontFamily,
    fontSize: 16,
    color: 'white',
  },
  warningButton: {
    color: 'red',
    fontFamily: fontFamily,
    fontSize: 16,
    backgroundColor: '#f004',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderStyle: 'solid',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: borderRadius,
    alignItems: 'center',
  },
  primaryButton: {
    color: 'white',
    fontFamily: fontFamily,
    fontSize: 16,
    backgroundColor: '#3D63DD',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderStyle: 'solid',
    borderColor: '#405EB2',
    borderWidth: 1,
    borderRadius: borderRadius,
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: '#EEEEF0',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderStyle: 'solid',
    borderColor: '#393A40',
    borderWidth: 1,
    borderRadius: borderRadius,
    alignItems: 'center',
  },
  textSecondaryButton: {
    color: 'black',
    fontFamily: fontFamily,
    fontSize: 16,
  },
  input: {
    color: '#B2B3BD',
    fontFamily: fontFamily,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#5F606A',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  navContainer: {
    height: '90%',
    width: '100%',
    margin: 10,
    borderRadius: borderRadius,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14
  }
})
