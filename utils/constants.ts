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
  },
  secondaryButton: {
    backgroundColor: '#EEEEF0',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderStyle: 'solid',
    borderColor: '#393A40',
    borderWidth: 1,
    borderRadius: borderRadius,
  },
  textSecondaryButton: {
    color: 'black',
    fontFamily: fontFamily,
    fontSize: 16,
  },
})
