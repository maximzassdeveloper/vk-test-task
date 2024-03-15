import { UseFormRegisterReturn } from 'react-hook-form'

/**
 * Replace 'register' data from react-hook-form for VK UI fields
 */
export const vkUiRegister = <T extends string = string>(result: UseFormRegisterReturn<T>) => {
  const { ref, ...rest } = result
  return {
    getRef: ref,
    ...rest,
  }
}
