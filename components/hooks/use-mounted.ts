"use client"

import { useSyncExternalStore } from "react"

const emptySubscribe = () => () => {}

/**
 * useMounted — Returns true only after the component has mounted on the client.
 * Use to guard dynamic rendering that must match between SSR and CSR.
 */
export function useMounted(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )
}
