import { useEffect, useRef } from 'react'
import { AnyCallback } from '../types/global'
import { useEvent } from './useEvent'

export const useDebounceCallback = <T extends AnyCallback>(callback: T, ms: number) => {
  const timeoutRef = useRef<NodeJS.Timeout>()

  const resultCallback = useEvent((...args: Parameters<T>) => {
    clearTimeout(timeoutRef.current)

    timeoutRef.current = setTimeout(() => {
      callback(...args)
    }, ms)
  })

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [])

  return resultCallback
}
