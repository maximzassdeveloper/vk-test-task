import { useMutation } from '@tanstack/react-query'
import { GetRandomFactResponse, getRandomFact } from './FactApi'
import { UseMutationOptionsDto } from '@/shared/react-query'

export const useGetRandomFact = (options?: UseMutationOptionsDto<GetRandomFactResponse>) => {
  return useMutation({ mutationFn: getRandomFact, ...options })
}
