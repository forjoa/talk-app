import bcrypt from 'react-native-bcrypt'
import { db } from './db'
import { storeData } from './localStorage'
import { SignJWT } from 'jose'

const secretKey = 'secret'
const key = new TextEncoder().encode(secretKey)

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1 week')
    .sign(key)
}

export async function login(username: string, password: string) {
  const { rows } = await db.execute({
    sql: 'SELECT * FROM users WHERE username = ?',
    args: [username],
  })

  if (rows?.length !== 1) {
    return { success: false, message: 'Username is not registered' }
  }

  const user = rows[0]

  const passwordMatch = await new Promise((resolve, reject) => {
    bcrypt.compare(password, user.password as string, (err: any, res: any) => {
      if (err) reject(err)
      resolve(res)
    })
  })

  if (!passwordMatch) {
    return { success: false, message: 'Wrong password' }
  }

  const session = await encrypt(user)

  await storeData('session', session)

  return { success: true }
}
