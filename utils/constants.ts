import { StyleSheet } from 'react-native'

export const API = 'https://talk-backend-l15w.onrender.com'

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
  textLink: {
    fontFamily: fontFamily,
    fontSize: 16,
    color: 'white',
    textDecorationColor: 'white',
    textDecorationLine: 'underline',
    marginBottom: 0,
    paddingBottom: 0,
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
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
    borderRadius: borderRadius,
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
  chatListContainer: {
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  chatList: {
    marginTop: 10,
    marginBottom: 14,
  },
  listItem: {
    color: 'white',
    fontFamily: fontFamily,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#5F606A',
    borderRadius: borderRadius,
    padding: 10,
    marginBottom: 10,
  },
  messageContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  messageRight: {
    justifyContent: 'flex-end',
  },
  messageLeft: {
    justifyContent: 'flex-start',
  },
  messageBubble: {
    padding: 10,
    borderRadius: borderRadius,
    maxWidth: '80%',
  },
  messageBubbleRight: {
    backgroundColor: '#3D63DD',
    alignSelf: 'flex-end',
  },
  messageBubbleLeft: {
    backgroundColor: '#EEEEF0',
    alignSelf: 'flex-start',
  },
  messageTextRight: {
    color: 'white',
    fontFamily: 'JetBrainsMono',
  },
  messageTextLeft: {
    color: 'black',
    fontFamily: 'JetBrainsMono',
  },
  chatHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  avatar: {
    backgroundColor: '#555',
    padding: 10,
    borderRadius: 50,
  },
  messageInputContainer: {
    paddingTop: 10,
    marginBottom: -40,
  },
  messageInputInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#666',
    borderRadius: borderRadius,
    padding: 4,
  },
  messageTextInput: {
    flex: 1,
    color: '#fff',
    fontSize: 14,
    fontFamily: fontFamily,
    marginLeft: 6,
    paddingTop: 0
  },
  messageSendButton: {
    backgroundColor: '#fff',
    borderRadius: borderRadius,
    padding: 4,
  },
  messageSendIcon: {
    width: 18,
    height: 18,
  },
})
