import { useCallback, useEffect, useRef } from 'react'
import { AnyCallback } from '../types/global'

export const useEvent = <T extends AnyCallback>(callback: T) => {
  const callbackRef = useRef(callback)

  const resultCallback = useCallback(
    (...args: Parameters<T>) => {
      callbackRef.current.apply(null, args)
    },
    [callbackRef]
  )

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  return resultCallback
}
