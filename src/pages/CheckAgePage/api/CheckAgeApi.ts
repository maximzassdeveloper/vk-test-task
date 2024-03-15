import axios from 'axios'

export interface CheckAgeByNameResponse {
  count: number
  name: string
  age: null | number
}

export const checkAgeByName = (name: string) => {
  return axios.get<CheckAgeByNameResponse>('https://api.agify.io/', {
    params: { name },
  })
}
