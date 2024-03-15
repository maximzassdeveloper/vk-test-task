import axios from 'axios'

export interface GetRandomFactResponse {
  fact: string
  length: number
}

export const getRandomFact = () => {
  return axios.get<GetRandomFactResponse>('https://catfact.ninja/fact')
}
