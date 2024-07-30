import { API } from './constants'
import { getData } from './localStorage'

export const fetchUsername = async () => {
  const userSession = await getData('user')

  const result = await fetch(`${API}/api/auth/getPayload`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ encrypted: userSession }),
  }).then((res) => res.json())

  return result
}
