import { AxiosResponse } from 'axios'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { CheckAgeByNameResponse, checkAgeByName } from './CheckAgeApi'
import { UseQueryOptionsDto } from '@/shared/react-query'

const CHECK_AGE_BY_NAME_KEY = 'check-age/by-name/get'

export const useCheckAgeByName = (
  name: string,
  options?: UseQueryOptionsDto<CheckAgeByNameResponse>
) => {
  const queryClient = useQueryClient()

  const getFromCache = (name: string) => {
    return queryClient.getQueryData<AxiosResponse<CheckAgeByNameResponse>>([
      CHECK_AGE_BY_NAME_KEY,
      name,
    ])
  }

  const cancelQuery = () => {
    queryClient.cancelQueries({
      queryKey: [CHECK_AGE_BY_NAME_KEY],
      exact: false,
    })
  }

  const queryFnWithCache = async () => {
    cancelQuery()

    const cache = getFromCache(name)
    if (cache) {
      return cache
    }

    return await checkAgeByName(name)
  }

  const queryResult = useQuery({
    queryKey: [CHECK_AGE_BY_NAME_KEY, name],
    queryFn: queryFnWithCache,
    staleTime: Infinity,
    gcTime: Infinity,
    retry: 0,
    ...options,
  })

  return queryResult
}
